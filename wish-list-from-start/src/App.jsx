import './App.css'
import { WishInput } from '../../wish-list/src/WishInput/WishInput'
import { useState } from 'react'
import WishList from './WishList/WishList'

function App() {

   const initialWishes=[
    {id:1,
      text:'See Muse Live',
      completed:true
    },

    {id:2,
      text:'See Rammstein Live',
      completed:true
    },

    {id:3,
      text:'See Linkin Park Live',
      completed:false
    }
   ]

   const [wishes,setWishes] = useState(initialWishes)
   const onNewWishHandler = (newWish) =>{
    setWishes((currentWishes) => [...currentWishes,newWish]);
   }

  return (
    <>
      <WishInput onNewWish={onNewWishHandler} />
      <WishList wishes={wishes} setWishes={setWishes}/>
    </>
  )
}

export default App
