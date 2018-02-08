const chalk = require('chalk');
const ip = require('ip');

const log = console.log;
const error = console.error;
const warn = console.warn;

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
module.exports = {

  // Called whenever there's an warning on the server we want to print
  warn: (err) => {
    warn(chalk.orange(err));
  },

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    log(`Server started ! ${chalk.green('✓')}`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
(tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};
