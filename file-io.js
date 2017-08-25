#!/usr/bin/env node

const { readFileSync } = require('fs');

console.log(String(readFileSync(process.argv[2])));