import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./toast1.css";

const Toast = ({ message, visible, closeHandle }) => {
    useEffect(() => {
        let hideTimer;
        if (visible) {
            // 自动隐藏 Toast
            hideTimer = setTimeout(() => {
                closeHandle(false);
            }, 2000); // 1秒后关闭
        }
        return () => clearTimeout(hideTimer); // 清理定时器
    }, [visible, closeHandle]);

    return (
        <CSSTransition in={visible} classNames="toast" timeout={2000} unmountOnExit>
            <div className="toast">
                {message}
            </div>
        </CSSTransition>
    );
};

export default Toast;
