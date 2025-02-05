import '../index.css';
import { HeaderProps } from '../types/interfaces';

function Header({titleForPage} : HeaderProps) {
  return (
    <h1>{titleForPage}</h1>
  )
}

export default Header