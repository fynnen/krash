import React from 'react';
import styled from "styled-components";

const Participant = ({participant, className}) => {
    return (
        <li className={className}>
            <h3>{participant.name}</h3>
            <p className={participant.role}>{participant.role}</p>
            <p className={participant.location}>{participant.location}</p>
        </li>
    )
};

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