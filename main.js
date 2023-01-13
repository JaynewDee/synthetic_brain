#!/usr/bin/env node

"use strict";

import program from "./program/synthetic.js";
import { env } from "node:process";
import { StageEnv, Listen } from "./program/config.js";

StageEnv(env);
Listen();

program.parse();
