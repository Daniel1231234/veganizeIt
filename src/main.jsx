import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/global.scss"
import { BrowserRouter } from "react-router-dom";
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// if (process.env.NODE_ENV === "production") disableReactDevTools()
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
