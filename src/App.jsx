import ShoppingCart from "./add-interaction/add-or-del-product/product";
import Gallery from "./add-interaction/component-memory/gallry";
import TaskApp from "./add-interaction/fix-mutation/mutation";
import RespondingEvents from "./add-interaction/RespondingEvents";
import ChatApp from "./status-manage/chat/chat-app";
import EditProfile from "./status-manage/response-input/edit-profile";
import Picture from "./status-manage/response-input/response";
import ContactManager from "./status-manage/save-state/SaveState";
import FilterableList from "./status-manage/share-state/share";
import TravelPlan from "./status-manage/state-struct/struct";
import SvgIcon from "./svg/svg.jsx";
import SVGIcon from "./svg/svgTwo.jsx";
import TestRender from "./test-render/TestRender.jsx";
import Menu from "./transition/MenuTransition.jsx";
import TestTransition from "./transition/TestTransition.jsx";
import TransitionComponent from "./transition/TransitionComponent.jsx";

export default function App() {
    return (
        <>
            {/* <RespondingEvents /> */}
            {/* <Gallery /> */}
            {/* <ShoppingCart /> */}
            {/* <TaskApp /> */}
            {/* <ChatApp /> */}
            {/* <Picture /> */}
            {/* <EditProfile /> */}
            {/* <TravelPlan /> */}
            {/* <FilterableList /> */}
            {/*<ContactManager />*/}
            {/* <TransitionComponent/> */}
            {/* <Menu isMobileView={false} /> */}
            {/* <TestRender /> */}
            <TestTransition />
        </>
    );
}


// import React from 'react';

// // Embedding the SVG sprite sheet within the component
// const SVGSpriteSheet = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
//         {/* Orange Triangle */}
//         <symbol id="orange-triangle" viewBox="0 0 200 200">
//             <polygon points="50,150 150,150 100,50" fill="orange" stroke="black" strokeWidth="2" />
//         </symbol>

//         {/* Blue Circle */}
//         <symbol id="blue-circle" viewBox="0 0 200 200">
//             <circle cx="100" cy="100" r="50" fill="blue" stroke="black" strokeWidth="2" />
//         </symbol>

//         {/* Green Square */}
//         <symbol id="green-square" viewBox="0 0 200 200">
//             <rect x="50" y="50" width="100" height="100" fill="green" stroke="black" strokeWidth="2" />
//         </symbol>
//     </svg>
// );

// // Reusable Component for SVG Icons from a Sprite Sheet
// const SVGIcon = ({ id, width = 200, height = 200 }) => {
//     return (
//         <svg width={width} height={height} role="img">
//             <use href={`#${id}`} />
//         </svg>
//     );
// };

// // Create a React component that uses the Sprite Sheet
// const App = () => {
//     return (
//         <div>
//             {/* Embedding the sprite sheet within the app */}
//             <SVGSpriteSheet />

//             {/* Orange Triangle from Sprite Sheet */}
//             <div>
//                 <SVGIcon id="orange-triangle" />
//             </div>

//             {/* Blue Circle from Sprite Sheet */}
//             <div>
//                 <SVGIcon id="blue-circle" />
//             </div>

//             {/* Green Square from Sprite Sheet, with custom size */}
//             <div>
//                 <SVGIcon id="green-square" width={100} height={100} />
//             </div>
//         </div>
//     );
// };

// export default App;

// import React, { useState, useEffect } from 'react';

// const SVGIcon = ({ id, width = 200, height = 200 }) => {
//     const [spriteSheet, setSpriteSheet] = useState(null);

//     useEffect(() => {
//         const loadSpriteSheet = async () => {
//             try {
//                 const response = await fetch('/assets/icons/icon-about.svg');
//                 const text = await response.text();
//                 setSpriteSheet(text);
//             } catch (error) {
//                 console.error('Failed to load sprite sheet:', error);
//             }
//         };

//         loadSpriteSheet();
//     }, []);

//     return (
//         <div>
//             {spriteSheet && (
//                 <div
//                     dangerouslySetInnerHTML={{ __html: spriteSheet }}
//                     style={{ display: 'none' }} // Hides the sprite sheet but keeps it in the DOM
//                 />
//             )}
//             <svg width={width} height={height} role="img">
//                 <use href={`#${id}`} />
//             </svg>
//         </div>
//     );
// };

// // Create a React component that uses the Sprite Sheet
// const App = () => {
//     return (
//         <div>
//             {/* Orange Triangle from Sprite Sheet */}
//             <div>
//                 <SVGIcon id="orange-triangle" />
//             </div>

//             {/* Blue Circle from Sprite Sheet */}
//             <div>
//                 <SVGIcon id="blue-circle" />
//             </div>

//             {/* Green Square from Sprite Sheet, with custom size */}
//             <div>
//                 <SVGIcon id="green-square" width={100} height={100} />
//             </div>
//         </div>
//     );
// };

// export default App;

// import React from "react";
// import SvgIcon from "./svg/svg";
// import SvgThree from "./svg/SvgThree";
//
// export default function App() {
//     return (
//         <>
//             {/* <SvgIcon name={"icon-about"} /> */}
//             <SvgThree name={"icon-about"} />
//             <SvgThree name={"icon-archive"} />
//         </>
//     );
// }
