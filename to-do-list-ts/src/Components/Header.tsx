import "../index.css"
import { HeaderProps } from "../Types/interfaces"
import Button from "./Button"

function Header({enterpriseName} : HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
      <img src="/checkdef.png" alt="" className="w-14" />
      <h1 className="text-3xl text-gray-700">{enterpriseName}</h1>
      </div>
      <div>
        <ul className="flex space-x-8 items-center text-black">
        <li><a href="#">Características</a></li>
        <li><a href="#">Recursos</a></li>
        <li><a href="#">Para equipos</a></li>
        <li><a href="#">Precios</a></li>
        </ul>
      </div>
      <Button buttonText="Pruébala gratis" />
      </header>
  )
}

export default Header