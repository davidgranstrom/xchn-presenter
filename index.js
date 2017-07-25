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
  console.log(`Started osc server listening on port ${PORT}`);
});

osc.on('/currentTrack', (message) => {
  const info = message.args[0];
  const now = moment().format('h:mm:ss');
  console.log(`${now} | ${info}`);
});

osc.open({ port: PORT });
