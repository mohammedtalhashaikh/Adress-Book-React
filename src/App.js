import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import Modal from "./component/modal";

import {
  validateName,
  validateAddress,
  validateMobile,
  validateCity,
  validateStates,
  validateZip,
} from "./component/validation";

class Home extends Component {
  state = {
    checked: "",
    show: false,
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states: "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: "",

    personal: [
      {
        name: "sample",
        mobile: "1234567890",
        addrs: "a a a",
        city: "chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],

    business: [
      {
        name: "cool",
        mobile: "1234567890",
        addrs: "a a a",
        city: "chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],
  };

  componentDidMount = () => {
    this.handleBorder();
  };

  onClose = () => {
    //Write code for modal close
    this.setState({ show: false });
  };

  handleChange = (e) => {
    //write code to handle onchange event for input fields
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = (e) => {
    //write code for saving data into personal or business
  };

  handleClear = (e) => {
    //write code for clearing input fields
    e.preventDefault();
    this.setState({
      name: "",
      mobile: "",
      addrs: "",
      city: "",
      states: "",
      type: "",
      zip: "",
    });
  };

  handleBorder = () => {
    this.setState({
      borderBottom1: "hidden",
      borderBottom: "3px solid rgb(71,68,206)",
      show_personal: true,
    });
  };

  handleBorder1 = () => {
    this.setState({
      borderBottom: "hidden",
      borderBottom1: "3px solid rgb(71,68,206)",
      show_personal: false,
    });
  };

  render() {
    return (
      <div>
        {/*write your code here for displaying details*/}
        <button className="add" onClick={() => this.setState({ show: true })}>
          Add
        </button>
        <div className={this.state.show ? "bg" : ""}>
          <Modal>
            {this.state.show && (
              <>
                <div className="pop">
                  <form>
                    <h3>Fill Address Details</h3>
                    <button className="close" onClick={this.onClose}>
                      x
                    </button>

                    <div className="radios">
                      <input
                        type="radio"
                        id="personal"
                        name="checked"
                        value="personal"
                        checked={this.state.checked === "personal"}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="personal">Personal</label>

                      <input
                        type="radio"
                        id="business"
                        name="checked"
                        value="business"
                        checked={this.state.checked === "business"}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="business">Business</label>
                    </div>

                    {this.state.checked != "" ? (
                      <div>
                        <div className="fields">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />

                          <label htmlFor="mobile">Mobile No</label>
                          <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange}
                          />

                          <label htmlFor="addrs">Address</label>
                          <textarea
                            placeholder=""
                            onChange={this.handleChange}
                            name="addrs"
                            value={this.state.addrs}
                          />

                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={this.handleChange}
                            value={this.state.city}
                          />

                          <label htmlFor="name">State</label>
                          <input
                            type="text"
                            id="states"
                            name="states"
                            onChange={this.handleChange}
                            value={this.state.states}
                          />

                          <label htmlFor="zip">Postal Code/Zip Code</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            onChange={this.handleChange}
                            value={this.state.zip}
                          />
                        </div>

                        <div className="radios">
                          <input
                            type="radio"
                            id="present"
                            name="addressType"
                            value={this.state.type}
                          ></input>
                          <label htmlFor="present">Present</label>

                          <input
                            type="radio"
                            id="permanent"
                            name="addressType"
                            value={this.state.type}
                          ></input>
                          <label htmlFor="permanent">Permanent</label>

                          <input
                            type="radio"
                            id="both"
                            name="addressType"
                            value={this.state.type}
                          ></input>
                          <label htmlFor="both">Both</label>
                        </div>

                        <div className="btns fields">
                          <button className="save" disabled={false}>
                            Save
                          </button>
                          <button className="clear" onClick={this.handleClear}>
                            Clear
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </form>
                </div>
              </>
            )}
          </Modal>
        </div>
      </div>
    );
  }
}

export default Home;
