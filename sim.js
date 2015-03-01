
// Rules:

// The cards are drawn one by one. At least 4 cards must be visible,
// otherwise draw until so. When 4 cards are visible, these can be
// considered, and three cases can apply:

//     - The outer two cards of the 4 we are considering shares the rank;
//       these two cards, along with the two inbetween, are removed

//     - The outer two cards shares the suit; the two cards inbetween are
//       removed, leaving the two outer cards sharing the suit 

//     - None of the above; a new card is drawn, and the new situation is
//       considered

//     - When no unknown cards are left to be drawn, the cards can be
//       redrawn from the back, until 4 cards have been redrawn with
//       no cards being removed in the process
// 

// The following code will simulate these rules, and keep track of
// games won as a percentage of games played, with a randomly shuffled
// deck

function init() { 
    var el = document.createElement("h1");
    el.id="title"; el.innerHTML = "Output";
    document.body.appendChild(el); 
    play();
}




// ENUMS
var RANK = Object.freeze({"A":"A", "2":"2", "3":"3", "4":"4", "5":"5",
                          "6":"6", "7":"7", "8":"8", "9":"9",
                          "10":"10", "J":"J", "Q":"Q", "K":"K"});

var SUIT = Object.freeze({"h":"h", "s":"s", "c":"c", "d":"d"});

var TEST_DECK;

// comment the below initialization to use a normal deck with 52 cards
TEST_DECK = [new Card(RANK.A, SUIT.s),
             new Card(RANK[2], SUIT.h),
             new Card(RANK[3], SUIT.d),
             new Card(RANK[4], SUIT.s)];


// 'Card'-object constructor
function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.toString = function() { return rank + suit };
}

var shuffledCardsDeck = [];


function play() {
    initializeDeck();

    while (shuffledCardsDeck.length > 0) {
	act();
    }
    // .. draw cards and do rule checks

}


function act() {
    shuffledCardsDeck.pop();
}


function initializeDeck() {
    if (TEST_DECK != undefined) {
        // use test-deck if defined
        shuffledCardsDeck = TEST_DECK;
    } else {
        // reset the deck
        shuffledCardsDeck = [];

        // fill in all 52 cards into the shuffledCardsDeck
        for (var r in RANK) {
            for (var s in SUIT) {
                shuffledCardsDeck.push(new Card(r, s));
            }
        }
        // randomize order of cards
        shuffle(shuffledCardsDeck);
    }

    printArrayOfCards(shuffledCardsDeck);
}


// shuffles array, randomizing the order of contained elements
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


function printArrayOfCards(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += array[i].toString() + " ";
    }
    console.log(result);
}

