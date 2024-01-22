import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import TrendingScreen from './screens/TrendingScreen.jsx';
import RecentScreen from './screens/RecentScreen.jsx';
import DiscountScreen from './screens/DiscountScreen.jsx';
import SearchScreen from './screens/SearchScreen.jsx';
import './index.css';
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import GenreScreen from './screens/GenreScreen.jsx';
import DiscoverScreen from './screens/DiscoverScreen.jsx';
// import RegisterScreen from './screens/RegisterScreen.jsx';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/genre' element={<GenreScreen />} />
      <Route path='/trending' element={<TrendingScreen />} />
      <Route path='/search' element={<SearchScreen />} />
      <Route path='/recent' element={<RecentScreen />} />
      <Route path='/discount' element={<DiscountScreen />} />
      <Route path='/discover' element={<DiscoverScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
