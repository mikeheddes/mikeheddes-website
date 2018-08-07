import React from 'react';
import styled, { css } from 'styled-components';
import Section from 'components/Section';
import Link from 'components/Link';
import B from 'components/Box';
import { media } from 'utils/mixins';

const Wrapper = Section.extend`
  min-height: calc(100vh - 100px);
`;

const Box = B.extend`
  ${media.phoneOnly(css`
    flex-direction: column;
  `)};
`;

const Status = styled.h1`
  padding: 15px 30px;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.heading};
  border-right: 2px solid;
  border-color: ${({ theme }) => theme.borderSeparate};

  ${media.phoneOnly(css`
    border-right: 0px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.borderSeparate};
  `)};
`;

const Message = styled.p`
  padding: 15px 30px;
  line-height: 1.48;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export default () => (
  <Wrapper display="flex">
    <Box
      textAlign="center"
      width="text"
      alignSelf="center"
      alignItems="center"
      marginLeft="auto"
      marginRight="auto"
      display="flex"
    >
      <Status>404</Status>
      <Message>
        The requested path could not be found,{' '}
        <Link to="/">go to the home page</Link>
      </Message>
    </Box>
  </Wrapper>
);
