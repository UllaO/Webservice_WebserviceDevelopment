exports.ChatModel = (sequelize, DataTypes) => {
    const Chat = sequelize.define(
        "chat",
        {
            message: {
                type: DataTypes.STRING,
                field: "message"
            }
        }
    )
 
    return Chat
 }
 