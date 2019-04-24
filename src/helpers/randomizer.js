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
    } else if (sortType === "mix") {
        return mixedSort(workPersons, teams, nbTeams);
    } else if (sortType === "splitted") {
        return splittedSort(workPersons, teams);
    }
    return null;
}

function splittedSort (persons, teams) {
    if ((teams.length === 2) && (teams[0].persons) && (teams[1].persons)) {
        teams[0].persons = persons.filter(person => person.location === "MTL");
        teams[1].persons = persons.filter(person => person.location === "QC");

        shuffle(persons.filter(person => person.location === "HOME")).forEach(function(person, index) {
            if (index % 2) {
                teams[0].persons.push(person);
            } else {
                teams[1].persons.push(person);
            }
        });
    }

    return teams;
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
