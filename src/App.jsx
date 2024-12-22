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
            <div>
                <SvgIcon iconName="icon-about" className="about-icon"/>
                {/*<SvgIcon iconName="user" className="user-icon"/>*/}
            </div>
        </>
    );
}
