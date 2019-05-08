import styled from "styled-components";

export const ParticipantsEditStyled = styled.div`
  .edit-participants-area {
    margin-bottom: 20px;
  }

  button.btn-participant {
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  li {
    h3 {
      width: 100%;
    }

    .participant-edit-infos {
      align-items: flex-start;
      display: flex;
      padding-bottom: 20px;
      padding-top:5px;

      input[type='checkbox'] {
        height: unset;
      }

      select {
        margin-right: 4px;
      }
    }
  }
`;

export default ParticipantsEditStyled;