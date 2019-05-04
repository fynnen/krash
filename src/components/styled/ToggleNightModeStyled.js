import styled from "styled-components";
import ToggleNightMode from '../ToggleNightMode';

export const ToggleNightModeStyled = styled(ToggleNightMode)`
  background-color: #2c2c2c;
  border-radius: 25px;
  color: #000;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  padding: 5px;
  position: relative;
  transition: all 0.6s;
  width: 75px;
  -webkit-transition: all 0.6s;
`;

export default ToggleNightModeStyled;