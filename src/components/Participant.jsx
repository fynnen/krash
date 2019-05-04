import React from 'react';
import styled from "styled-components";
import { LOCATIONS, ROLES } from '../constants';

const Participant = ({participant, className}) => {
    if (!participant.role || !participant.location) return null;
    const participantRoleId = ROLES[participant.role] && ROLES[participant.role].id;
    const participantRoleName = ROLES[participant.role] && ROLES[participant.role].name;
    const participantLocationId = LOCATIONS[participant.location] && LOCATIONS[participant.location].id;
    const participantLocationName = LOCATIONS[participant.location] && LOCATIONS[participant.location].name;
    
    if (participantRoleId && participantRoleName && participantLocationId && participantLocationName){
        return (
            <li className={className}>
                <h3>{participant.name}</h3>
                <p className={participantRoleId}>{participantRoleName}</p>
                <p className={participantLocationId}>{participantLocationName}</p>
            </li>
        )
    }

    return null;
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