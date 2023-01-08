import { Command } from "commander";

import { handlers } from "../controllers/index.js";

const [handleListModels, handleSetModel, handleSetKey] = handlers;

const PROGRAM_NAME = "SYNTHETIC";

const program = new Command()
  .name(PROGRAM_NAME.toLowerCase())
  .version("1.0.0")
  .description(PROGRAM_NAME);

const Cmnd = (cmndName, description, action) => (program) =>
  program.command(cmndName).description(description).action(action);

const [ListModels, SetModel, SetKey] = [
  Cmnd(
    "get-models",
    "Retrieve a list of available ai models",
    handleListModels
  ),
  Cmnd("set-model", "Choose from a list of available models", handleSetModel),
  Cmnd(
    "set-key <api_key>",
    "Set your api key with bcrypt encryption",
    handleSetKey
  )
].map((fn) => fn(program));

export default program;
