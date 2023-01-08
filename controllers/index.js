import { ListModelsHandler, SetModelHandler } from "./models.js";
import { SetKeyHandler } from "./auth.js";
import { AuthHandler } from "../lib/files.js";

export const handlers = [
  ListModelsHandler,
  SetModelHandler,
  SetKeyHandler(AuthHandler)
];
