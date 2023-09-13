import mongoose from 'mongoose';
import { config } from './config/index';

const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `mongodb+srv://cluster_all_restaurants:${PASSWORD}@clustert-w9prd.mongodb.net/test?retryWrites=true&w=majority`;
// const URI_LOCAL = `mongodb://127.0.0.1:27017/?snappy=disabled&gssapiServiceName=mongodb`;

mongoose.connect(URI).catch(console.error);

export const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected in Mongo-Atlas');
});
