import styled from "styled-components";
import { paletteColors } from "../../helpers/globalStyles";

export const HeaderStyled = styled.header`
  ${({ isNightMode }) => `
    align-content: center;
    background: ${isNightMode ? paletteColors.primary : paletteColors.primary};
    bottom: 0;
		padding: 20px;
    position: absolute;
    width: 100%;
		z-index: 1;

    h1 {
      align-items: center;
      color: ${paletteColors.title};
      display: flex;
      font-size: 36px;
      font-weight: 700;
    }

    label {
      color: var(--textInverted);
    }

    button.reset {
      margin-right: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
  `}
`;

export default HeaderStyled;