import styled from "styled-components";

export const ParticipantsListStyled = styled.div`
  .edit-participants-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .edit-participants-buttons-left {
    button {
      margin-right: 10px;
      padding-left: 10px;
      padding-right: 10px;

      svg {
        position: relative;
        top: 1px;
      }
    }
  }

  label {
    align-items: center;
    display: flex;
  }
`;

export default ParticipantsListStyled;