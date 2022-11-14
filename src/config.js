require('dotenv').config();

const staticAssets = {
    development: {
        path: 'cluentDev/',
    },
    production: {
        path: 'client/'
    },
};

const connections = {
    development: {
        http: {
            port: process.env.PORT || process.env.NODE_PORT || 3000,
        },
        mongo: process.env.MONGODB_URI || 'mongodb://localhost/configExample',
        redis: process.env.REDISCLOUD_URI,
    },
    production: {
        http: {
            port: process.env.PORT || process.env.NODE_PORT || 3000,
        },
        mongo: process.env.MONGODB_URI,
        redis: process.env.REDISCLOUD_URI,
    },
}

module.exports = {
    staticAssets: staticAssets[process.env.NODE_ENV],
    connections: connections[process.env.NODE_ENV],
    secret: process.env.SECRET,
}
