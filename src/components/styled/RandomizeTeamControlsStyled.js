import styled from "styled-components";

import { BREAKPOINTS as bp } from "../../constants";
import { paletteColors } from "../../helpers/globalStyles";
import { mediaMin, mediaMinMax } from  "../../helpers/mediaQuery";

export const RandomizeTeamControlsStyled = styled.div`
  ${({ isNightMode }) => `
    border-top: 1px solid ${isNightMode ? paletteColors.light : paletteColors.secondary};
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    ${mediaMin(bp.SM.min, `
      flex-direction: row;
    `)}

    button {
      background: var(--button);
      border: none;
      border-radius: 1px;
      color: var(--textInverted);
      cursor: pointer;
      font-size: 12px;
      height: 48px;
      margin-right: 10px;
      min-width: 60px;

      ${mediaMinMax(bp.XS.min, bp.XS.max, `
        margin-bottom: 15px;
        max-width: 280px;
        width: 100%;
      `)}

      &:active,
      &:focus {
        box-shadow: 3px 3px 10px ${paletteColors.secondary};
      }
    }
    label {
      align-items: center;
      display: flex;
      justify-content: space-between;
      max-width: 280px;

      ${mediaMinMax(bp.XS.min, bp.XS.max, `
        margin-bottom: 15px;
      `)}

      ${mediaMin(bp.SM.min, `
        margin-right: 15px;
      `)}
    }
    input {
      font-size: 20px;
      margin-left: 15px;
      text-align: center;
      width: 48px;

      &[type=number]::-webkit-inner-spin-button, 
      &[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
    }
  `}
`;

export default RandomizeTeamControlsStyled;