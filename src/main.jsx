import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './css/styles.css'

// main.jsx 是整个项目的入口文件

createRoot(document.getElementById('root')).render(
    <App/>
)
