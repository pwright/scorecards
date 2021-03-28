#!/usr/bin/env node

var fs = require('fs')
  , ini = require('ini')

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))

console.log(config.doc.source_dir)