import styled from "styled-components";
import { paletteColors } from '../../helpers/globalStyles';

export const HeaderStyled = styled.header`
  ${({ isNightMode }) => `
    align-content: center;
    background: ${isNightMode ? paletteColors.primary : paletteColors.primary};
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 20px;

    h1 {
      color: ${paletteColors.title};
      font-size: 40px;
      font-weight: 700;
    }
  `}
`;

export default HeaderStyled;