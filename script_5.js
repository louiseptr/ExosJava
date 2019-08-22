const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let rented_books = []

function rentedbooks() {
for(let i=0 ; i < books.length ; i++){
 rented_books.push(books[i].rented)}
}

if (rented_books.includes(0)) {
  console.log("Non, tous les livres n'ont pas été loués.")
} else {
  console.log("Oui, ils ont tous été loués au moins une fois.")
}

console.log("Quel est livre le plus emprunté ?");

let max_rented = books[0].rented
let max_rented_title = books[0].title
for (var i=1; i < books.length; i++)
{
  if (books[i].rented > max_rented)
  {
    max_rented = books[i].rented;
    max_rented_title = books[i].title;
  }
}
console.log(max_rented_title);

console.log("Quel est le livre le moins emprunté ?");

let min_rented = books[0].rented
let min_rented_title = books[0].title
for (var i=1; i < books.length; i++)
{
  if (books[i].rented < min_rented)
  {
    min_rented = books[i].rented;
    min_rented_title = books[i].title;
  }
}
console.log(min_rented_title);

console.log("Trouve le livre avec l'ID: 873495");

var book_with_873495i_ID = ""
function findID(){
 for(var i=0; i< books.length; i++){
  if(books[i].id == 873495 ) { book_with_873495i_ID = books[i].title }
}
 console.log(book_with_873495i_ID)
}
findID()

console.log("Supprime le livre avec l'ID: 133712");
function deleteID() {
  for(let i=0; i<books.length; i++) {
    if(books[i].id == 133712) {delete books[i]};
  }
  console.log(books)
}
deleteID();

console.log("Trie les livres par ordre alphabétique");

books.sort(function(a, b) {
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})
console.log(books);