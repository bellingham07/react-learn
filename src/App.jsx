import { useState } from "react";
import Toast from "./toast/Toast";
import Demo1 from "./usecontext/demo1.jsx";

const App = () => {
    // const [showToast, setShowToast] = useState(false);
    //
    // const handleShowToast = () => {
    //     setShowToast(true); // 显示 Toast
    // };

    return (
        <div>
            {/*<button onClick={handleShowToast}>Show Toast</button>*/}
            {/*<Toast*/}
            {/*    message="caojinbo"*/}
            {/*    visible={showToast}*/}
            {/*    closeHandle={setShowToast} // 关闭时调用 setShowToast(false)*/}
            {/*/>*/}
            <Demo1/>
        </div>
    );
};

export default App;
