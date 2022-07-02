module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",//beta
  credits: "ProCoderCyrus",
  description: "Chống đổi biệt danh của Bot"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `[🐧] ${info.name} 𝘁𝘂𝗼̂̉𝗶 𝗰𝗮̣̆𝗰 đ𝗼̀𝗶 đ𝗼̂̉𝗶 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗯𝗼𝘁 𝘁𝗮𝗼 𝗵𝗲𝗵𝗲`}, threadID);
    }  
}
