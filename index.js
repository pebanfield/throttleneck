const shellExec = require('shell-exec');
 
//get command line args, e.g., --KBPS_UP=500
let args = {};
process.argv.forEach(arg => 
    args[arg.split('=')[0]] = arg.split('=')[1]);
console.dir(args);
//validate args
if (!args.ANAME) {
  console.error('Missing ANAME arg');
}
if (!args.KBPS_DOWN && !args.KBPS_UP) {
  console.error('Missing throttle args : KBPS_DOWN or KBPS_UP');
} 

let commands = '';

if (args.CLEAR) {
  commands += ' -c '
}
if (args.STATUS) {
  commands += ' -s '
}

commands = '-a ' + args.ANAME;

if (args.KBPS_DOWN && args.KBPS_UP) {
  commands += ' -d ' + args.KBPS_DOWN + ' -u ' + args.KBPS_UP;
}

//execute throttle
shellExec('sudo ./util/wondershaper/wondershaper ' + commands)
  .then(console.log)
  .catch(console.log)