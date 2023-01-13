import { modelChoicePrompt, exchangePrompt } from "../ui/index.js";

const KeyNotFoundErr =
  () => `API Key not found.  A personal API key is required to interface with an AI engine.
Visit https://openai.com/api/ to generate a personal API key,
then run the command 'synth set-key <your_api_key>' to register your key with synth-brain.`;

export const SetModelHandler = (AI) => async () => {
  const { setEngine } = AI();
  const { model } = await modelChoicePrompt();
  model ? setEngine(model) : console.log(`Unrecognized AI engine.`);
};

export const DescribeEngine = (AI) => async () => {
  const { engine, readPassword, config } = AI();

  const validKey = await readPassword();

  const response = validKey
    ? await config(validKey).retrieveModel(engine)
    : `${engine} is not a valid AI id.`;

  typeof response === "string"
    ? console.log(response)
    : console.log(response.data);
};

export const ExchangeHandler = (AI) => async () => {
  const { readPassword, config, template, delay, translateModel } = AI();

  const validKey = await readPassword();

  const makeExchange = async (key) => {
    if (!key) return `API Key Invalid`;

    const { prompt } = await exchangePrompt();
    const translation = translateModel(prompt);
    console.log(translation);
    const translated = template(translation);
    console.log(translated);
    const options = translated.textCompletion;
    console.log(options);
    const response = await config(validKey).createCompletion(options);

    console.log(response.data.choices[0].text);
    await delay(3000);
    makeExchange(key);
  };
  makeExchange(validKey);
};
