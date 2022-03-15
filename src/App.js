import React, { Component } from "react";
import "./App.css";
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
    this.validate();
  };

  cleanState = () => {
    this.setState({
      checked: "",
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
    });
  };

  onClose = () => {
    //Write code for modal close
    this.cleanState();
    this.setState({ show: false });
  };

  handleChange = (e) => {
    //write code to handle onchange event for input fields

    this.setState((prevState) => ({
      [e.target.name]: e.target.value,
    }));
    this.setState({
      name_error: validateName(this.state.name),
      mobile_error: validateMobile(this.state.mobile),
      addrs_error: validateAddress(this.state.addrs),
      city_error: validateCity(this.state.city),
      states_error: validateStates(this.state.states),
      zip_error: validateZip(this.state.zip),
    });
    console.log(this.validate());

    // this.setState(() => ({
    //   name_error: validateName(this.state.name),
    // }));
  };

  handleSave = (e) => {
    const user = {
      name: this.state.name,
      mobile: this.state.mobile,
      addrs: this.state.addrs,
      city: this.state.city,
      states: this.state.states,
      type: this.state.type,
      zip: this.state.zip,
    };
    //write code for saving data into personal or business
    e.preventDefault();
    // Creating object to push to storage

    let { personal, business, checked, ...items } = this.state;

    if (checked === "personal") {
      //Adding the currrent user details to the personal state array
      personal.push(user);

      //pushing personal array to local storage
      localStorage.setItem("personal", JSON.stringify(personal));
    }

    if (checked === "business") {
      //Adding the current user details to business state array
      business.push(user);

      //pushing business array to local storage
      localStorage.setItem("business", JSON.stringify(business));
    }

    // this.cleanState();
  };

  handleClear = (e) => {
    //write code for clearing input fields
    e.preventDefault();
    this.cleanState();
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

  getData = () => {
    let data = null;
    if (this.state.show_personal) {
      // data = localStorage.getItem("personal");
      data = this.state.personal;
    } else {
      // data = localStorage.getItem("business");
      data = this.state.business;
    }
    return data;
  };

  handleDisplay = (e) => {
    if (e.target.name === "business") {
      this.setState({ show_personal: false });
    } else {
      this.setState({ show_personal: true });
    }
  };

  validate() {
    const {
      name,
      mobile,
      addrs,
      city,
      states,
      zip,
      name_error,
      mobile_error,
      addrs_error,
      city_error,
      states_error,
      zip_error,
    } = this.state;

    if (
      validateName(name) === "" &&
      validateMobile(mobile) === "" &&
      validateAddress(addrs) === "" &&
      validateCity(city) === "" &&
      validateStates(states) === "" &&
      validateZip(zip) === ""
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {/*write your code here for displaying details*/}
        <div>
          <button className="add" onClick={() => this.setState({ show: true })}>
            Add
          </button>

          <h1 className="App-header">Address Book</h1>

          <table>
            <tbody>
              <tr>
                <th
                  name="personal"
                  onClick={this.handleDisplay}
                  className="buttons"
                >
                  Personal
                </th>
                <th
                  name="business"
                  onClick={this.handleDisplay}
                  className="buttons"
                >
                  Business
                </th>
              </tr>
              <tr>
                <td>Name</td>
                <td>Mobile No</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip</td>
                <td>Present/Permanent Address</td>
              </tr>

              {this.getData().map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.mobile}</td>
                  <td>{row.addrs}</td>
                  <td>{row.city}</td>
                  <td>{row.states}</td>
                  <td>{row.zip}</td>
                  <td>{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={this.state.show ? "bg" : ""}>
          <Modal>
            {this.state.show && (
              <>
                <div className="pop">
                  <form onSubmit={this.handleSave}>
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

                    {this.state.checked !== "" ? (
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
                          <span>{validateName(this.state.name)}</span>

                          <label htmlFor="mobile">Mobile No</label>
                          <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange}
                          />
                          <span>{validateMobile(this.state.mobile)}</span>

                          <label htmlFor="addrs">Address</label>
                          <textarea
                            placeholder=""
                            onChange={this.handleChange}
                            name="addrs"
                            value={this.state.addrs}
                          />
                          <span>{validateAddress(this.state.addrs)}</span>

                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={this.handleChange}
                            value={this.state.city}
                          />
                          <span>{validateCity(this.state.city)}</span>

                          <label htmlFor="name">State</label>
                          <input
                            type="text"
                            id="states"
                            name="states"
                            onChange={this.handleChange}
                            value={this.state.states}
                          />
                          <span>{validateStates(this.state.states)}</span>

                          <label htmlFor="zip">Postal Code/Zip Code</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            onChange={this.handleChange}
                            value={this.state.zip}
                          />
                          <span>{validateZip(this.state.zip)}</span>
                        </div>

                        <div className="radios">
                          <input
                            type="radio"
                            id="present"
                            name="type"
                            value="present"
                            checked={this.state.type === "present"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="present">Present</label>

                          <input
                            type="radio"
                            id="permanent"
                            name="type"
                            value="permanent"
                            checked={this.state.type === "permanent"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="permanent">Permanent</label>

                          <input
                            type="radio"
                            id="both"
                            name="type"
                            value="both"
                            checked={this.state.type === "both"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="both">Both</label>
                        </div>

                        <div className="btns fields">
                          <button
                            className="save"
                            disabled={!this.validate()}
                            onClick={this.handleSave}
                          >
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
