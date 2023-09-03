export class HttpError {
  //running training test in case default data is provided
  // constructor(statusCode, message, data = { key: 'value' }) {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class ValidationError {
  //running test if default message is provided
  // constructor(message = 'Hello Word!') {
  constructor(message) {
    this.message = message;
  }
}
