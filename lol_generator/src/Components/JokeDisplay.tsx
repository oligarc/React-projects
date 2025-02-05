import { JokeDisplayProps } from "../types/interfaces"
import Button from "./Button"
import RandomGif from "./RandomGif"
function JokeDisplay({joke,showPunchLine,handleRevealPunchline} : JokeDisplayProps) {

  return (
    <>
    {joke && (
      <>
        <p>{joke.setup}</p>
        <Button buttonText="Reveal Punchline"
                onClick={handleRevealPunchline} />
        
        {showPunchLine && (
            <>
              <p>{joke.punchline}</p>
              <RandomGif />
            </>
          )}
      </>
    )}
    </>
  )
}

export default JokeDisplay