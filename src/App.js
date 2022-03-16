import React, { Component } from "react";
import "./App.css";
import Modal from "./component/modal";
import { TableRows } from "./component/TableRows";

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
        type: "Both",
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
    this.setState({ show: false });
    this.cleanState();
  };

  handleChange = (e) => {
    //write code to handle onchange event for input fields
    this.validate();
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.handleError();
  };
  handleError = () => {
    this.setState({
      name_error: validateName(this.state.name),
      mobile_error: validateMobile(this.state.mobile),
      addrs_error: validateAddress(this.state.addrs),
      city_error: validateCity(this.state.city),
      states_error: validateStates(this.state.states),
      zip_error: validateZip(this.state.zip),
    });
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
    // Creating object to push to storage

    let { personal, business, checked } = this.state;
    if (checked === "Personal") {
      personal.push(user);
      this.setState({ show: false, show_personal: true });
    }
    if (checked === "Business") {
      business.push(user);
    }
    this.setState({ show: false, show_personal: checked === "Personal" });
    this.cleanState();
  };

  handleClear = (e) => {
    //write code for clearing input fields
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
    // if (this.state.show_personal) {
    //   // data = localStorage.getItem("personal");
    //   return this.state.personal.map((x) => x);
    // } else {
    //   // data = localStorage.getItem("business");
    //   return this.state.business.map((x) => x);
    // }
    return this.state.show_personal ? this.state.personal : this.state.business;
  };

  validate() {
    const { name, mobile, addrs, city, states, zip, type } = this.state;

    if (
      validateName(name) === "" &&
      validateMobile(mobile) === "" &&
      validateAddress(addrs) === "" &&
      validateCity(city) === "" &&
      validateStates(states) === "" &&
      validateZip(zip) === "" &&
      type !== ""
    ) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        {/*write your code here for displaying details*/}
        <div className="App">
          <button className="add" onClick={() => this.setState({ show: true })}>
            Add
          </button>

          <h2 className="App-header">Adress Book</h2>

          <table>
            <tbody>
              <tr className="buttons">
                <th
                  name="Personal"
                  onClick={() => this.setState({ show_personal: true })}
                >
                  Personal
                </th>
                <th
                  name="Business"
                  onClick={() => this.setState({ show_personal: false })}
                >
                  Business
                </th>
              </tr>
              <tr>
                <td>Name</td>
                <td>Mobile No.</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip</td>
                <td>Present/Permanent Address</td>
              </tr>
              {this.getData().length > 0 ? (
                this.getData().map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.mobile}</td>
                    <td>{row.addrs}</td>
                    <td>{row.city}</td>
                    <td>{row.states}</td>
                    <td>{row.zip}</td>
                    <td>{row.type}</td>
                  </tr>
                ))
              ) : this.state.show_personal ? (
                <h3>No personal records to display</h3>
              ) : (
                <h3>No business records to display</h3>
              )}
              {/* {this.state.show_personal && this.state.personal.length > 0 ? (
                this.state.personal.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.mobile}</td>
                    <td>{row.addrs}</td>
                    <td>{row.city}</td>
                    <td>{row.states}</td>
                    <td>{row.zip}</td>
                    <td>{row.type}</td>
                  </tr>
                ))
              ) : (
                <h3>No personal recordesfound</h3>
              )} */}
              {/* <TableRows
                data={
                  this.state.show_personal
                    ? this.state.personal
                    : this.state.business
                }
              /> */}
            </tbody>
          </table>
        </div>

        <div className={this.state.show ? "bg" : ""}>
          <Modal>
            {this.state.show && (
              <>
                <div className="pop">
                  <form onSubmit={this.handleSave}>
                    <h3>Fill adress Details</h3>
                    <button className="close" onClick={this.onClose}>
                      x
                    </button>

                    <div className="radio">
                      <input
                        type="radio"
                        id="Personal"
                        name="checked"
                        value="Personal"
                        checked={this.state.checked === "Personal"}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Personal">Personal</label>

                      <input
                        type="radio"
                        id="Business"
                        name="checked"
                        value="Business"
                        checked={this.state.checked === "Business"}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="Business">Business</label>
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

                          <label htmlFor="mobile">Mobile No.</label>
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
                            id="Present"
                            name="type"
                            value="Present"
                            checked={this.state.type === "Present"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="Present">Present</label>

                          <input
                            type="radio"
                            id="Permanent"
                            name="type"
                            value="Permanent"
                            checked={this.state.type === "Permanent"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="Permanent">Permanent</label>

                          <input
                            type="radio"
                            id="Both"
                            name="type"
                            value="Both"
                            checked={this.state.type === "Both"}
                            onChange={this.handleChange}
                          ></input>
                          <label htmlFor="Both">Both</label>
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
