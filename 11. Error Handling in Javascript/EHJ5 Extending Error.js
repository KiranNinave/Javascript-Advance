// note: hey this thing is super usefull :)

// most of the time we dont want to give too much information of errors to the ourside world
// in that case we can extends the error class to create our own errors that hide stack trace

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authentication error"; // we are chaning default name to our name
    this.errorcode = "200"; // we also can add our own properties
  }
}

try {
  throw new AuthenticationError("invalid password!");
} catch (error) {
  console.log(error.name, error.message, error.errorcode); // we can also access our own properties
}
