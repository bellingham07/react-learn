import React from "react";
export default function SvgThree({ name }) {
    const [svgPath, setSvgPath] = React.useState(null);

    React.useEffect(() => {
        // 动态加载 SVG 文件
        const svgFiles = import.meta.glob('../assets/icons/*.svg');
        const svgFile = svgFiles[`../assets/icons/${name}.svg`];

        svgFile().then((module) => {
            setSvgPath(module.default); // 设置加载的路径
        }).catch((error) => {
            console.error('Error loading SVG:', error);
        });
    }, [name]);

    return (
        <>
            <div>
                {svgPath ? <img src={svgPath} alt="SVG" /> : <p>Loading...</p>}
            </div>
        </>
    );
}
