// export getConnection functiuon
const keys = require("../config/keys");

function getConnectionString() {

    const env = process.env.NODE_ENV || "development";

    if (env == "development") {
        return keys.mongodb.localString;
    } else if (env == "production") {
        return keys.mongodb.remoteString;
    }

}

module.exports = getConnectionString;