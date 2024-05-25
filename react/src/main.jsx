import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {appStore} from "./store/appStore.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={appStore}>
          <App />
      </Provider>
  </React.StrictMode>,
)
