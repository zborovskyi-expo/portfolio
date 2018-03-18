const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      port = 8000,
      routes = require('./routes'),
      app = express()

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

class Server {

  constructor(){
    this.initBodyParserMiddleware()
    this.initStaticFolder()
    this.initRoutes()
    this.start()
  }

  start(){
    app.set('port', (process.env.PORT || port));
    app.listen(app.get('port'), ()=>
      console.log('Server listening on port ' + app.get('port')))
  }

  initStaticFolder(){
    app.use(express.static(path.join(__dirname, '../app/client/dist/')));
  }

  initBodyParserMiddleware(){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  initRoutes(){

    // app.use((req, res, next) => {
    //   // Website you wish to allow to connect
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    //   //res.setHeader('Access-Control-Allow-Origin', 'https://stock-charts-app.herokuapp.com/');
    //
    //   // Request methods you wish to allow
    //   res.setHeader('Access-Control-Allow-Methods', 'POST');
    //
    //   // Request headers you wish to allow
    //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //
    //   // Set to true if you need the website to include cookies in the requests sent
    //   // to the API (e.g. in case you use sessions)
    //   res.setHeader('Access-Control-Allow-Credentials', true);
    //
    //   // Pass to next layer of middleware
    //   next();
    // });
    app.use('/', routes)
  }

}

new Server()
