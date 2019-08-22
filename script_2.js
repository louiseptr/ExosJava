let number;
let result = 1

function factorial (number) {
number = prompt("De quel nombre veux-tu calculer la factorielle?");

if (number == 0) {
  console.log("Résultat : 1");
} else if (number < 0) {
  console.log("Résultat: impossible, ce nombre est négatif!");
} else {
  for(i=1; i <=number; i++){
  result = result*i}
  console.log(`Le résultat du calcul est: ${result}`);
}
};

factorial (number);