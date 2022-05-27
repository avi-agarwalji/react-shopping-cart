import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import { ProductContextProvider } from "./context.js";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

