// @flow
import mongoose from "mongoose";
import log4js from "log4js";
import {
    MONGODB_DB,
    MONGODB_PORT,
    MONGODB_PWD,
    MONGODB_URL,
    MONGODB_USER
} from "../config/config";

const log = log4js.getLogger("MONGODB_CONNECTION");
const internalConnectionPool = {};

const options = {
    server: { poolSize: 5 },
    user: MONGODB_USER,
    pass: MONGODB_PWD
};

const address = `mongodb://${MONGODB_URL}:${MONGODB_PORT}/${MONGODB_DB}`;

const connect = () => {
    return new Promise((resolve, reject) => {
        if (!internalConnectionPool[address]) {
            const conn = mongoose.createConnection(address, options, err => {
                if (err) {
                    log.error(err);
                    reject(err);
                } else {
                    internalConnectionPool[address] = conn;
                    resolve(internalConnectionPool[address]);
                }
            });
        } else {
            resolve(internalConnectionPool[address]);
        }
    });
};

export default connect;
