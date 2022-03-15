//Write your validations here
export const validateName = (name) => {
  if (name === "") {
    return "Please enter a value";
  }
  const pattern = /[^a-zA-Z]+/;
  const result = name.match(pattern);
  return result ? "Characters from a-z/A-Z allowed" : "";
};

export const validateMobile = (mobile) => {
  let error_msg = "";
  const pattern = /[^0-9]+/;
  const result = mobile.match(pattern);

  if (mobile === "") {
    error_msg = "Please enter a value";
  } else if (result) {
    error_msg = "Please enter numeric value";
  } else if (mobile.length !== 10) {
    error_msg = "Please enter a valid 10 digit mobile number";
  } else {
    error_msg = "";
  }

  return error_msg;
};

export const validateAddress = (addrs) => {
  let error_msg = "";
  const pattern = /(\b\S+.*?){3,}/.test(addrs);

  if (addrs === "") {
    error_msg = "Please enter a value";
  } else if (!pattern) {
    error_msg = "Address should have a lenght of atleast 3 words";
  } else {
    error_msg = "";
  }

  return error_msg;
};

export const validateCity = (city) => {
  if (city === "") {
    return "Please enter a value";
  }
  const pattern = /[^a-zA-Z]+/;
  const result = city.match(pattern);
  return result ? "Characters from a-z/A-Z allowed" : "";
};

export const validateStates = (state) => {
  if (state === "") {
    return "Please enter a value";
  }
  const pattern = /[^a-zA-Z ]+/;
  const result = state.match(pattern);
  return result ? "Characters from a-z/A-Z allowed" : "";
};

export const validateZip = (zip) => {
  let error_msg = "";
  const pattern = /[^0-9]+/;
  const result = zip.match(pattern);

  if (zip === "") {
    error_msg = "Please enter a value";
  } else if (result) {
    error_msg = "Please enter numeric value";
  } else if (zip.length !== 6) {
    error_msg = "Please enter a valid 6 digit zip pin";
  } else {
    error_msg = "";
  }

  return error_msg;
};
