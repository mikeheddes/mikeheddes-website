import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';
import Box from 'components/Box';

export default class Description extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  state = {
    extended: false,
  };

  setDescriptionRef = node => {
    this.description = node;
  };

  toggleDescription = () => {
    this.setState(prev => ({ ...prev, extended: !prev.extended }));
  };

  render() {
    const { extended } = this.state;
    const { children } = this.props;
    const needToToggle = children.length > 200;
    return (
      <React.Fragment>
        <Heading tag="h6">Description</Heading>
        <Paragraph
          innerRef={this.setDescriptionRef}
          lineClamp={needToToggle && !extended ? 3 : null}
          color="subtle"
          size="r"
          marginBottom="s"
        >
          {children}
        </Paragraph>
        {needToToggle && (
          <Box textAlign="right">
            <Button onClick={this.toggleDescription} variation="link">
              {extended ? 'Hide' : 'More'}
            </Button>
          </Box>
        )}
      </React.Fragment>
    );
  }
}
