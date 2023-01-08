import bcrypt from "bcrypt";

const hash = (plainTxt) => bcrypt.hash(plainTxt, 15);
const compare = (plainTxt, hash) => bcrypt.compare(plainTxt, hash);

export const Auth = () => ({
  hash,
  compare
});
