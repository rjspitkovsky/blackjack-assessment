import React from 'react';

class Hand extends React.Component {
  constructor() {
    super()
    this.state = {
      deckId: null
    }
  }

  fetchDeck = (event) => {
    event.preventDefault()
    const shuffleDeckAPI = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    return fetch(shuffleDeckAPI).then(resp => resp.json()).then(respJSON => this.setState({deckId: respJSON.deck_id})
      // document.getElementById("test").innerHTML = respJSON.deck_id)
   )
  }

  dealCard = (event) => {
    event.preventDefault();
    console.log(this.state.deckId)
    const drawTwoCards = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`
    return fetch(drawTwoCards).then(resp => resp.json()).then(respJSON =>
    console.log(respJSON.cards)
    // document.getElementById("dealer").innerHTML = respJSON.cards[0].value
    // document.getElementById("player").innerHTML = respJSON.cards[1].value
  )
  }

  render() {
    return (
      <div>
            <div id="test">
            </div>

            <div id="dealer">
              <h1>DEALER</h1>
            </div>

            <div id="player">
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
