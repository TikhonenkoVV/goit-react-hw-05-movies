import { ThreeCircles } from 'react-loader-spinner';
import { Backdrop, LoaderStyled } from './Loader.styled';

export const Loader = () => {
    return (
        <Backdrop>
            <ThreeCircles
                height="100"
                width="100"
                color="#369daf"
                wrapperStyle={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </Backdrop>
    );
};
