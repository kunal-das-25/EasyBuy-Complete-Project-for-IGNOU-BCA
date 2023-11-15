import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen';
import LayoutV3 from 'layouts/layout-v3/DashboardLayout';

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
}; // dashboards

const LearningManagement = Loadable(lazy(() => import('./pages/dashboard/learning-management')));
const AttributesList = Loadable(lazy(() => import('./pages/catalog/attributes-list')));
const CreateAttribute = Loadable(lazy(() => import('./pages/catalog/create-attribute')));
const CollectionsList = Loadable(lazy(() => import('./pages/catalog/collections-list')));
const CreateCollection = Loadable(lazy(() => import('./pages/catalog/create-collections')));
const CategoriesList = Loadable(lazy(() => import('./pages/catalog/categories-list')));
const CreateCategory = Loadable(lazy(() => import('./pages/catalog/create-category')));
const ProductsList = Loadable(lazy(() => import('./pages/catalog/products-list')));
const CreateProduct = Loadable(lazy(() => import('./pages/catalog/create-product')));
const OrdersList = Loadable(lazy(() => import('./pages/orders/orders-list')));
const CustomersList = Loadable(lazy(() => import('./pages/customers/customers-list')));

const Login = Loadable(lazy(() => import('./pages/authentication/login')));

const Error = Loadable(lazy(() => import('./pages/404')));

const ActiveLayout = () => {
  return <LayoutV3 />;
};

const routes = () => {
  return [
    ...authRoutes,
    {
      path: '/',
      element: <ActiveLayout />,
      children: dashboardRoutes
    },
    {
      path: '*',
      element: <Error />
    }
  ];
};

const authRoutes = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: 'login',
    element: <Login />
  }
];

const dashboardRoutes = [
  {
    path: 'dashboard',
    element: <LearningManagement />
  },
  {
    path: 'attributes',
    element: <AttributesList />
  },
  {
    path: 'attributes/:id',
    element: <CreateAttribute />
  },
  {
    path: 'collections',
    element: <CollectionsList />
  },
  {
    path: 'collections/:id',
    element: <CreateCollection />
  },
  {
    path: 'categories',
    element: <CategoriesList />
  },
  {
    path: 'categories/:id',
    element: <CreateCategory />
  },
  {
    path: 'products',
    element: <ProductsList />
  },
  {
    path: 'products/:id',
    element: <CreateProduct />
  },
  {
    path: 'orders',
    element: <OrdersList />
  },
  {
    path: 'customers',
    element: <CustomersList />
  }
];

export default routes;
