import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { serveryUrl } from './config/config';

import LandingPage from './pages/LandingPage';
import SouthDetails from './pages/SouthDetails';
import NorthDetails from './pages/NorthDetails';
import WestDetails from './pages/WestDetails';
import SeibelDetails from './pages/SeibelDetails';
import BakerDetails from './pages/BakerDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: serveryUrl.south,
    element: <SouthDetails />,
  },
  {
    path: serveryUrl.north,
    element: <NorthDetails />,
  },
  {
    path: serveryUrl.west,
    element: <WestDetails />,
  },
  {
    path: serveryUrl.seibel,
    element: <SeibelDetails />,
  },
  {
    path: serveryUrl.baker,
    element: <BakerDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
