import { Page404Styled } from './Page404.styled';
import page_404 from '../../images/no-found.png';

export const Page404 = () => {
    return (
        <Page404Styled>
            <h1>Ooops!</h1>
            <img width={300} src={page_404} alt="page-404" />
            <p>Page no found</p>
        </Page404Styled>
    );
};
