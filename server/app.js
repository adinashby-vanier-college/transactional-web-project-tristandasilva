import express, { response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { router as UserRouter } from './api/users.js';
import { router as ProductRouter } from './api/products.js';
import { router as CartRouter } from './api/carts.js';

import db from './config/db.js';

db();

const app = express();

process.on('uncaughtException', function (error) {
  console.log(error.stack);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(
  '/home/ubuntu/transactional-web-project-tristandasilva'
);

// to redirect frontend
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(
    path.join(
      __dirname +
        'transactional-web-project-tristandasilva/client/dist/index.html'
    )
  );
});

app.use(express.json());
// app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());

app.use('/users', UserRouter);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);
//app.use("/wishlist")

app.listen(process.env.PORT);
console.log('Server is listening on port ' + process.env.PORT);
console.log(__dirname);
console.log(path.join(__dirname, '../client/dist'));
