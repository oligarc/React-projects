import { JokeDisplayProps } from "../types/interfaces"
import Button from "./Button"
function JokeDisplay({joke} : JokeDisplayProps) {

  return (
    <>
    <p>{joke.setup}</p>
    <Button buttonText="Reveal Punchline" onClick={} />
    </>
  )
}

export default JokeDisplay