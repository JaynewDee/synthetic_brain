import { writeFile, readFile } from "node:fs/promises";
import { tmpdir } from "os";
import { sep } from "path";

// TODO:
// 1. Check tempdir for config file
// 2. If not present, assume first-time user
// 3. Store api key as braincage.json

const KEY_PATH = tmpdir() + sep + "braincage.json";

const readPassword = async () => await readFile(KEY_PATH);
const writeConfig = async (keyData) => await writeFile(KEY_PATH, keyData);

export const IO = () => ({
  readPassword,
  writeConfig
});
