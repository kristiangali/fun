import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './RProperties.styles';

class RProperties extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('RProperties will mount');
  }

  componentDidMount = () => {
    console.log('RProperties mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('RProperties will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('RProperties will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('RProperties did update');
  }

  componentWillUnmount = () => {
    console.log('RProperties will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="RPropertiesWrapper">
        Test content
      </div>
    );
  }
}

RProperties.propTypes = {
  // bla: PropTypes.string,
};

RProperties.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RProperties);
