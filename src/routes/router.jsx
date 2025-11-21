import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';
import ProductDetailPage from '../pages/Detail/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <Home /> }, { path: '/detail/:id', element: <ProductDetailPage /> }],
  },
]);

export default router;
