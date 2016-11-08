'use strict';

const appRoot = require('app-root-path').path;
const path = require('path');
const exec = require('child_process').exec;
const chalk = require('chalk');

module.exports = function(rmPath) {
  return new Promise((resolve, reject) => {
    exec(`rm -rf ${path.join(appRoot, rmPath)}`, (error, stdout, stderr) => {
      console.log(rmPath);
      if (error) {
        console.log('error');
        console.log(stderr);
        reject({
          error: 1,
          messgae: stderr
        });
      } else {
        console.log(`Deleted ${chalk.cyan(rmPath)}`);
        resolve({
          error: 0
        });
      }
    });
  });
};
