import React from 'react'
import ReactDOM from 'react-dom/client'
import 'boostrap/package.json'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./redux/reducers/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
