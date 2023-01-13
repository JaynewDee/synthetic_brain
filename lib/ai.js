export const AI = (engine = "curie") => ({
  engine,
  setEngine: (chosenEngine) => (engine = chosenEngine),
  template: (prompt) => ({
    textCompletion: {
      model: engine,
      prompt,
      temperature: 0,
      max_tokens: 100
    }
  }),
  delay: (time) => new Promise((resolve) => setTimeout(resolve, time)),
  translateModel: (engine) => {
    const translation = {
      davinci: "text-davinci-003",
      curie: "text-curie-001",
      babbage: "text-babbage-001",
      ada: "text-ada-001"
    };
    return translation[engine];
  }
});
