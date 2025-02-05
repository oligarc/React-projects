import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Header from './Components/Header'
import { getRandomJoke } from './services/jokeApi';
import { Joke } from './types/interfaces';
import JokeDisplay from './Components/JokeDisplay';

function App() {

  const [joke,setJoke] = useState<Joke | null>(null); //Joke could be a Joke or a null, for that you use the |
  const handleJoke =  () => {
     getRandomJoke().then((newJoke: Joke | null) =>{
      setJoke(newJoke);
     });
  }

  

  return (
    <>
    <div className='app'>
    <Header titleForPage='LOL GENERATOR' />
    <Button buttonText='Get Joke' onClick={handleJoke}/>
    {joke && (<JokeDisplay joke={joke} onClick={}  />)}
    </div>
      
    </>
  )
}

export default App
