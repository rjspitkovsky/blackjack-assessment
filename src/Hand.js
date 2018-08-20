import React from 'react';

class Hand extends React.Component {

  fetchDeck = (event) => {
    event.preventDefault()
    const shuffleDeckAPI = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    return fetch(shuffleDeckAPI).then(resp => resp.json()).then(respJSON => document.getElementById("test").innerHTML = respJSON.success)
  }

  dealCard = (event) => {
    event.preventDefault();
    const drawTwoCards = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
    return fetch(drawTwoCards).then(resp => resp.json()).then(respJSON => document.getElementsByClassName("competitor")[1].innerHTML = respJSON.cards[1].value)
  }

  render() {
    return (
      <div>
            <div id="test">
            </div>

            <div className="competitor">
              <h1>DEALER</h1>
            </div>

            <div className="competitor">
              <h1>PLAYER</h1>
            </div>


        <h1>This is my hand component</h1>

        <button onClick={event => this.fetchDeck(event)}>Start game!</button>

        <button onClick={event => this.dealCard(event)}>Deal a card to each player</button>
      </div>
    )
  }
}

export default Hand
