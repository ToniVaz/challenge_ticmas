import mongoose from 'mongoose';
import { config } from './config/index';

const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `mongodb+srv://cluster_all_restaurants:${PASSWORD}@clustert-w9prd.mongodb.net/test?retryWrites=true&w=majority`;

beforeEach(async () => {
  await mongoose.connect(URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});
