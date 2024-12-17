// import { getImageUrl } from './utils.js';
import { getImageUrl } from "./utils"

export function Person({ imgInfo, proInfo }) {
    return (
        <>
            <section className="profile">
                <h2>{imgInfo.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(imgInfo.url)}
                    alt={imgInfo.alt}
                    width={70}
                    height={70}
                />

                <ul>
                    <li>
                        <b>Profession: </b>
                        {/* physicist and chemist */}
                        {proInfo.profession}
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        {/* (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal) */}
                        {proInfo.awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {/* polonium (chemical element) */}
                        {proInfo.discovered}
                    </li>
                </ul>
            </section>
        </>
    )
}