import { ButtonProps } from "../Types/interfaces"
import { onClickVoid } from "../services/onClickVoid"

function Button({buttonText} : ButtonProps) {
  return (
    <button className="bg-blue-600 hover:bg-blue-900 p-2 rounded text-white font-semibold cursor-pointer"
    onClick={onClickVoid}>
        {buttonText}
        </button>
  )
}

export default Button