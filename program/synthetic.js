import { Command } from "commander";
import { TitleDecor } from "../lib/decor.js";
import { handlers } from "../controllers/index.js";

const [handleConfiguration, handleEngineDescribe, handleExchange] = handlers;

const PROGRAM_NAME = "SYNTH-BRAIN";

const program = new Command().name("synth").version("1.0.0").description(`
  ${TitleDecor(PROGRAM_NAME)}\n  
  Subdue the bully in your braincage.
`);

const Cmnd = (cmndName, description, action) => (program) =>
  program.command(cmndName).description(description).action(action);

[
  Cmnd("configure", "Encrypt and set your API Key", handleConfiguration),
  Cmnd(
    "describe",
    "Retrieve information about available engines",
    handleEngineDescribe
  ),
  Cmnd(
    "spinup",
    "Initiate an asynchronous prompt exchange with the chosen engine",
    handleExchange
  )
].map((fn) => fn(program));

export default program;
