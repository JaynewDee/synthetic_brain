export const SetKeyHandler = (authHandler) => async (key) => {
  const { hash, writePassword } = authHandler();
  await writePassword(await hash(key));
  await ValidateKey(authHandler);
};

export const ValidateKey = async (authHandler) => {
  const { readPassword, compare } = authHandler();
  const encrypted = await readPassword();
  const hash = encrypted.toString();
  return await compare(process.env.OPENAI_API, hash);
};
