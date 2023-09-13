import mongoose from 'mongoose';
import { config } from './config/index';
import app from './index';

const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `mongodb+srv://cluster_all_restaurants:${PASSWORD}@clustert-w9prd.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Servidor escuchando en el puerto ${config.port}`);
    });
  })
  .catch(console.error);
