import styled from 'styled-components';

export const PropertiesWrapper = styled.div`
  display: grid;
  grid: 
    'main'
    'box'
    'main'
  grid-gap 10px;
  background-color: #3e3e3e;
  padding: 10px;
`;
export const PropertiesMain = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 20px 0; 
  font-size: 15px;
  min-height: 40vmin;
`;
export const PropertiesTitle = styled.h2`
  font-size: 25px;
  color: #09d3ac;
`;
export const PropertiesBox = styled.div`
  grid-area: box;
  background: #fff; 
  width: 600px;
  height: 340px;
  margin-left: auto; 
  margin-right: auto;
`;