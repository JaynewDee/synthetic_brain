import { writeFile, readFile } from "node:fs/promises";
import { tmpdir } from "os";
import { sep } from "path";
import { Auth } from "./encryption.js";

const KEY_PATH = tmpdir() + sep + "key.json";
const readPassword = async () => await readFile(KEY_PATH);
const writePassword = async (key) => await writeFile(KEY_PATH, key);

export const AuthIO = () => ({
  readPassword,
  writePassword
});

export const AuthHandler = () => ({
  ...AuthIO(),
  ...Auth()
});
