import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

function ResultTable({ init, annual, expected, duration }) {
  const data = calculateInvestmentResults({
    initialInvestment: init,
    annualInvestment: annual,
    expectedReturn: expected,
    duration: duration,
  });

  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((investObj, i) => (
          <tr key={i}>
            <td>{investObj.year}</td>
            <td>{formatter.format(investObj.interest)}</td>
            <td>{formatter.format(investObj.valueEndOfYear)}</td>
            <td>{formatter.format(investObj.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
