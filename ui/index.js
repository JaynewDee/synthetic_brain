import { models, exchange } from "./prompts.js";
import inquirer from "inquirer";
const { prompt } = inquirer;

const modelChoicePrompt = async () => await prompt(models);
const exchangePrompt = async () => await prompt(exchange);

export { modelChoicePrompt, exchangePrompt };
