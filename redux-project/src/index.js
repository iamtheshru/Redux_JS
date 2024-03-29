import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import MainRouter from "./Mainroutes.jsx";
import CustomStore from '../src/Store/CustomStore.jsx';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
    <RouterProvider router={MainRouter} />
  </Provider>
);

