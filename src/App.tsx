import React from 'react';
import {createBoard} from "./setup"
import {shuffleArray} from "./utils"
import { CardType } from './setup';
import Card from './components/Card/Card';
// Styles
import { Grid } from './App.styles';

const App = () => {
  const [cards,setCards]= React.useState<CardType[]>(shuffleArray(createBoard()))
  const [gameWon, setGameWon] = React.useState(false)
  const [matchedPairs, setMatchedPairs] = React.useState(0)
  const [clickedCard, setClickedCard] = React.useState<undefined|CardType>(undefined)
  React.useEffect(()=>{
    if(matchedPairs===cards.length/2){
      setGameWon(true)
      console.log(gameWon)
    }
  },[matchedPairs])
  const handleCardClick = (curClickedCard:CardType)=>{
    setCards(prev=>prev.map(card=>card.id === curClickedCard.id? {...card,flipped:true,clickable:false}:card))
    if(!clickedCard){
      setClickedCard({...curClickedCard})
      return
    }
    if(clickedCard.matchingCardId === curClickedCard.id){
      setMatchedPairs(prev=>prev+1)
      setCards(prev=>
        prev.map(card=>
          card.id === clickedCard.id ||card.id===curClickedCard.id?{...card,clickable:false}:card))
      setClickedCard(undefined)
        return;
    }
    setTimeout(() =>{
      setCards(prev=>
        prev.map(card=>card.id===clickedCard.id||card.id===curClickedCard.id?{...card,flipped:false,clickable:true}:card))
    },1000)
    setClickedCard(undefined)
  }

  return (
    <div>
      <Grid>{cards.map(card=>(<Card key={card.id} card={card} callback={handleCardClick} />))}</Grid>
    </div>
  );
};

export default App;
