import { ButtonProps } from "../types/interfaces";
function Button({buttonText, onClick} : ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
        {buttonText}
    </button>
  )
}

export default Button