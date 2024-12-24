import { useState, useEffect } from "react"
import '../assets/css/svg-icon.css'

export default function SvgIcon({ name, className = '' }) {
    const [svgPath, setSvgPath] = useState(null)

    useEffect(() => {
        const svgFiles = import.meta.glob('../assets/svg/*.svg')
        const svg = svgFiles[`../assets/svg/icon-${name}.svg`]

        svg().then((module) => {
            setSvgPath(module.default) // set load path
        }).catch((err) => {
            console.log('Error loading svg: ', err);
        }, [name]);
    })

    const iconStyle = className ? `svg-icon ${className}` : 'svg-icon'

    return (
        <>
            {svgPath ?
                (<img src={svgPath} className={iconStyle} alt="SVG" />) :
                (<p>loading</p>)}
        </>
    )
};
