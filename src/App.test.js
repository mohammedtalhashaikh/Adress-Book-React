import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Modal from "./component/modal";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  var component;
  let wrapper;

  beforeEach(() => {
    component = shallow(<App />);

    wrapper = shallow(<Modal />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Display element check", () => {
    const personal = [
      {
        name: "sample",
        mobile: "1234567890",
        addrs: "a a a",
        city: "chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ];

    const business = [
      {
        name: "cool",
        mobile: "1234567890",
        addrs: "a a a",
        city: "chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Both",
      },
    ];

    component.instance().setState({ personal });
    component.instance().setState({ business });
    expect(component.find(".App")).toHaveLength(1);
    expect(component.find(".App-header")).toHaveLength(1);
    expect(component.find("h2").text()).toBe("Adress Book");
    expect(component.find("table")).toHaveLength(1);
    expect(
      component.find("table").find("tbody").find(".buttons").find("th").at(0)
    ).toHaveLength(1);
    expect(
      component
        .find("table")
        .find("tbody")
        .find(".buttons")
        .find("th")
        .at(0)
        .text()
    ).toBe("Personal");

    let personal_click = component
      .find("table")
      .find("tbody")
      .find(".buttons")
      .find("th")
      .at(0);
    personal_click.simulate("click");
    expect(component.state().show_personal).toBe(true);

    expect(
      component
        .find("table")
        .find("tbody")
        .find(".buttons")
        .find("th")
        .at(1)
        .text()
    ).toBe("Business");

    let business_click = component
      .find("table")
      .find("tbody")
      .find(".buttons")
      .find("th")
      .at(1);
    business_click.simulate("click");
    expect(component.state().show_personal).toBe(false);

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(0)
        .text()
    ).toBe("Name");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(1)
        .text()
    ).toBe("Mobile No.");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(2)
        .text()
    ).toBe("Address");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(3)
        .text()
    ).toBe("City");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(4)
        .text()
    ).toBe("State");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(5)
        .text()
    ).toBe("Zip");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(1)
        .find("td")
        .at(6)
        .text()
    ).toBe("Present/Permanent Address");

    //Business map check
    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(0)
        .text()
    ).toBe("Cool");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(1)
        .text()
    ).toBe("1234567890");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(2)
        .text()
    ).toBe("a a a");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(3)
        .text()
    ).toBe("Chennai");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(4)
        .text()
    ).toBe("Tamil Nadu");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(5)
        .text()
    ).toBe("123456");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(6)
        .text()
    ).toBe("Both");

    component.instance().setState({ business: {} });
    expect(component.find("table").find("tbody").find("h3").text()).toBe(
      "No business records to display"
    );

    //Personal map check

    personal_click.simulate("click");
    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(0)
        .text()
    ).toBe("Sample");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(1)
        .text()
    ).toBe("1234567890");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(2)
        .text()
    ).toBe("a a a");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(3)
        .text()
    ).toBe("Chennai");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(4)
        .text()
    ).toBe("Tamil Nadu");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(5)
        .text()
    ).toBe("123456");

    expect(
      component
        .find("table")
        .find("tbody")
        .find("tr")
        .at(2)
        .find("td")
        .at(6)
        .text()
    ).toBe("Present");

    component.instance().setState({ personal: [] });
    expect(component.find("table").find("tbody").find("h3").text()).toBe(
      "No personal recordes to dislay"
    );
  });

  it("Add button and model check", () => {
    const add = component.find(".add");
    add.simulate("click");
    expect(component.state().show).toBe(true);
    expect(component.find("Modal")).toHaveLength(1);
    expect(component.find(".bg")).toHaveLength(1);
    expect(component.find(".pop")).toHaveLength(1);
    expect(component.find("h3").at(0).text()).toBe("Fill adress Details");
    component
      .find(".radio")
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "checked", value: "Personal" } });
    expect(component.state().checked).toBe("Personal");

    component
      .find(".radio")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "checked", value: "Business" } });
    expect(component.state().checked).toBe("Business");

    //Proper value check

    component
      .find(".fields")
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "sample" } });
    expect(component.state().name).toBe("sample");

    component
      .find(".fields")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "mobile", value: "1234567890" } });
    expect(component.state().mobile).toBe("1234567890");

    component
      .find(".fields")
      .find("textarea")
      .simulate("change", {
        target: { name: "addrs", value: "sample data given" },
      });
    expect(component.state().addrs).toBe("sample data given");

    component
      .find(".fields")
      .find("input")
      .at(2)
      .simulate("change", { target: { name: "city", value: "sample city" } });
    expect(component.state().city).toBe("sample city");

    component
      .find(".fields")
      .find("input")
      .at(3)
      .simulate("change", {
        target: { name: "states", value: "sample states" },
      });
    expect(component.state().states).toBe("sample states");

    component
      .find(".fields")
      .find("input")
      .at(4)
      .simulate("change", { target: { name: "zip", value: "123456" } });
    expect(component.state().zip).toBe("123456");

    component
      .find(".radios")
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "checked", value: "Present" } });
    expect(component.state().type).toBe("Present");

    component
      .find(".radios")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "checked", value: "Permanent" } });
    expect(component.state().type).toBe("Permanent");

    component
      .find(".radios")
      .find("input")
      .at(2)
      .simulate("change", { target: { name: "checked", value: "Both" } });
    expect(component.state().type).toBe("Both");

    //validation check
    component
      .find(".fields")
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "" } });
    expect(component.state().name_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "5" } });
    expect(component.state().name_error).toBe(
      "Characters from a-z/A-Z allowed"
    );

    component
      .find(".fields")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "mobile", value: "" } });
    expect(component.state().mobile_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "mobile", value: "h" } });
    expect(component.state().mobile_error).toBe("Please enter numeric value");

    component
      .find(".fields")
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "mobile", value: "123456789" } });
    expect(component.state().mobile_error).toBe(
      "Please enter a valid 10 digit mobile number"
    );

    component
      .find(".fields")
      .find("textarea")
      .simulate("change", { target: { name: "addrs", value: "" } });
    expect(component.state().addrs_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("textarea")
      .simulate("change", { target: { name: "addrs", value: "sample" } });
    expect(component.state().addrs_error).toBe(
      "Address should have a length of atleast 3 words"
    );

    component
      .find(".fields")
      .find("input")
      .at(2)
      .simulate("change", { target: { name: "city", value: "" } });
    expect(component.state().city_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("input")
      .at(2)
      .simulate("change", { target: { name: "city", value: "5" } });
    expect(component.state().city_error).toBe(
      "Characters from a-z/A-Z allowed"
    );

    component
      .find(".fields")
      .find("input")
      .at(3)
      .simulate("change", { target: { name: "states", value: "" } });
    expect(component.state().states_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("input")
      .at(3)
      .simulate("change", { target: { name: "states", value: "5" } });
    expect(component.state().states_error).toBe(
      "Characters from a-z/A-Z allowed"
    );

    component
      .find(".fields")
      .find("input")
      .at(4)
      .simulate("change", { target: { name: "zip", value: "" } });
    expect(component.state().zip_error).toBe("Please enter a value");

    component
      .find(".fields")
      .find("input")
      .at(4)
      .simulate("change", { target: { name: "zip", value: "h" } });
    expect(component.state().zip_error).toBe("Please enter numeric value");

    component
      .find(".fields")
      .find("input")
      .at(4)
      .simulate("change", { target: { name: "zip", value: "" } });
    expect(component.state().zip_error).toBe(
      "Please enter a valid 6 digit zip pin"
    );

    //Clear
    const clear = component.find(".clear");
    clear.simulate("click");
    expect(component.state().name).toBe("");
    expect(component.state().name_error).toBe("");
    expect(component.state().mobile).toBe("");
    expect(component.state().mobile_error).toBe("");
    expect(component.state().addrs).toBe("");
    expect(component.state().addrs_error).toBe("");
    expect(component.state().states).toBe("");
    expect(component.state().states_error).toBe("");
    expect(component.state().city).toBe("");
    expect(component.state().city_error).toBe("");
    expect(component.state().zip).toBe("");
    expect(component.state().zip_error).toBe("");
    expect(component.state().checked).toBe("");
    expect(component.state().type).toBe("");

    //Add
    component.instance().setState({
      checked: "Business",
      name: "sample",
      mobile: "123456",
      addrs: "a aa aaa",
      city: "sample",
      states: "sample",
      type: "Present",
      zip: "2222",
      name_error: "",
      mobile_error: "",
      addrs_error: "",
      city_error: "",
      states_error: "",
      zip_error: "",
    });

    const onSubmit = component.find(".save");
    onSubmit.simulate("click");
    expect(component.state().show).toBe(false);
    expect(component.state().show_personal).toBe(false);

    add.simulate("click");

    component.instance().setState({
      checked: "Personal",
      name: "sample",
      mobile: "123456",
      addrs: "a aa aaa",
      city: "sample",
      states: "sample",
      type: "Present",
      zip: "2222",
      name_error: "",
      mobile_error: "",
      addrs_error: "",
      city_error: "",
      states_error: "",
      zip_error: "",
    });

    const save = component.find(".save");
    save.simulate("click");
    expect(component.state().show).toBe(false);
    expect(component.state().show_personal).toBe(true);

    //Modal close
    add.simulate("click");
    const close = component.find(".close");
    close.simulate("click");
    expect(component.state().show).toBe(false);
    expect(component.state().show_personal).toBe(true);
    expect(component.state().name).toBe("");
    expect(component.state().name_error).toBe("");
    expect(component.state().mobile).toBe("");
    expect(component.state().mobile_error).toBe("");
    expect(component.state().addrs).toBe("");
    expect(component.state().addrs_error).toBe("");
    expect(component.state().states).toBe("");
    expect(component.state().states_error).toBe("");
    expect(component.state().city).toBe("");
    expect(component.state().city_error).toBe("");
    expect(component.state().zip).toBe("");
    expect(component.state().zip_error).toBe("");
    expect(component.state().checked).toBe("");
    expect(component.state().type).toBe("");
  });

  it("Modal component check", () => {
    expect(wrapper.find("div").at(0)).toHaveLength(1);
    expect(wrapper.find("div").at(1)).toHaveLength(1);
  });
});
