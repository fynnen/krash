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
        return splittedSort(workPersons, teams, nbTeams);
    }
    return null;
}


function splittedSort (persons, teams, nbTeams) {
    shuffle(persons);

    const mtlPersons = persons.filter(person => person.location === "MTL");
    const qcPersons = persons.filter(person => person.location === "QC");
    const homePersons = persons.filter(person => person.location === "HOME");;

    // Initialisation des groupes
    let group = [...Array(nbTeams)].map(() => []);

    // Détermination du nombre de groupes de base MTL et QC
    let nbMtl;
    let nbQc;

    if (mtlPersons.length > qcPersons.length) {
        nbMtl = Math.round((qcPersons.length / mtlPersons.length) * nbTeams);
        if (qcPersons.length && (nbMtl === nbTeams))  nbMtl = nbTeams - 1; // Au minium 1 groupe QC si des personnes QC existent
        nbQc = nbTeams - nbMtl;
    } else {
        nbQc = Math.round((mtlPersons.length / qcPersons.length) * nbTeams);
        if (mtlPersons.length && (nbQc === nbTeams))  nbQc = nbTeams - 1; // Au minium 1 groupe MTL si des personnesMTL existent
        nbMtl = nbTeams - nbQc;
    }

    // Population des groupes avec les MTL
    let i = 0;
    while (mtlPersons.length) {
        if (i === nbMtl) i = 0;
        group[i].push(mtlPersons.pop());
        i = i + 1;
    }

    // Population des groupes avec les QC
    i = nbQc;
    while (qcPersons.length) {
        if (i === nbTeams) i = nbQc;
        group[i].push(qcPersons.pop());
        i = i + 1;
    }

    // Population des groupes avec les HOME
    while (homePersons.length) {
        group.sort(function (a, b) { // Classer les groupes pour populer le plus petit
            return a.length - b.length;
        });
        group[0].push(homePersons.pop());
    }

    // Attribution des groupes au équipes
    teams.forEach((team, i) => {
        team.persons = group[i];
    });

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
