import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";
function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" min="0" step="1" />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" min="0" step="1" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" min="0" step="1" />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" min="0" step="1" />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
