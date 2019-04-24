import React from 'react';
import styled from "styled-components";

const Participant = ({participant, className}) => (
<li className={className}>
    <h3>{participant.name}</h3>
    <p className={participant.position}>{participant.position}</p>
    <p className={participant.location}>{participant.location}</p>
</li>
);

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
    .front {
        background: var(--front);
    }
    .back {
        background: var(--back);
    }
    .qa {
        background: var(--qa);
    }
`;