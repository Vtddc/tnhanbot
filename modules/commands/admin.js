module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team & chỉnh font chữ by tnhan",
//Chỉnh font chữ không phải là khó, nhưng cần sự kiên trì nên hãy tôn trọng công sức của tôi bỏ ra=))
	description: "Quản lý admin bot",
	commandCategory: "Hệ thống admin-bot",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": '[🐧] 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼𝘁: \n\n%1',
        "notHavePermssion": '[🐧] 𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻 đ𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 "%1"',
        "addedNewAdmin": '[🐧] Đ𝗮̃ 𝘁𝗵𝗲̂𝗺 %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗿𝗼̛̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼𝘁:\n\n%2',
        "removedAdmin": '[🐧] Đ𝗮̃ 𝗴𝗼̛̃ 𝗯𝗼̉ %1 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼𝘁:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name
                    msg.push(`- ${name}\nLINK: https://facebook.com/${idAdmin}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }

        case "add": {
            if (event.senderID != 1535220001
) return api.sendMessage(`[🐧] 𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢!`, event.threadID, event.messageID)
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ADMIN ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != 1535220001
) return api.sendMessage(`[🐧] 𝗤𝘂𝘆𝗲̂̀𝗻 𝗹𝗼̂̀𝗻 𝗯𝗶𝗲̂𝗻 𝗴𝗶𝗼̛́𝗶!`, event.threadID, event.messageID)
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'only': {
      //---> CODE ADMIN ONLY<---//
        if (config.adminOnly == false) {
          config.adminOnly = true;
          api.sendMessage("[🐧] 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆", threadID, messageID);
        } else {
          config.adminOnly = false;
          api.sendMessage("[🐧] 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆", threadID, messageID);
        }
          writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
          break;
        }
        case 'boxonly': {
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[🐧] 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻 (𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[🐧] 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻 (𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}
