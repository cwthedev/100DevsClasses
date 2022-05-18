// get a deck ID from the API, reusing the deckID variable unnecessarily

if(!localStorage.getItem('deckID')){
  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => localStorage.setItem('deckID', data.deck_id))
}



document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let faceCards = {'JACK':11, 'QUEEN':12, 'KING':13, 'ACE':14}
  let deckID = localStorage.getItem('deckID')
    const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let cardArr = data.cards;
        console.log(cardArr)
        document.querySelector('section.player1 >img').src = cardArr[0].image
        document.querySelector('section.player1 >span').innerText = `${cardArr[0].value} of ${cardArr[0].suit}`
        document.querySelector('section.player2 >img').src = cardArr[1].image
        document.querySelector('section.player2 >span').innerText = `${cardArr[1].value} of ${cardArr[1].suit}`
        let oneValue = faceCards[cardArr[0].value] || +cardArr[0].value
        let twoValue = faceCards[cardArr[1].value] || +cardArr[1].value
        console.log (`${oneValue} VS ${twoValue}`)
        if (+oneValue > twoValue) document.querySelector('#verdict').innerText = 'Player 1 Wins!'
        else if (+oneValue < twoValue) document.querySelector('#verdict').innerText = 'Player 2 Wins!'
        else document.querySelector('#verdict').innerText = 'WAR!!!'
      })
      .catch(err => {
          console.log(`error ${err}`)
          fetch(`https://www.deckofcardsapi.com/api/deck/${localStorage.getItem('deckID')}/shuffle/`)
      });
}document.querySelector()