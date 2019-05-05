import styled from "styled-components";
import { paletteColors } from "../../helpers/globalStyles";

export const HeaderStyled = styled.header`
  ${({ isNightMode }) => `
    align-content: center;
    background: ${isNightMode ? paletteColors.primary : paletteColors.primary};
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 20px;

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