let numberOfFloorsAsked;

function drawthepyramid (numberOfFloorsAsked) {
  numberOfFloorsAsked = prompt ("Salut, bienvenue dans ma super pyramide! Combien d'étages veux-tu?");
  console.log(`Ok, tu veux ${numberOfFloorsAsked} étages. Allons-y!`);

  for (let i = 1; i <= numberOfFloorsAsked; i++) {
    let current_floor = '';
    for(let space = 1 ; space <=(numberOfFloorsAsked - i); space++){
      current_floor += ' ';
    }
    for (let hashtag = 1 ; hashtag <= i ; hashtag++){
     current_floor += "#"
    }
    console.log(current_floor)
  }
};

drawthepyramid (numberOfFloorsAsked);