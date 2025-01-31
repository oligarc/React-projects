import "./App.css";
import Header from "./Header/Header";
import UserInput from "./UserInput/UserInput";
import ResultTable from "./ResultTable/ResultTable";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  return (
    <>
      <Header />
      <UserInput
        init={initialInvestment}
        setInit={setInitialInvestment}
        annual={annualInvestment}
        setAnnual={setAnnualInvestment}
        expected={expectedReturn}
        setExpected={setExpectedReturn}
        duration={duration}
        setDuration={setDuration}
      />
      <ResultTable
        init={initialInvestment}
        annual={annualInvestment}
        expected={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;
