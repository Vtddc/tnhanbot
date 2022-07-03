module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "DungUwU",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đuổi";
    if (type == "tự rời") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`[🐧] 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 [🐧]\n 𝗞𝗵𝗼̂𝗻𝗴 𝗺𝗼̛̀𝗶 𝗹𝗮̣𝗶 đ𝘂̛𝗼̛̣𝗰 đ𝘂̛́𝗮 𝘁𝗵𝗶́𝗰𝗵 𝗼𝘂𝘁 𝗰𝗵𝘂̀𝗮 ${name} 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 :( `, event.threadID)
            } else api.sendMessage(`[🐧] 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 [🐧]\n Đ𝗮̃ 𝗺𝗼̛̀𝗶 𝗹𝗮̣𝗶  ${name} 𝗹𝗮̀ đ𝘂̛́𝗮 𝘁𝗵𝗶́𝗰𝗵 𝗼𝘂𝘁 𝗰𝗵𝘂̀𝗮. 𝗖𝗵𝘂𝗮̂̉𝗻 𝗯𝗶̣ 𝘁𝗶𝗻𝗵 𝘁𝗵𝗮̂̀𝗻 đ𝗶 🥲`, event.threadID);
        })
    }
}
