import React from 'react';

class Hand extends React.Component {

  fetchDeck = (event) => {
    event.preventDefault()
    let request = new XMLHttpRequest()
    const shuffleDeckAPI = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    return fetch(shuffleDeckAPI).then(resp => resp.json()).then(respJSON => document.getElementById("test").innerHTML = respJSON.success)
  }

  render() {
    return (
      <div>
            <div id="test">
            </div>
        <h1>This is my hand component</h1>

        <button onClick={event => this.fetchDeck(event)}>Start game!</button>
      </div>
    )
  }
}

export default Hand
