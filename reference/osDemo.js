const os = require('os');

// Change to this dir and run node osDemo to see output
// cd reference && node osDemo

// Platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime (in seconds)
console.log(os.uptime());
