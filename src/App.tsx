import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Shield,
  GraduationCap,
  FileText,
  CheckCircle,
  Clock,
  MessageCircle,
  Star,
  Users,
  Award,
  AlertCircle,
  ArrowRight,
  Download,
  HeadphonesIcon,
  Zap,
  Target,
  TrendingUp,
  User,
  Baby,
  FolderOpen,
  Scale,
  Eye,
  XCircle,
  CheckIcon,
  ExternalLink
} from 'lucide-react';

// Официальные SVG иконки мессенджеров с alt атрибутами
const TelegramIcon = ({ className, alt }: { className?: string; alt?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={alt || "Иконка Telegram"}
  >
    <title>Telegram</title>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const WhatsAppIcon = ({ className, alt }: { className?: string; alt?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={alt || "Иконка WhatsApp"}
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

// Логотип Авито
const AvitoLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1494 380"
    fill="none"
    role="img"
    aria-label="Логотип Авито"
  >
    <title>Авито</title>
    <g clipPath="url(#clip0_1542_6)">
      <path d="M571.081 8.93481L442.188 345.694H511.456L538.205 275.36H675.054L701.676 345.694H770.418L642.003 8.93481H571.081ZM561.676 213.555L606.773 95.054L651.615 213.555H561.676Z" fill="currentColor" />
      <path d="M1371.41 104.856C1347.17 104.856 1323.48 112.042 1303.33 125.506C1283.18 138.969 1267.48 158.106 1258.21 180.494C1248.93 202.883 1246.51 227.519 1251.23 251.287C1255.96 275.055 1267.63 296.888 1284.77 314.023C1301.9 331.159 1323.73 342.829 1347.5 347.557C1371.27 352.284 1395.91 349.858 1418.3 340.584C1440.68 331.31 1459.82 315.606 1473.28 295.456C1486.75 275.307 1493.93 251.617 1493.93 227.384C1493.93 194.887 1481.02 163.722 1458.05 140.744C1435.07 117.765 1403.9 104.856 1371.41 104.856ZM1371.41 287.088C1359.6 287.088 1348.06 283.587 1338.25 277.029C1328.43 270.47 1320.78 261.148 1316.26 250.241C1311.74 239.335 1310.56 227.333 1312.87 215.755C1315.17 204.177 1320.85 193.541 1329.2 185.194C1337.55 176.846 1348.18 171.161 1359.76 168.858C1371.34 166.555 1383.34 167.737 1394.25 172.255C1405.15 176.772 1414.48 184.423 1421.04 194.238C1427.59 204.054 1431.09 215.594 1431.09 227.4C1431.11 235.241 1429.57 243.009 1426.58 250.256C1423.58 257.503 1419.19 264.088 1413.64 269.633C1408.1 275.179 1401.51 279.575 1394.26 282.57C1387.02 285.565 1379.25 287.1 1371.41 287.088Z" fill="currentColor" />
      <path d="M852.957 258.843L797.008 109.105H730.939L820.989 345.694H886.533L974.975 109.105H908.906L852.957 258.843Z" fill="currentColor" />
      <path d="M1182.78 46.234H1119.91V109.105H1083.15V165.595H1119.91V266.306C1119.91 323.321 1151.35 347.826 1195.57 347.826C1210.57 348.043 1225.45 345.138 1239.27 339.297V280.691C1231.75 283.463 1223.82 284.932 1215.81 285.035C1196.72 285.035 1182.78 277.572 1182.78 252V165.595H1239.27V109.105H1182.78V46.234Z" fill="currentColor" />
      <path d="M1026.66 92.0625C1051.97 92.0625 1072.49 71.5445 1072.49 46.2341C1072.49 20.9238 1051.97 0.405762 1026.66 0.405762C1001.35 0.405762 980.83 20.9238 980.83 46.2341C980.83 71.5445 1001.35 92.0625 1026.66 92.0625Z" fill="currentColor" />
      <path d="M1058.1 109.105H995.232V345.694H1058.1V109.105Z" fill="currentColor" />
      <path d="M122.965 379.27C190.652 379.27 245.524 324.398 245.524 256.711C245.524 189.023 190.652 134.152 122.965 134.152C55.2778 134.152 0.40625 189.023 0.40625 256.711C0.40625 324.398 55.2778 379.27 122.965 379.27Z" fill="#04E061" />
      <path d="M335.574 363.803C376.475 363.803 409.631 330.646 409.631 289.745C409.631 248.844 376.475 215.688 335.574 215.688C294.673 215.688 261.516 248.844 261.516 289.745C261.516 330.646 294.673 363.803 335.574 363.803Z" fill="#FF4053" />
      <path d="M146.404 118.175C171.715 118.175 192.233 97.6569 192.233 72.3466C192.233 47.0363 171.715 26.5182 146.404 26.5182C121.094 26.5182 100.576 47.0363 100.576 72.3466C100.576 97.6569 121.094 118.175 146.404 118.175Z" fill="#965EEB" />
      <path d="M306.803 199.696C361.835 199.696 406.448 155.083 406.448 100.051C406.448 45.0183 361.835 0.405762 306.803 0.405762C251.70 0.405762 207.158 45.0183 207.158 100.051C207.158 155.083 251.70 199.696 306.803 199.696Z" fill="#00AAFF" />
    </g>
    <defs>
      <clipPath id="clip0_1542_6">
        <rect width="1494" height="380" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function App() {
  // Функция для скролла к блоку контактов
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Проверка даты для показа блока "до 31 марта"
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() возвращает 0-11
  const currentDay = currentDate.getDate();
  const showDeadlineReminder = currentMonth <= 3 && !(currentMonth === 3 && currentDay > 31);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Document-style container with enhanced shadow */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl min-h-screen relative">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

        {/* Header with enhanced styling */}
        <header className="bg-white border-b border-gray-100 px-4 sm:px-8 py-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <img src="/spravka-bk-logo.svg" alt="Справка БК" className="w-8 sm:w-6 h-auto aspect-square scale-150 flex-none" />
              </div>
              <span className="text-sm sm:text-md font-semibold text-blue-800 tracking-wide">
                10&nbsp;лет опыта в&nbsp;антикоррупционном подразделении
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words hyphens-auto">
              Профессиональная помощь в&nbsp;заполнении{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Справки&nbsp;БК
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Строгое соблюдение сроков, гарантированная&nbsp;точность и&nbsp;полное сопровождение до&nbsp;одобрения вашей Справки&nbsp;БК
            </p>

            {/* Trust indicators without background */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" aria-label="Галочка - гарантия качества" />
                <span className="whitespace-nowrap">
                  <span className="sm:hidden">100%&nbsp;гарантия</span>
                  <span className="hidden sm:inline">100%&nbsp;гарантия качества</span>
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" aria-label="Часы - соблюдение сроков" />
                <span className="whitespace-nowrap">
                  <span className="sm:hidden">В&nbsp;срок</span>
                  <span className="hidden sm:inline">Соблюдение сроков</span>
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" aria-label="Щит - конфиденциальность" />
                <span className="whitespace-nowrap">
                  <span className="sm:hidden">Конфиденциально</span>
                  <span className="hidden sm:inline">Конфиденциальность</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-8 py-16">
          {/* Expertise Section */}
          <h2 className="sr-only">Наша экспертиза</h2>
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="group border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 flex-shrink-0">
                      <Shield className="w-7 h-7 text-blue-600" aria-label="Щит - защита интересов клиентов" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-3 text-gray-900 break-words hyphens-auto">
                        Опыт работы в&nbsp;антикоррупционном подразделении
                      </CardTitle>
                      <Badge variant="outline" className="mb-4 text-green-700 border-green-300 bg-green-50 hover:bg-green-100 transition-colors">
                        <Target className="w-3 h-3 mr-1" aria-label="Мишень - точность" />
                        Инсайдерские знания
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Я&nbsp;не&nbsp;только заполняю, но&nbsp;и&nbsp;знаю, как справки&nbsp;БК анализируются «с&nbsp;другой стороны».
                    Глубокое понимание процесса проверки справок позволяет избежать типичных ошибок.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-purple-600" aria-label="Шапка выпускника - высшее образование" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-3 text-gray-900 break-words hyphens-auto">
                        Высшее юридическое образование
                      </CardTitle>
                      <Badge variant="outline" className="mb-4 text-purple-700 border-purple-300 bg-purple-50 hover:bg-purple-100 transition-colors">
                        <Award className="w-3 h-3 mr-1" aria-label="Награда - профессиональная экспертиза" />
                        Юридическая экспертиза
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Специализация в&nbsp;сфере противодействия коррупции.
                    Ваши документы будут подготовлены с&nbsp;учетом всех правовых нюансов и&nbsp;актуальных изменений законодательства.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Improved Mobile-Friendly Stats Block */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
              {/* Mobile: Single column with horizontal cards */}
              <div className="block sm:hidden space-y-4">
                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-600" aria-label="График роста - количество справок" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">500+&nbsp;справок</h3>
                    <p className="text-sm text-gray-600">успешно заполнено</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Star className="w-5 h-5 text-green-600" aria-label="Звезда - высокий рейтинг" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">5/5&nbsp;рейтинг</h3>
                    <p className="text-sm text-gray-600">по&nbsp;отзывам клиентов</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-600" aria-label="Молния - быстрое выполнение" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">24-48&nbsp;часов</h3>
                    <p className="text-sm text-gray-600">среднее время выполнения</p>
                  </div>
                </div>
              </div>

              {/* Desktop: Original 3-column layout */}
              <div className="hidden sm:grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" aria-label="График роста - количество справок" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">500+&nbsp;справок</h3>
                  <p className="text-sm text-gray-600">успешно заполнено</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 p-3 rounded-full mb-3">
                    <Star className="w-6 h-6 text-green-600" aria-label="Звезда - высокий рейтинг" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">5/5&nbsp;рейтинг</h3>
                  <p className="text-sm text-gray-600">по&nbsp;отзывам клиентов</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Zap className="w-6 h-6 text-purple-600" aria-label="Молния - быстрое выполнение" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">24-48&nbsp;часов</h3>
                  <p className="text-sm text-gray-600">среднее время выполнения</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compact Pricing Section with Style */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Стоимость заполнения Справки&nbsp;БК
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                Справка БК должна содержать всех членов семьи согласно требованиям антикоррупционного законодательства.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                {/* Compact Price Display with Style */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 text-center border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <User className="w-8 h-8 text-blue-600" aria-label="Пользователь - взрослый" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">1000&nbsp;₽</div>
                    <span className="text-sm font-medium text-gray-900">Взрослый</span>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
                      <Baby className="w-8 h-8 text-indigo-600" aria-label="Ребенок - несовершеннолетний" />
                    </div>
                    <div className="text-2xl font-bold text-indigo-600 mb-1">400&nbsp;₽</div>
                    <span className="text-sm font-medium text-gray-900">Ребёнок</span>
                  </div>
                </div>

                {/* Compact Consultation Information */}
                <div className="bg-white rounded-xl p-3 mb-6 border border-gray-200">
                  <div className="flex items-center gap-3 text-left">
                    <MessageCircle className="w-5 h-5 text-orange-600 flex-shrink-0" aria-label="Сообщение - консультация" />
                    <div>
                      <p className="text-base font-semibold text-gray-900 leading-tight">500&nbsp;₽ — консультация по&nbsp;справке БК</p>
                      <p className="text-xs text-gray-600 leading-tight mt-0.5">Задаёте вопросы, но&nbsp;заполняете сами, до&nbsp;30&nbsp;мин.</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-6 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-base sm:text-lg hover:-translate-y-1"
                    aria-label="Перейти к контактам для заказа справки БК"
                  >
                    <span className="hidden sm:inline">Заказать заполнение справки&nbsp;БК</span>
                    <span className="sm:hidden">Заказать справку&nbsp;БК</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What You Get - Enhanced with Mobile-Friendly Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Что вы получаете
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Заказывая заполнение Справки&nbsp;БК вы&nbsp;получаете полный комплекс услуг и&nbsp;гарантии качества.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                {
                  icon: FileText,
                  title: "Список необходимых документов",
                  description: "Подробные инструкции, как быстро получить все необходимые документы и&nbsp;справки",
                  color: "purple",
                  iconLabel: "Документ - список необходимых документов"
                },
                {
                  icon: Award,
                  title: "Гарантия правильности",
                  description: "Правильное заполнение всех разделов согласно актуальным методическим рекомендациям Минтруда",
                  color: "green",
                  iconLabel: "Награда - гарантия правильности"
                },
                {
                  icon: Clock,
                  title: "Соблюдение сроков",
                  description: "Строгое соблюдение оговоренных сроков работы с&nbsp;возможностью срочного выполнения",
                  color: "orange",
                  iconLabel: "Часы - соблюдение сроков"
                },
                {
                  icon: Download,
                  title: "Готовые файлы",
                  description: "Справка в&nbsp;формате PDF для&nbsp;печати и&nbsp;в&nbsp;редактируемом формате для&nbsp;внесения изменений",
                  color: "blue",
                  iconLabel: "Загрузка - готовые файлы"
                },
                {
                  icon: HeadphonesIcon,
                  title: "Личное сопровождение",
                  description: "Персональная помощь и&nbsp;консультации до&nbsp;момента успешного принятия вашей справки",
                  color: "indigo",
                  iconLabel: "Наушники - персональная поддержка"
                },
                {
                  icon: Star,
                  title: "Экспертная поддержка",
                  description: "Профессиональные консультации по&nbsp;всем возникающим вопросам в&nbsp;процессе подачи",
                  color: "pink",
                  iconLabel: "Звезда - экспертная поддержка"
                }
              ].map((item, index) => {
                const colorClasses = {
                  blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-200",
                  green: "text-green-600 bg-green-100 group-hover:bg-green-200",
                  purple: "text-purple-600 bg-purple-100 group-hover:bg-purple-200",
                  orange: "text-orange-600 bg-orange-100 group-hover:bg-orange-200",
                  indigo: "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-200",
                  pink: "text-pink-600 bg-pink-100 group-hover:bg-pink-200"
                };

                return (
                  <Card key={index} className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-gray-200">
                    <CardContent className="pt-4 md:pt-8 px-3 md:px-6">
                      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 transition-all duration-300 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                        <item.icon className="w-5 h-5 md:w-7 md:h-7" aria-label={item.iconLabel} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-lg leading-tight break-words hyphens-auto">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-base" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* How It Works - Enhanced with Icons inline in titles */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Как происходит работа?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Пошаговый алгоритм работы
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Начало работы",
                    description: "Свяжитесь удобным способом через Telegram, WhatsApp или&nbsp;Авито",
                    icon: MessageCircle,
                    color: "from-blue-500 to-blue-600",
                    iconLabel: "Связаться для заполнения Справки БК"
                  },
                  {
                    step: 2,
                    title: "Обсуждение деталей",
                    description: "Обсуждаем вашу ситуацию, предоставляю персональный список необходимых документов и&nbsp;информации.",
                    icon: FileText,
                    color: "from-green-500 to-green-600",
                    iconLabel: "Обсуждение Справки БК"
                  },
                  {
                    step: 3,
                    title: "Сбор данных",
                    description: "Вы&nbsp;предоставляете данные в&nbsp;удобном формате, я&nbsp;приступаю к&nbsp;заполнению справки БК.",
                    icon: FolderOpen,
                    color: "from-purple-500 to-purple-600",
                    iconLabel: "Список данных для Справки БК"
                  },
                  {
                    step: 4,
                    title: "Получение результата",
                    description: "Вы получаете готовую справку в&nbsp;двух форматах, при&nbsp;необходимости вносим корректировки бесплатно.",
                    icon: Download,
                    color: "from-orange-500 to-orange-600",
                    iconLabel: "Получить готовую Справку БК"
                  },
                  {
                    step: 5,
                    title: "Сдача Справки&nbsp;БК",
                    description: "Оказываю полную поддержку и&nbsp;консультации до&nbsp;момента успешного принятия справки органами.",
                    icon: CheckIcon,
                    color: "from-indigo-500 to-indigo-600",
                    iconLabel: "Наушники - постоянная поддержка"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className={`bg-gradient-to-r ${item.color} text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.step}
                      </div>
                      {index < 4 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-2 text-xl flex items-center gap-2 break-words hyphens-auto">
                        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                        <item.icon className="w-5 h-5 text-gray-600 flex-shrink-0" aria-label={item.iconLabel} />
                      </h3>
                      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Contact Section - Enhanced design with wow effects */}
          <section id="contact-section" className="mb-12">
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg relative overflow-hidden">
              {/* Wow Effects Header with Animations */}
              <div className="relative px-8 py-6 text-center text-white overflow-hidden">
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 opacity-100"
                  style={{
                    background: 'linear-gradient(-45deg, #3b82f6, #6366f1, #8b5cf6, #06b6d4, #10b981)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 6s ease infinite'
                  }}
                ></div>

                {/* Shimmer effect overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                ></div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
                  <div className="absolute top-8 right-16 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-6 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-60" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
                  <div className="absolute bottom-10 right-12 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    Начать заполнение вашей Справки&nbsp;БК
                  </h2>
                </div>
              </div>

              <div className="px-6 md:px-8 py-8">
                {/* Simple centered text */}
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700">
                    Свяжитесь со&nbsp;мной для&nbsp;начала работы
                  </p>
                </div>

                {/* Mobile-Adapted Contact Buttons */}
                <div className="max-w-md mx-auto space-y-4 mb-8">
                  {/* Telegram Button with Custom Color and Mobile Adaptation */}
                  <a
                    href="https://t.me/maryamidrisova?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D1%83%20%D0%91%D0%9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 hover:-translate-y-1 block"
                    style={{
                      backgroundColor: '#24A1DE',
                      borderColor: '#1E8BC3'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1E8BC3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#24A1DE';
                    }}
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <TelegramIcon className="w-5 h-5 sm:w-7 sm:h-7" alt="Логотип Telegram" />
                      </div>
                      <span className="text-sm sm:text-lg">Написать в&nbsp;Telegram</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-75" aria-hidden="true" />
                    </div>
                  </a>

                  {/* WhatsApp Button with Mobile Adaptation */}
                  <a
                    href="https://wa.me/79227396464?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D1%83%20%D0%91%D0%9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl border border-green-700 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-800 hover:-translate-y-1 block"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <WhatsAppIcon className="w-5 h-5 sm:w-7 sm:h-7" alt="Логотип WhatsApp" />
                      </div>
                      <span className="text-sm sm:text-lg">Написать в&nbsp;WhatsApp</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-75" aria-hidden="true" />
                    </div>
                  </a>

                  {/* Avito Button - White with Colorful Logo and Mobile Adaptation */}
                  <a
                    href="https://www.avito.ru/kazan/predlozheniya_uslug/zapolnenie_svedeniy_o_dohodah_spravka_bk_2357969882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl border-2 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:-translate-y-1 block"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-sm sm:text-lg whitespace-nowrap">Написать на</span>
                      <div className="h-4 sm:h-6 flex items-center">
                        <AvitoLogo className="h-4 sm:h-6 w-auto" />
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-75" aria-hidden="true" />
                    </div>
                  </a>
                </div>

                {/* Urgency reminder - only show if before March 31 */}
                {showDeadlineReminder && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-orange-600" aria-label="Предупреждение - важный срок" />
                      <p className="text-orange-800 font-semibold">
                        Справка&nbsp;БК должна быть подана до&nbsp;31&nbsp;марта
                      </p>
                    </div>
                    <p className="text-sm text-orange-700">
                      Обращайтесь сейчас — получите качественную помощь с&nbsp;гарантией результата
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Risks Section - Moved here after contact section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Риски неправильного заполнения
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Неправильное заполнение справки&nbsp;БК может повлечь серьезные последствия для&nbsp;карьеры госслужащего.
              </p>
            </div>

            {/* Simplified risks block */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" aria-label="Крестик - административная ответственность" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Административная ответственность</h3>
                      <p className="text-sm text-gray-600">Штрафы и&nbsp;дисциплинарные взыскания</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" aria-label="Весы - правовые последствия" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Правовые последствия</h3>
                      <p className="text-sm text-gray-600">Возможные судебные разбирательства</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" aria-label="График - карьерные риски" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Карьерные риски</h3>
                      <p className="text-sm text-gray-600">Ограничения в&nbsp;продвижении по&nbsp;службе</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" aria-label="Предупреждение - служебные проверки" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Служебные проверки</h3>
                      <p className="text-sm text-gray-600">Дополнительные разбирательства</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" aria-label="Глаз - повышенное внимание" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Повышенное внимание</h3>
                      <p className="text-sm text-gray-600">Усиленный контроль органов</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-label="Часы - потеря времени" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Потеря времени</h3>
                      <p className="text-sm text-gray-600">Необходимость переделывать документы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Отзывы клиентов
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Более 500&nbsp;успешно заполненных справок&nbsp;БК. Читайте отзывы реальных клиентов.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Rating summary */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8 border border-yellow-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-label={`Звезда ${star} из 5`} />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">5.0</span>
                  </div>
                  <p className="text-gray-600 mb-4">Средняя оценка на&nbsp;основе 93+&nbsp;отзывов</p>

                  <a
                    href="https://www.avito.ru/kazan/predlozheniya_uslug/zapolnenie_svedeniy_o_dohodah_spravka_bk_2357969882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base"
                      aria-label="Перейти к отзывам на Авито"
                    >
                      <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <span className="hidden sm:inline">Посмотреть все отзывы на&nbsp;Avito</span>
                      <span className="sm:hidden">Отзывы на&nbsp;Avito</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Real reviews */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-green-400 text-green-400" aria-label={`Звезда ${star} из 5`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      «Огромная благодарность очаровательной девушке Марьям, которая избавила меня от&nbsp;огромного количества хлопот по&nbsp;заполнению сведений о&nbsp;доходах и&nbsp;в&nbsp;кратчайшие сроки выполнила все договорённости. Обязательно буду обращаться к&nbsp;ней впредь»
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-green-600" aria-label="Аватар пользователя" />
                      </div>
                      <span>Светлана, отзыв на&nbsp;Авито</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-blue-400 text-blue-400" aria-label={`Звезда ${star} из 5`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      «Помогла со&nbsp;справкой "по&nbsp;форме БК", сделали всё быстро и&nbsp;качественно. В&nbsp;процессе объясняла все нюансы и&nbsp;подсказывала как лучше сделать. Рекомендую»
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" aria-label="Аватар пользователя" />
                      </div>
                      <span>Марсель, отзыв на&nbsp;Авито</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Полезные ссылки — перемещено выше футера, без иконок, строгий стиль */}
          <section aria-labelledby="helpful-links" className="px-4 sm:px-8 py-10 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 id="helpful-links" className="text-xl font-semibold text-gray-900 mb-4">Полезные ссылки</h2>
              <div className="useful-links p-5 rounded-xl border border-gray-200 bg-white">
                <ul className="space-y-2">
                  <li className="p-0">
                    <p className="text-gray-700">
                      Рекомендую сервис для просмотра{' '}
                      <a
                        href="https://справка-онлайн.рф"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/50 rounded-sm"
                      >
                        Справки БК онлайн
                      </a>
                      , работает прямо из браузера
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </main>

        {/* Строгий минималистичный футер без иконок */}
        <footer className="border-t border-gray-200 px-4 sm:px-8 py-6 bg-white">
          <div className="text-center">
            <p className="text-sm text-gray-500">&copy; 2025 Услуги по&nbsp;заполнению справки&nbsp;БК. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;