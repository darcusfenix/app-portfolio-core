require('dotenv').config();
// @flow
/*eslint no-process-env: 0, no-ternary: 0*/
export const MONGODB_URL = process.env.MONGODB_URL || "localhost";
export const MONGODB_DB = process.env.MONGODB_DB || "db";
export const MONGODB_USER = process.env.MONGODB_USER || "user";
export const MONGODB_PWD = process.env.MONGODB_PWD || "root";
export const MONGODB_PORT = process.env.MONGODB_PORT || 11940;
export const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;
