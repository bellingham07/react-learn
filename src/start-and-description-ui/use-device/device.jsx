import { useState, useEffect } from "react";

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, [])

    return isMobile;
}

export function CurrentDevice() {
    const isMobile = useDeviceType();
    return (
        <>
            <h1>device</h1>
            <h1>{isMobile ? 'Mobile' : 'Desktop'}</h1>
        </>
    )
}