import image from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header>
      <img src={image} alt="logo" width="50%" />
      <h1>Investment calculator</h1>
    </header>
  );
}

export default Header;
