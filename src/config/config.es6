// @flow
/*eslint no-process-env: 0, no-ternary: 0*/
export const MONGODB_URL = process.env.MONGODB_URL
    ? process.env.MONGODB_URL
    : "ds111940.mlab.com";
export const MONGODB_DB = process.env.MONGODB_DB
    ? process.env.MONGODB_DB
    : "portfolio";
export const MONGODB_USER = process.env.MONGODB_USER
    ? process.env.MONGODB_USER
    : "portfolio-public";
export const MONGODB_PWD = process.env.MONGODB_PWD
    ? process.env.MONGODB_PWD
    : "2706";
export const MONGODB_PORT = process.env.MONGODB_PORT
    ? process.env.MONGODB_PORT
    : 11940;
export const EXPRESS_PORT = process.env.EXPRESS_PORT
    ? process.env.EXPRESS_PORT
    : 3000;
