import { useState } from 'react';
import { sculptureList } from './data';
import './style.css'

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    let sculpture = sculptureList[index];


    function handleNextClick() {
        setIndex((index + 1) % sculptureList.length);
    }

    function handlePreviousClick() {
        setIndex((index - 1 + sculptureList.length) % sculptureList.length);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handlePreviousClick}>
                Previous
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
