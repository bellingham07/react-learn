const SVGSpriteSheet = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        {/* Orange Triangle */}
        <symbol id="orange-triangle" viewBox="0 0 200 200">
            <polygon points="50,150 150,150 100,50" fill="orange" stroke="black" strokeWidth="2" />
        </symbol>

        {/* Blue Circle */}
        <symbol id="blue-circle" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="50" fill="blue" stroke="black" strokeWidth="2" />
        </symbol>

        {/* Green Square */}
        <symbol id="green-square" viewBox="0 0 200 200">
            <rect x="50" y="50" width="100" height="100" fill="green" stroke="black" strokeWidth="2" />
        </symbol>
    </svg>
);

export default function SVGIcon({ id, width = 200, height = 200 }) {
    return (
        <svg width={width} height={height} role="img">
            <use href={`#${id}`} />
        </svg>
    );
};

// export { SVGSpriteSheet, SVGIcon };
