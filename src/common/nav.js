import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component: () => component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user'], import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: 'dashboard',
      },
      {
        name: 'Shop',
        icon: 'dashboard',
        path: 'shop',
        children: [
          {
            name: 'shop',
            path: 'list',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Shop/ShopList')),
          },
        ],
      },
      {
        name: 'Vận đơn',
        icon: 'dashboard',
        path: 'order',
        children: [
          {
            name: 'Danh sách',
            path: '',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Shop/ShopList')),
          },
        ],
      },
      {
        name: 'Chuyến đi lấy',
        icon: 'dashboard',
        path: 'pickup',
        children: [
          {
            name: 'Danh sách',
            path: '',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Shop/ShopList')),
          },
        ],
      },
      {
        name: 'Chuyến đi giao',
        icon: 'dashboard',
        path: 'delivery',
        children: [
          {
            name: 'Danh sách',
            path: '',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Shop/ShopList')),
          },
          {
            name: 'Thêm',
            path: '',
            component: dynamicWrapper(app, ['chart'], () => import('../routes/Shop/ShopList')),
          },
        ],
      },
    ],
  },
];
