import React from "react";

export const PersonalForm = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input className="fields" type="text" id="name" name="name" />

      <label htmlFor="mobile">Mobile No</label>
      <input className="fields" type="text" id="mobile" name="mobile" />

      <label htmlFor="addrs">Address</label>
      <textarea placeholder="" />

      <label htmlFor="city">City</label>
      <input className="fields" type="text" id="city" name="" />

      <label htmlFor="name">State</label>
      <input className="fields" type="text" id="states" name="states" />

      <label htmlFor="zip">Postal Code/Zip Code</label>
      <input className="fields" type="text" id="zip" name="zip" />

      <div className="radio">
        <input type="radio" id="present" name="present"></input>
        <label htmlFor="present">Present</label>

        <input type="radio" id="permanent" name="permanent"></input>
        <label htmlFor="permanent">Permanent</label>

        <input type="radio" id="both" name="both"></input>
        <label htmlFor="both">Both</label>
      </div>

      <div className="btns">
        <button className="save">Save</button>
        <button className="clear">Clear</button>
      </div>
    </form>
  );
};
