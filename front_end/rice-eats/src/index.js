import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import { serveryUrl } from './config/config';

import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: serveryUrl.south,
    element: <div>south</div>,
  },
  {
    path: serveryUrl.north,
    element: <div>north</div>,
  },
  {
    path: serveryUrl.west,
    element: <div>west</div>,
  },
  {
    path: serveryUrl.seibel,
    element: <div>seibel</div>,
  },
  {
    path: serveryUrl.baker,
    element: <div>baker</div>,
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
