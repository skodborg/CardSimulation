
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

function init() { var el = document.createElement("h1");
                  el.id="title"; el.innerHTML = "Output";
                  document.body.appendChild(el); }
