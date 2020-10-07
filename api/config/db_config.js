
const mongoose = require('mongoose');

const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'MainCluster';

// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@maincluster.zlopa.gcp.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {useNewUrlParser: true});
const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@maincluster-shard-00-00.zlopa.gcp.mongodb.net:${MONGO_PORT},maincluster-shard-00-01.zlopa.gcp.mongodb.net:${MONGO_PORT},maincluster-shard-00-02.zlopa.gcp.mongodb.net:${MONGO_PORT}/${MONGO_DB}?ssl=true&replicaSet=atlas-12imrg-shard-0&authSource=admin&retryWrites=true&w=majority`;
module.exports = uri;
