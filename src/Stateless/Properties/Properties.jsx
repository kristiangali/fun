import React from 'react';
import PropTypes from 'prop-types';
import { PropertiesWrapper, PropertiesMain, PropertiesTitle, PropertiesBox } from './Properties.styles'; 

class PropertyType extends React.Component {
  render() {
    if(this.props.propertyBool === true ) {
      return <h1>First Value Array:  {this.props.propertyArray[0]}</h1>;
    }
    else {
      return <br/>;
    }
  }
}
class ButtonClicker extends PropertyType {
  clickMe() {
     const name = this.props.propertyString;
     const age = this.props.propertyNumber;
     alert("Hi " + name + ", Age: " + age);
  }
  render() {
    return <>
    <h1>Click The Cool Button</h1>
    <button onClick={this.clickMe.bind(this)}>Click Me</button>
    </>
  }
}
const Properties = props => (

  <PropertiesWrapper>
    <PropertiesTitle>React Properties Lesson</PropertiesTitle>
    <PropertiesMain>
        <PropertiesBox>
            <ButtonClicker/>
            <PropertyType />
        </PropertiesBox>
    </PropertiesMain>
  </PropertiesWrapper>
);

PropertyType.propTypes = {
  propertyArray: PropTypes.array,
  propertyBool: PropTypes.bool,
  propertyNumber: PropTypes.number,
  propertyObject: PropTypes.object,
  propertyString: PropTypes.string,
};

PropertyType.defaultProps = {
  propertyArray: [1,2,3,5,8,13],
  propertyBool: false,
  propertyNumber: 35,
  propertyObject: {"obj":["Testing ","object"]},
  propertyString: "Kristian",
};

export default Properties;
