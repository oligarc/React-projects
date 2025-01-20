import { useState } from 'react'
import './App.css'
import { WishInput } from './WishInput/WishInput'
import { WishList } from './WishList/WishList'

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
  
  const [wishes,setWishes] = useState(initialWishes)
  const onNewWishHandler = (newWish) =>{
    setWishes((currentWishes) => [...currentWishes,newWish])
  } 
  return (
    <div className='app'>
      <h1>My wishlist</h1>
      <WishInput onNewWish={onNewWishHandler}></WishInput>
      <WishList wishes={wishes}/>
    </div>
  )
}

export default App
