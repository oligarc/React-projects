export interface Joke {
    type: string,
    setup: string,
    punchline: string,
    id: number
  }

export interface HeaderProps {
    titleForPage: string;
}

export interface JokeDisplayProps{
    joke : Joke | null,
    onClick: () => void;
}