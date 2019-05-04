import styled from "styled-components";
import Participant from '../Participant';

export const ParticipantStyled = styled(Participant)`
  .mtl {
    background: var(--mtl);
  }
  .qc {
    background: var(--qc);
  }
  .home {
    background: var(--home);  
  }
  .fe {
    background: var(--front);
  }
  .be {
    background: var(--back);
  }
  .qa {
    background: var(--qa);
  }

  border: 1px solid var(--text);
  padding: 10px;
  margin: 5px 0;
  h3 {
    margin-bottom: 0;
  }
  p {
    display: inline-block;
    padding: 15px 10px;
  }
`;

export default ParticipantStyled;