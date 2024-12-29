import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/styles.css'
// import 'virtual:svg-icons-register'

// main.jsx 是整个项目的入口文件

// main.jsx
// const svgFiles = import.meta.glob('./assets/icons/*.svg');

// for (const path in svgFiles) {
//     svgFiles[path]().then((module) => {
//         const iconName = path.split('/').pop().replace('.svg', ''); // 提取文件名作为图标名
//         const div = document.createElement('div');
//         div.innerHTML = module.default;

//         // 检查 firstElementChild 是否存在，并且是一个有效的节点
//         const svgNode = div.firstElementChild;
//         if (svgNode) {
//             document.body.appendChild(svgNode); // 将 SVG 添加到 body
//         } else {
//             console.log("svg node:", svgNode);

//             console.error(`Failed to load icon: ${iconName}`);
//         }
//     }).catch((error) => {
//         console.error(`Error loading icon: ${error}`);
//     });
// }


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
