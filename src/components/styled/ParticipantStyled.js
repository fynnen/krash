import styled from "styled-components";
import Participant from '../Participant';

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
  h3{
    font-size: 24px;
  }
  p {
    border-left-style: solid;
    border-left-width: 5px;
    display: inline-block;
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
    min-width: 100px;
    padding: 5px;
  }
`;

export default ParticipantStyled;