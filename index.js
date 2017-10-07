import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import db, { MODE_TEST, MODE_PRODUCTION } from './helpers/db';
import apiRouter from './routers/api';
import userRouter from './routers/User';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Request logging
app.use(morgan('dev'));

// Connect to MySQL on start
db.connect(MODE_TEST, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  } else {
    // namespaced routes
    app.use('/api', apiRouter);
    app.use('/auth', userRouter);

    // Define the port we are listening on
    app.listen(3001, () => {
      console.log('Listening on port 3001...');
    });
  }
});
