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
    showPunchLine : boolean,
    handleRevealPunchline : () => void;
}

export interface ButtonProps {
    buttonText: string;
    onClick: () => void;
    }