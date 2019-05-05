import styled from "styled-components";
import { paletteColors } from '../../helpers/globalStyles';

export const ToggleNightModeIconStyled = styled.div`
    background-color: ${paletteColors.light};
    border-radius: 25px;
    color: ${paletteColors.primary};
    display: flex;
    height: auto;
    padding: 5px;
    position: relative;
    transition: all 0.6s;
    width: 50px;
    -webkit-transition: translate 0.6s;

    &.day {
      justify-content: flex-end;
    }

    &.night{
      justify-content: flex-start;
    }
`;

export default ToggleNightModeIconStyled;