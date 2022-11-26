import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
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
    path: serveryUrl.South,
    element: <SouthDetails />,
  },
  {
    path: serveryUrl.North,
    element: <NorthDetails />,
  },
  {
    path: serveryUrl.West,
    element: <WestDetails />,
  },
  {
    path: serveryUrl.Seibel,
    element: <SeibelDetails />,
  },
  {
    path: serveryUrl.Baker,
    element: <BakerDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div style={{marginTop:"20px"}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
