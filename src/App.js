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
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.checked === "business") {
      this.setState({ show_personal: false });
    }
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
      data = localStorage.getItem("personal");
    } else {
      data = localStorage.getItem("business");
    }
    return data ? JSON.parse(data) : null;
  };

  render() {
    return (
      <div>
        {/*write your code here for displaying details*/}
        <div>
          <button className="add" onClick={() => this.setState({ show: true })}>
            Add
          </button>

          <h1 className="App-header">Address Book</h1>
          {console.log(this.getData())}

          <table>
            <tbody>
              <tr>
                <th>Personal</th>
                <th>Business</th>
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
                          <button
                            className="save"
                            disabled={false}
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
