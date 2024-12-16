import { isMobile, isTablet } from 'react-device-detect';

export const MyComponent = () => {
    return (
        <div>
            {isMobile ? '移动端' : isTablet ? '平板端' : '网页端'}
        </div>
    );
};
