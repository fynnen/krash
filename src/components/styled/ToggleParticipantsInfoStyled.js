import styled from "styled-components";
import { paletteColors } from "../../helpers/globalStyles";

export const ToggleParticipantsInfoStyled = styled.button`
  align-items: center;
  display: flex;
  background: transparent;
  justify-content: center;
  width: 48px;

  .toggle-participants-info {
    align-items: center;
    background-color: ${paletteColors.secondary};
    border-radius: 25px;
    color: ${paletteColors.light};
    display: flex;
    height: 30px;
    justify-content: center;
    min-height: 30px;
    min-width: 30px;
    padding: 5px;
    position: relative;
    width: 50%;
  }
`;

export default ToggleParticipantsInfoStyled;