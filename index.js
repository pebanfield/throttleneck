const shellExec = require('shell-exec');
 
//get command line args, e.g., --KBPS_UP=500
let args = {};
process.argv.forEach(arg => 
    args[arg.split('=')[0]] = arg.split[1]);
    
//validate args
if (!args.KBPS_DOWN && !args.KBPS_UP) {
  console.error('Missing throttle args : KBPS_DOWN or KBPS_UP');
} 

//execute throttle
shellExec('sudo ./util/wondershaper/wondershaper -a en0 ' + args.KBPS_DOWN)
  .then(console.log)
  .catch(console.log)