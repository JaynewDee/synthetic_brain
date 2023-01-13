import { DescribeEngine, ExchangeHandler } from "./engines.js";
import { ConfigHandler } from "./auth.js";
import { AIHandler, Config } from "../lib/index.js";

export const handlers = [
  ConfigHandler(Config),
  DescribeEngine(AIHandler),
  ExchangeHandler(AIHandler)
];
