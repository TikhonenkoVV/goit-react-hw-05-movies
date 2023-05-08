import { useParams } from 'react-router-dom';
import { CastElement, CastGrid, CastPhoto, CastTitle } from './Cast.styled';
import { useEffect, useState } from 'react';
import { gethMovieDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import noPoster from '../../images/no-poster.jpg';

export const Cast = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [cast, setCast] = useState([]);
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        if (!movieId) return;
        setIsLoading(true);
        gethMovieDetails(movieId, '/credits')
            .then(data => {
                setCast(data.cast);
            })
            .catch(err => {
                setError(err.message);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId, error]);

    return (
        <>
            {isLoading && <Loader />}
            <CastTitle>Cast</CastTitle>
            <CastGrid>
                {cast?.map(({ credit_id, profile_path, name, character }) => (
                    <CastElement key={credit_id}>
                        <CastPhoto
                            src={
                                profile_path
                                    ? IMAGES_BASE_URL + profile_path
                                    : noPoster
                            }
                            alt="_"
                        />
                        <p>
                            <b>{name}</b>
                        </p>
                        <p>{character}</p>
                    </CastElement>
                ))}
            </CastGrid>
        </>
    );
};
