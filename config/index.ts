import dotenv from 'dotenv'
dotenv.config()

// export const config = {
//   dev: process.env.NODE_ENV !== "production",
//   port: process.env.PORT,
//   cors: process.env.CORS,
//   dbUser: process.env.DB_USER,
//   dbPassword: process.env.DB_PASSWORD,
//   dbHost: process.env.DB_HOST,
//   dbName: process.env.DB_NAME,
// };

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: 3000,
  cors: '*',
  dbUser: 'cluster_all_restaurants',
  dbPassword: 'FUfs1NyujpRDyN5g',
  dbHost: 'mongodb+srv:',
  dbName: 'restaurants_db'
}
