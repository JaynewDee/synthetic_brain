import { AI } from "./ai.js";
import { Encryption } from "./encryption.js";
import { IO } from "./files.js";

export const Config = () => ({
  ...IO(),
  ...Encryption()
});

export const AIHandler = () => ({
  ...Auth(),
  ...AI()
});
