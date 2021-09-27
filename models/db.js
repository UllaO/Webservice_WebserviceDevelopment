var Sequelize = require('sequelize')
var ChatModel = require('./chat-model').ChatModel

const sequelize = new Sequelize(
   process.env.DATABASE,
   process.env.DATABASE_USER,
   process.env.DATABASE_PASSWORD,
   {
       dialect: 'postgres',
   }
)

const Chat = ChatModel(sequelize, Sequelize)

module.exports = { sequelize, Sequelize }
