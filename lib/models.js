import { Configuration, OpenAIApi } from "openai";

const configuration = (key) => ({
  config: new OpenAIApi(
    new Configuration({
      apiKey: key
    })
  )
});
const DaVinci = (prompt) => {};

const Curie = (prompt) => {};

const Babbage = (prompt) => {};

const Ada = (prompt) => {};
