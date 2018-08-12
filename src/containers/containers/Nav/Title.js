import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
    font-size    : 17px;
    font-weight  : 600;
    text-align   : center;
    max-height   : 100%;
    overflow     : hidden;
    text-overflow: ellipsis;
    white-space  : nowrap;
    word-wrap    : normal;
`

export default Title;
