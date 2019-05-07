import styled from 'styled-components';
import { paletteColors } from '../../helpers/globalStyles';

const ToggleParticipantsInfoStyled = styled.button`
  ${({ isNightMode, showParticipantsInfo }) => `
    align-items: center;
    display: flex;
    background: transparent;
    height: 30px;
    justify-content: flex-end;
    width: 30px;

    &:active,
    &:focus {
      .toggle-participants-info {
        box-shadow: 3px 3px 10px ${paletteColors.secondary};
      }
    }

    .toggle-participants-info {
      align-items: center;
      background-color: ${
        isNightMode ? paletteColors.light : paletteColors.secondary
      };
      border-radius: 25px;
      color: ${
        showParticipantsInfo
          ? paletteColors.title
          : isNightMode
          ? paletteColors.secondary
          : paletteColors.light
      };
      display: flex;
      justify-content: center;
      padding: 5px;
      position: relative;
    }
  `}
`;

export default ToggleParticipantsInfoStyled;
