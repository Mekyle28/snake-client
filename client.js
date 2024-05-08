
const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: "localhost",
      port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    // data event listener, console.logs any data the server sends.
    conn.on("data", (data) => {
      console.log("Server says: ", data);
    });
  
    // a callback that runs once a conection has been established
    conn.on("connect", () => {
      console.log("you are connected! happy hunting :)")
    });
  
    return conn;
  };

  module.exports = connect;