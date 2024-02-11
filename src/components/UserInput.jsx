function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment.toString()}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment.toString()}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn.toString()}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput.duration.toString()}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
