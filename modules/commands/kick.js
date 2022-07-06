module.exports.config = {
    name: "kick",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag hoặc reply",
    commandCategory: "Nhóm",
    usages: "[tag/reply/all]",
    cooldowns: 0
};

module.exports.run = async function ({
    args,
    api,
    event,
    Threads
}) {
    var {
        participantIDs
    } = (await Threads.getData(event.threadID)).threadInfo;
    const botID = api.getCurrentUserID();
    try {
        if (args.join().indexOf('@') !== -1) {
            var mention = Object.keys(event.mentions);
            for (let o in mention) {
                setTimeout(() => {
                    return api.removeUserFromGroup(mention[o], event.threadID)
                }, 1000)
            }
        } else {
        if (event.type == "message_reply") {
                uid = event.messageReply.senderID
                return api.removeUserFromGroup(uid, event.threadID)
            } else {
                if (!args[0]) return api.sendMessage(`[🐧] 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗮̂̀𝗻 𝗸𝗶𝗰𝗸`, event.threadID, event.messageID)
                else {
                    if (args[0] == "all") {
                        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
                        for (let idUser in listUserID) {
                            setTimeout(() => {
                                return api.removeUserFromGroup(idUser, event.threadID)
                            }, 1000)
                        }
                    }
                }
            }
        }
    } catch {
        return api.sendMessage('𝐜𝐜𝐜', event.threadID, event.messageID);
    }
}