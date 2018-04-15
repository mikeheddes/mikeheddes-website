import styled from 'styled-components';
import PropTypes from 'prop-types';

const BG = styled.div`
    position           : fixed;
    width              : 100vw;
    height             : 100vh;
    top                : 0;
    left               : 0;
    z-index            : -1;
    background-position: center;
    background-size    : cover;
    opacity            : 0.5;
    background-image: url(${props => props.img});
`

BG.propTypes = {
  img: PropTypes.any.isRequired,
}

export default BG;
