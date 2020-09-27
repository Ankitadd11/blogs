 
/*
  * Created By : Ankita Solace
  * Created Date : 26-09-2020
  * Purpose : server running
*/

  var   express = require('express'),
        http = require('http');
  const bodyParser = require('body-parser'),
        conn = require("./conn");
        global.conn = conn;
   var UsersRouter = require("./api/routes/articles");

   var app = express();
          app.use(bodyParser.text({type: 'application/json'}));
      app.use(bodyParser.json({limit: '50mb'}));
      app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
       app.use('/', UsersRouter );

  let data = http.createServer(app);
      data.listen(4100, () => {
    	     console.log('now listening for requests on port 4100');
    	     console.log("access web url:-  http://localhost:4100/");
    });

