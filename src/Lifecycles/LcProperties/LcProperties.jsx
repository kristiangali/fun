import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './LcProperties.styles';

class LcProperties extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('LcProperties will mount');
  }

  componentDidMount = () => {
    console.log('LcProperties mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('LcProperties will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('LcProperties will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('LcProperties did update');
  }

  componentWillUnmount = () => {
    console.log('LcProperties will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LcPropertiesWrapper">
        Test content
      </div>
    );
  }
}

LcProperties.propTypes = {
  // bla: PropTypes.string,
};

LcProperties.defaultProps = {
  // bla: 'test',
};

export default LcProperties;
