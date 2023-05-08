import {
    DetailListStyled,
    DetailsItem,
    DetailsLink,
} from './DetailList.styled';

export const DetailList = () => {
    return (
        <DetailListStyled>
            <DetailsItem>
                <DetailsLink to={'cast'}>Cast</DetailsLink>
            </DetailsItem>
            <DetailsItem>
                <DetailsLink to={'review'}>Review</DetailsLink>
            </DetailsItem>
        </DetailListStyled>
    );
};
