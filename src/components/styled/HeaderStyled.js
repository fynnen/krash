import styled, { css } from "styled-components";
import { BREAKPOINTS as bp } from "../../constants";
import { mediaMin } from  "../../helpers/mediaQuery";
import { paletteColors } from "../../helpers/globalStyles";

export const HeaderStyled = styled.header`
  ${({ isNightMode }) => css`
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
      align-items: center;
      color: ${paletteColors.title};
      display: flex;
      font-size: 36px;
      font-weight: 700;
    }
  `}
`;

export default HeaderStyled;