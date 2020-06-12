import styled, { css } from "styled-components";
import { BREAKPOINTS as bp } from "../../constants";
import { mediaMin } from  "../../helpers/mediaQuery";
import { paletteColors } from "../../helpers/globalStyles";

export const HeaderStyled = styled.header`
  ${({ isNightMode, isVerticalText }) => css`
    align-content: center;
    background: ${isNightMode ? paletteColors.primary : paletteColors.primary};
    display: flex;
    justify-content: space-between;
		padding: 10px;
		position: sticky;
		top: 0;
		z-index: 1;

		${mediaMin(bp.SM.min, css`
			padding: 20px;
		`)}

    h1 {
      color: ${paletteColors.title};
      display: flex;
      flex-grow: 1;
      font-size: 36px;
      font-weight: 700;
      writing-mode: ${isVerticalText ? 'vertical-lr' : 'horizontal-tb'}
    }

    .toggle-text-align {
      background: transparent;
      border-radius: 25px;
      height: 48px;
      margin-right: 8px;
      width: 50px;
      
      svg {
        background: #eeeeee;
        border-radius: 25px;
        height: 36px;
        width: 100%;        
      }
    }
  `}
`;

export default HeaderStyled;