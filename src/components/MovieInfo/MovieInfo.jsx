import noPoster from '../../images/no-poster.jpg';
import { MovieWrapper } from './MovieInfo.styled';
export const MovieInfo = () => {
    return (
        <>
            <MovieWrapper>
                <img src={noPoster} alt="_" width={200} />
                <div>
                    <h1>Title (2023)</h1>
                    <p>Score: 85%</p>
                    <h2>Owerview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, voluptatem?
                    </p>
                    <h2>Genres</h2>
                    <p>Drama, History</p>
                </div>
            </MovieWrapper>
            <ul>
                <li>
                    <a href="/">Cast</a>
                </li>
                <li>
                    <a href="/">Review</a>
                </li>
            </ul>
        </>
    );
};
