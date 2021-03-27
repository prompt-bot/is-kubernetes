#!/usr/bin/env node
'use strict';
const isKubernetes = require('.');

process.exitCode = isKubernetes() ? 0 : 1;