import styled from "styled-components";
import { paletteColors } from '../../helpers/globalStyles';

export const HeaderStyled = styled.header`
  align-content: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    color: ${paletteColors.title};
    font-size: 40px;
    font-weight: 700;
  }
`;

export default HeaderStyled;