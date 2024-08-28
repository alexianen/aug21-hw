//Ex. 2 

function plural(noun, number) {
    if (noun == "pig" || noun == "hamster" || noun == "parrot") {
        if (number == 1) {
            return `I have 1 ${noun}.`;            
        }
        else {
            return `I have ${number} ${noun}s.`;
        }
    }

    else if (noun == "sheep") {
            return `I have ${number} sheep.`;
        }    

    else if (noun == "goose") {
        if (number == 1) {
            return `I have 1 ${noun}.`;
        }
        else {
            return `I have ${number} geese.`;
        }
    }   
}

console.log(plural("pig", 6));
console.log(plural("hamster", 0));
console.log(plural("parrot", 1));
console.log(plural("sheep", 1));
console.log(plural("sheep", 7));
console.log(plural("goose", 1));
console.log(plural("goose", 15)); 

//Ex. 4


function ageCalculator(birthYear) {
    return 2024 - birthYear;
}   
//afla varsta persoanei

function pensionAge(isF) {
    return isF ? 64 : 67;
} 
// varsta de pensionare pt femei si barbati
//true = F, false = M


function retirement(nume, anulNasterii, _1isF) {
    let varsta = ageCalculator(anulNasterii);
    let varstaDePensionare = pensionAge(_1isF);

    if (varsta > varstaDePensionare) {
        return `${nume} este deja pensionat/a`;
    }
    else if (varsta < varstaDePensionare && varsta >= 18) {
        return `${nume} mai are ${varstaDePensionare - varsta} ani pana la pensionare.`;
    }
    else if (varsta < 18) { 
        return `${nume} este minor/a.`;
    }
}


console.log(retirement("Sergiu", 1979, false));
console.log(retirement("Anastasia", 1963, true));
console.log(retirement("Andreea", 2010, true));