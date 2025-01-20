import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import MainLayoutMovie from './layouts/MainLayoutMovie';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import ErrorPage from './pages/ErrorPage';
import MovieDetail from './components/movies/MovieDetail';
import './index.css';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // home
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"about",
        element:<AboutPage/>
      },
      {
        path: 'detail_movie',
        element: <MovieDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/tv',
    element: <MainLayoutMovie />,
    children: [
      {
        index: "/tv-show",
        element: <MoviePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
