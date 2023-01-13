import { Buffer } from "node:buffer";
const { randomBytes, createCipheriv, createDecipheriv, scryptSync } =
  await import("node:crypto");

const algorithm = "aes-256-cbc";
const generator = "kjkdifoyqweorjv";

const encrypt = (plainKey) => {};

const decrypt = (encrypted) => {};

export const Encryption = () => ({
  encrypt,
  decrypt
});
