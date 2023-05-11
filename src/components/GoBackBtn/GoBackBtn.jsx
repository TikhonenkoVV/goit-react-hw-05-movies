import { GoBackButton } from './GoBackBtn.styled';

export const GoBackBtn = ({ path, children }) => {
    return <GoBackButton to={path.current}>{children}</GoBackButton>;
};
