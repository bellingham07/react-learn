import FilterProduct from "./product-category-row/product";
import { PRODUCTS } from "./product-category-row/product";
import { Gallery } from "./profile/gallery";
// import { Profile } from "./profile/profile";
import { CurrentDevice } from "./use-device/device";
import { MyComponent } from "./use-device/device-detect";
import TodoList from "./use-device/todolist";
import Clock from "./profile/clock";
// import Profile2 from "./profile/profile2";
import Condition from "./condition/condition";
import DrinkList from "./condition/coffee";
import RecipeList from "./list/recipe";
import Clock2 from "./clock/clock";
import { useEffect, useState } from "react";
import Profile3 from "./collapse/collapse";
import StoryTray from "./story/story";
import FancyText from "./tree/fancy";
import InspirationGenerator from "./tree/inspiration";
import Copyright from "./tree/copyright";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function App() {
    // return (
    //     <>
    //         {/* <CurrentDevice />
    //         <MyComponent /> */}
    //         {/* <Profile2 /> */}
    //         {/* <TodoList /> */}
    //         {/* <Clock /> */}
    //         {/* <Condition /> */}
    //         {/* <DrinkList /> */}
    //         <RecipeList />
    //     </>
    // )

    // const time = useTime();
    // return (
    //     // <Clock2 time={time} />
    //     <>
    //         {/* <Profile3 /> */}
    //         <Profile3 person={{
    //             imageId: 'lrWQx8l',
    //             name: 'Subrahmanyan Chandrasekhar',
    //         }} />
    //         <Profile3 person={{
    //             imageId: 'MK3eW3A',
    //             name: 'Creola Katherine Johnson',
    //         }} />
    //     </>
    // );
    // let initialStories = [
    //     { id: 0, label: "Ankit's Story" },
    //     { id: 1, label: "Taylor's Story" },
    // ];

    // let [stories, setStories] = useState([...initialStories])
    // let time = useTime();



    // // HACK: Prevent the memory from growing forever while you read docs.
    // // We're breaking our own rules here.
    // if (stories.length > 100) {
    //     stories.length = 100;
    // }

    // return (
    //     <div
    //         style={{
    //             width: '100%',
    //             height: '100%',
    //             textAlign: 'center',
    //         }}
    //     >
    //         <h2>It is {time.toLocaleTimeString()} now.</h2>
    //         <StoryTray stories={stories} />
    //         {/* <StoryTray/> */}
    //     </div>
    // );

    return (
        <>
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </>
    );
}

// function useTime() {
//     const [time, setTime] = useState(() => new Date());
//     useEffect(() => {
//         const id = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//         return () => clearInterval(id);
//     }, []);
//     return time;
// }
