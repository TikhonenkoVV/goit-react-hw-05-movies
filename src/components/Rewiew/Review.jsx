import { Loader } from 'components/Loader/Loader';
import { RevieAutor, RevieText, RevievItem, ReviewList } from './Review.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gethMovieDetails } from 'services/api';

export const Review = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        setIsLoading(true);
        gethMovieDetails(movieId, '/reviews')
            .then(data => {
                setReviews(data.results);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId, error]);

    console.log(reviews);
    return (
        <>
            {isLoading && <Loader />}
            {reviews && (
                <ReviewList>
                    {reviews?.map(({ id, author, content }) => (
                        <RevievItem key={id}>
                            <RevieAutor>Autor: {author}</RevieAutor>
                            <RevieText>{content}</RevieText>
                        </RevievItem>
                    ))}
                </ReviewList>
            )}
        </>
    );
};
