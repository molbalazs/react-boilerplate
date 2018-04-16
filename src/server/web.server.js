const express = require('express');

export default class WebServer {
  constructor() {
    this.app = express();
  }
  
  start() {
    const port = process.env.PORT || 3000;
    this.app.use(express.static('dist/public'));
    
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(port, () => {
          console.log("Express server listening on port " + port);
          resolve();
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        console.error(e.message)
        reject(e)
      }
    })
  }
}