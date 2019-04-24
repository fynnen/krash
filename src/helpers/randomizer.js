import shuffle from 'shuffle-array'; 
import generateName from 'sillyname';

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
        return randomSort(workPersons, teams, nbTeams);
    } else if (sortType === "mixed") {
        return mixedSort(workPersons, teams, nbTeams);
    } else if (sortType === "splitted") {

    }
    return null;
}

function randomSort(persons, teams, nbTeams) {
    shuffle(persons);

    let teamIndex = 0;
    const maxIndex = nbTeams;
    
    persons.forEach((person) => {
        teams[teamIndex].persons.push(person);

        (teamIndex === maxIndex - 1) ? teamIndex = 0 : teamIndex++;
    });

    return teams;
}

function mixedSort(persons, teams, nbTeams) {
    shuffle(persons);
    
    const personsByLocations = [];

    persons.forEach((person) => {
        let personByLocationExist = false;
        personsByLocations.forEach((personsByLocation) => {
            if (personsByLocation.location === person.location) {
                personByLocationExist = true;
            }
        });

        if (personByLocationExist) {
            const personsByLocation = personsByLocations.find((personByLoc) => personByLoc.location === person.location);
            personsByLocation.persons.push(person);
        } else {
            personsByLocations.push({
                location: person.location,
                persons: [person],
            });
        }
    });

    let teamIndex = 0;
    let maxTeamIndex = nbTeams;

    personsByLocations.forEach((locationTeam) => {
        locationTeam.persons.forEach((person) => {
            teams[teamIndex].persons.push(person);

            (teamIndex === maxTeamIndex - 1) ? teamIndex = 0 : teamIndex++;
        });
    });

    return teams;
}

function getTeams(nbTeams) {
    const teams = [];
    for (let i = 0; i < nbTeams; i += 1) {
        teams.push({
            name: generateName(),
            persons: [],
        });
    }
    return teams;
}
