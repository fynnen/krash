import shuffle from 'shuffle-array'; 

export default function randomize(
    nbTeams,
    persons, // TODO: only take available persons, either here or who ever calls this
    sortType,
) {
    if (!persons || persons.length === 0) throw new Error('Persons must contains persons');

    if (!nbTeams || nbTeams < 1) throw new Error('Number of teams must be greater than 1');
    
    if (persons.length < nbTeams) throw new Error('Persons must contain atleast the same number of teams asked.');

    const workPersons = [...persons];
    const teams = getTeams(nbTeams);

    if (sortType === "random") {
        shuffle(workPersons);

        let teamIndex = 0;
        const maxIndex = nbTeams;
        
        workPersons.forEach((person) => {
            teams[teamIndex].persons.push(person);

            (teamIndex === maxIndex - 1) ? teamIndex = 0 : teamIndex++;
        });

        return teams;
    }
}

function getTeams(nbTeams) {
    const teams = [];
    for (let i = 0; i < nbTeams; i += 1) {
        teams.push({
            name: 'TEAM_NAME_' + i, // TODO: dynamique
            persons: [],
        });
    }
    return teams;
}
