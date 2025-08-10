import React from 'react';
import { renderToString } from 'react-dom/server';

export function render() {
  return renderToString(<div>Hello SSR Test</div>);
}
