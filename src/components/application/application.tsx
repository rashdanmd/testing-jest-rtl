const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
      </div>
      <div>
        <label htmlFor="job-location">Job location</label>
        <select>
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I agree to the terms and
          conditions
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Application;
