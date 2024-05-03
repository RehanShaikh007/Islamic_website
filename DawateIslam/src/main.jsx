import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
