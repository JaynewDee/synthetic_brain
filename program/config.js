export const StageEnv = (env) => {
  env.foo = "bar";
};
export const Listen = () => {
  process.on("SIGINT", () => process.exit(0));
};
