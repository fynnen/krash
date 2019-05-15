import styled, { css } from "styled-components";
import { BREAKPOINTS as bp } from "../../constants";
import { mediaMin } from "../../helpers/mediaQuery";

import Participant from "../Participant";

export const ParticipantStyled = styled(Participant)`
  margin-bottom: 15px;

  .mtl {
    border-left-color: var(--mtl);
  }
  .qc {
    border-left-color: var(--qc);
  }
  .home {
    border-left-color: var(--home);
  }
  .fe {
    border-left-color: var(--front);
  }
  .be {
    border-left-color: var(--back);
  }
  .qa {
    border-left-color: var(--qa);
  }
  h3 {
    font-size: 18px;
    ${props =>
      !props.participant.available &&
      `
        color: var(--textDisabled);
      `}
  }
  .participant-info {
    font-size: 12px;
    margin-left: 15px;

    p {
      border-left-style: solid;
      border-left-width: 4px;
      display: inline-block;
      margin-top: 5px;
      min-width: 100px;
      padding: 5px;

      ${mediaMin(
        bp.SM.min,
        `
        display: block;
      `
      )}
    }
  }
`;

export default ParticipantStyled;
