# throttleneck (basic wondershaper wrapper for NPM/Node)

## A very basic NPM wrapper to call wondershaper from NPM scripts.

### Overview

Can be used to throttle outgoing/incoming egress of network adapters. Intended to be used with various network setups for local throttling and debugging/development purposes. 

For example, you could [set up Internet Connection Sharing](https://support.apple.com/kb/ph25327?locale=en_US) and then throttle the resulting wireless connection. This would enable bandwidth testing of devices connected to your local wireless connection. 


[see wondershaper for more info](https://github.com/magnific0/wondershaper)

## throttleneck quickstart

1. list available ethernet adapters
`npm run ./node_modules/throttleneck/list-adapters`
or use 
`ifconfig`
2. throttle egress - outgoing(upload) or incoming(download) or both
`npm run ./node_modules/throttleneck/shape --KBPS_UP=500 --KBPS_DOWN=500`

3. create your own shortcut commands, e.g., 
`"scripts": {`
    `"throttle-150": "npm run shape --KBPS_DOWN=150 --KBPS_UP=0"`
  `}`