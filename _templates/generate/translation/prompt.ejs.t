---
to: src/pages/<%=name%>/index.js
---

import Main from './Main';
import Layout from './Layout';

// Pages routes
const routes = [
  { path: '', component: () => import('./Main') }
];

// Layout
export default [
  {
    path: '/<%=name%>',
    component: () => import('./Layout'),
    children: routes
  }
];
