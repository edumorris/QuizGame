const cards = document.querySelectorAll(".card");
//to select all the cards

let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  //this keyword reps element(div) that fired the event
  this.classList.add("flip");

  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  //set data attribute in html
  if (firstCard.dataset.pets === secondCard.dataset.pets) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  //set time delay of 1500s in order to see the flipped cards
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [cardFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 20);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
/*listen for a click event and when fired execute a function named flipCard*/
