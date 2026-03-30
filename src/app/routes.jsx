import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../features/home/HomePage';
import CategoryPage from '../features/category/CategoryPage';
import DetailPage from '../features/detail/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'kategori/:category',
        element: <CategoryPage />,
      },
      {
        path: 'detail/:slug',
        element: <DetailPage />,
      },
      {
        path: '*',
        element: (
          <div className="container-custom py-20 text-center">
            <div className="text-7xl mb-4">🔍</div>
            <h1 className="text-display text-neutral-900 mb-2">404</h1>
            <p className="text-body text-neutral-500 mb-6">
              Halaman yang kamu cari tidak ditemukan.
            </p>
            <a
              href="/"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-base"
            >
              Kembali ke Beranda
            </a>
          </div>
        ),
      },
    ],
  },
]);

export default router;
