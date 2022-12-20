export const StepOne = () => {
  return (
    <form className="form-step-one">
      <h1 className="step-title">Personal Info</h1>
      <p className="step-text">
        Plese provide your name, email address and phone number.
      </p>
      <label>
        Name
        <input type="text" placeholder="e.g. Stephen King" />
      </label>
      <label>
        Email Address
        <input type="text" placeholder="e.g stephenking@lorem.com" />
      </label>
      <label>
        Phone Number
        <input type="text" placeholder="e.g. +1 234 567 890" />
      </label>
    </form>
  );
};
