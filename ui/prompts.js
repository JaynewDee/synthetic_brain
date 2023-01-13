const models = [
  {
    type: "list",
    name: "model",
    message: "Choose a Model:",
    choices: ["davinci", "curie", "babbage", "ada"]
  }
];

const exchange = [
  {
    type: "input",
    name: "prompt",
    prefix: ">",
    message: "Input a prompt to send to your engine:"
  }
];
export { models, exchange };
