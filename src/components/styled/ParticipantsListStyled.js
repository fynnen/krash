import styled from "styled-components";
import { BREAKPOINTS as bp } from "../../constants";
import { mediaMinMax } from  "../../helpers/mediaQuery";


export const ParticipantsListStyled = styled.ul`
  display: grid;
  grid-template-rows: auto;

  ${mediaMinMax(bp.XS.min, bp.XS.max, `
    grid-template-columns: 1fr;
  `)}
  ${mediaMinMax(bp.SM.min, bp.SM.max, `
    grid-template-columns: repeat(2, 1fr);
  `)}
  ${mediaMinMax(bp.MD.min, bp.MD.max, `
    grid-template-columns: repeat(3, 1fr);
  `)}
  ${mediaMinMax(bp.LG.min, bp.LG.max, `
    grid-template-columns: repeat(4, 1fr);
  `)}
`;

export default ParticipantsListStyled;