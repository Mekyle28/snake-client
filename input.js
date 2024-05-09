const { write } = require("fs");

// stores the active TCP connection object
let connection;

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
  // deals with snake movement
  switch (key) {
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    default:
    // don't want it to do anything if other keys are pressed
  }
};



// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
