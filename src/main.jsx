import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "prismjs";
// Import Prism theme CSS
import "prismjs/themes/prism-okaidia.css"; // change to any theme you like
// Import languages you will use
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import  Paths from './paths/Paths.jsx'


const router = createBrowserRouter(Paths)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);