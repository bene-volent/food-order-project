import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.jsx'
// import './index.scss'
import '@/styles.scss'
import { OrdersProvider } from './context/OrdersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <OrdersProvider>

      <App />
    </OrdersProvider>
  // </React.StrictMode>,
)
