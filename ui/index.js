import { models } from "./prompts.js";
import inquirer from "inquirer";
const { prompt } = inquirer;

const modelChoicePrompt = async () => await prompt(models);

export { modelChoicePrompt };
