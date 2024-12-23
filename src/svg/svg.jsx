// SvgIcon.jsx
// import  { useState, useEffect } from 'react';

// const SvgIcon = ({ iconName, className = '' }) => {
//     const [iconContent, setIconContent] = useState('');

//     useEffect(() => {
//         const loadIcon = async () => {
//             try {
//                 const module = await import(`../assets/icons/${iconName}.svg`);
//                 setIconContent(module.default); // SVG content
//             } catch (error) {
//                 console.error('Error loading SVG:', error);
//             }
//         };

//         loadIcon();
//     }, [iconName]);

//     return <svg className={className} dangerouslySetInnerHTML={{ __html: iconContent }} />;
// };

// export default SvgIcon;
// export default function SvgIcon({ iconName, className = '' }) {
//     const path = `#icon-${iconName}`
//     return (
//         <svg className={className}>
//             <use xlinkHref={path} />
//         </svg>
//     );
// }

const SvgIcon = ({ name }) => (
    <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#${name}`} />
    </svg>
);

export default SvgIcon;