import styled from "styled-components";

export const KrashStyled = styled.div`
  height: var(--contentHeight);
	overflow-y: auto;
  padding: 20px;

  .edit-participants-area {
    margin-bottom: 20px;
  }

  button.btn-participant,
  button.reset {
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default KrashStyled;