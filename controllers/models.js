import { modelChoicePrompt } from "../ui/index.js";
import { Configuration, OpenAIApi } from "openai";

const URL_BASE = "https://openai.com/v1/models";

export const ListModelsHandler = async () => {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API
  });
  const oai = new OpenAIApi(config);
  const response = await oai.listModels();
  console.log(response.data);
};

export const SetModelHandler = async () => {
  const modelId = await modelChoicePrompt();
  console.log(modelId);
};
