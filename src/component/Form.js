import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: "",
    };
  }

  changeHandler(event) {
    this.setState({ checked: event.target.value });
  }

  render() {
    const { checked } = this.state;
    return (
      <>
        <div className="pop">
          <form>
            <h3>Fill Address Details</h3>
            <button className="close" onClick={this.props.onClose}>
              x
            </button>

            <div className="radios">
              <input
                type="radio"
                id="personal"
                name="checked"
                value="personal"
                checked={checked === "personal"}
                onChange={this.changeHandler}
              />
              <label htmlFor="personal">Personal</label>

              <input
                type="radio"
                id="business"
                name="checked"
                value="business"
                checked={checked === "personal"}
                onChange={this.changeHandler}
              />
              <label htmlFor="business">Business</label>
            </div>

            <div className="fields">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="mobile">Mobile No</label>
              <input type="text" id="mobile" name="mobile" />

              <label htmlFor="addrs">Address</label>
              <textarea placeholder="" />

              <label htmlFor="city">City</label>
              <input type="text" id="city" name="" />

              <label htmlFor="name">State</label>
              <input type="text" id="states" name="states" />

              <label htmlFor="zip">Postal Code/Zip Code</label>
              <input type="text" id="zip" name="zip" />
            </div>

            <div className="radios">
              <input type="radio" id="present" name="addressType"></input>
              <label htmlFor="present">Present</label>

              <input type="radio" id="permanent" name="addressType"></input>
              <label htmlFor="permanent">Permanent</label>

              <input type="radio" id="both" name="addressType"></input>
              <label htmlFor="both">Both</label>
            </div>

            <div className="btns fields">
              <button className="save" disabled={false}>
                Save
              </button>
              <button className="clear">Clear</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
