const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://randomwordgenerator.com/img/picture-generator/57e5d34a4c50a414f1dc8460962e33791c3ad6e04e507440762e7adc9548cd_640.jpg"
        alt="brown shoes with laces"
      />
      <div data-testid="custom-element">CUSTOM HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full name"
            defaultValue="John Doe"
          ></input>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio"></textarea>
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
    </>
  );
};

export default Application;
