const moment = require('moment');
const OSC = require('osc-js');

const PORT = 9912;
const options = {
  open: {
    host: 'localhost',
    port: PORT
  }
};
const osc = new OSC({ plugin: new OSC.DatagramPlugin(options) });

osc.on('open', () => {
  const banner = `
 █████ █████          █████
░░███ ░░███          ░░███
 ░░███ ███    ██████  ░███████   ████████
  ░░█████    ███░░███ ░███░░███ ░░███░░███
   ███░███  ░███ ░░░  ░███ ░███  ░███ ░███
  ███ ░░███ ░███  ███ ░███ ░███  ░███ ░███
 █████ █████░░██████  ████ █████ ████ █████
░░░░░ ░░░░░  ░░░░░░  ░░░░ ░░░░░ ░░░░ ░░░░░

  `;
  for (let i=0; i < 100; i++) {
    console.log('\n');
  }
  console.log(banner);
});

osc.on('/currentTrack', (message) => {
  const info = message.args[0];
  const now = moment().format('h:mm:ss');
  console.log(`${now} | ${info}`);
});

osc.open({ port: PORT });
