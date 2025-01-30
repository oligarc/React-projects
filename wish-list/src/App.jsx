import { useState } from 'react'
import './App.css'
import { WishInput } from './WishInput/WishInput'
import { WishList } from './WishList/WishList'
import GeneralButton from './Components/GeneralButton'

const initialWishes = [
  {
    id: 0,
    text: "Travel to BCN",
    completed: true
  },
  {
    id: 1,
    text: "See Muse live",
    completed: true
  },
  {
    id: 2,
    text: "Get a dev job",
    completed: false
  }
]

function App() {
  
  const [wishes,setWishes] = useState(initialWishes) //We are using the initialWishes as the basic state of App
  const onNewWishHandler = (newWish) =>{
    setWishes((currentWishes) => [...currentWishes,newWish]) //When we alter the state, we set the wishes to the current
    //wishes (thats why ...current) and then add the new Wish
  } 
  return (
    <div className='app'>
      <h1>My wishlist</h1>
      <WishInput onNewWish={onNewWishHandler}></WishInput>
      <WishList wishes={wishes} setWishes={setWishes}/>
      <GeneralButton actionFunction={() => setWishes(wishes.filter((wish) => !wish.completed ))}
      displayText={'Archive wish'} />
    </div>
  )
}

export default App
