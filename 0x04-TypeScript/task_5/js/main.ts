interface MajorCredits {
    type: 'major';
    credits: number;
}

interface MinorCredits {
    type: 'minor';
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number{
    return subject1.credits + subject2.credits
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number{
    return subject1.credits + subject2.credits
}

let python: MajorCredits = {type:'major', credits: 330}
let react: MajorCredits = {type:'major', credits: 420}
let cpp: MinorCredits = {type:'minor', credits: 90}
let go: MinorCredits = {type:'minor', credits: 180}

console.log(sumMajorCredits(python, react))
console.log(sumMinorCredits(cpp, go))

