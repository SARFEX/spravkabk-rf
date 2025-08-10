import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const projectRoot = path.resolve(__dirname, '..');
  const clientDist = path.resolve(projectRoot, 'dist');
  const serverDir = path.resolve(projectRoot, '.ssr');
  const serverEntry = path.resolve(serverDir, 'ssr-entry.js');
  const indexHtmlPath = path.resolve(clientDist, 'index.html');

  // 1) Читаем сгенерированный клиентский index.html
  let template = await fs.readFile(indexHtmlPath, 'utf8');

  // 2) Импортируем SSR-рендерер
  const entryUrl = pathToFileURL(serverEntry).href;
  const { render } = await import(entryUrl);

  // 3) Рендерим HTML приложения (статическая разметка)
  const appHtml = render();

  // 4) Встраиваем HTML внутрь #root
  // Более гибкая замена (на случай пробелов/переносов внутри корневого div)
  // Пытаемся заменить любой существующий #root (с одиночными/двойными кавычками и любым содержимым)
  const rootPattern = /<div\s+id=["']root["'][^>]*>[\s\S]*?<\/div>/;
  let html = template.replace(
    rootPattern,
    `<div id="root">${appHtml}</div>`
  );
  if (html === template) {
    console.warn('⚠ Не удалось найти <div id="root">...</div> для замены. Проверяю альтернативный шаблон...');
    // Альтернативный, более узкий случай пустого root
    html = template.replace(
      /<div\s+id=["']root["'][^>]*>\s*<\/div>/,
      `<div id="root">${appHtml}</div>`
    );
    if (html === template) {
      throw new Error('Не удалось внедрить статическую разметку: #root не найден в dist/index.html');
    }
  }

  // 5) Удаляем modulepreload и module-скрипты, чтобы страница была чисто статической
  // Удаляем все <link rel="modulepreload" ...>
  html = html.replace(/<link\s+rel=["']modulepreload["'][^>]*>\s*/g, '');

  // Удаляем все <script type="module" ...></script> (с содержимым или без)
  html = html
    .replace(/<script\b[^>]*type=["']module["'][^>]*>\s*[\s\S]*?<\/script>\s*/g, '')
    .replace(/<script\b[^>]*type=["']module["'][^>]*>\s*<\/script>\s*/g, '')
    .replace(/<script\b[^>]*type=["']module["'][^>]*\/>\s*/g, '');

  // 6) Сохраняем итоговый файл
  await fs.writeFile(indexHtmlPath, html, 'utf8');

  // 7) Чистим временную серверную сборку
  await fs.rm(serverDir, { recursive: true, force: true });
  console.log('✔ Пререндер завершён: dist/index.html обновлён (JS удалён, осталось только статическое HTML+CSS). Временная папка .ssr удалена.');
}

prerender().catch((err) => {
  console.error('Пререндер упал:', err);
  process.exit(1);
});
