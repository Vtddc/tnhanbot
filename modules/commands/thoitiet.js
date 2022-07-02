module.exports.config = {
    name: "thoitiet",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie & chỉnh font chữ by tnhan",
	//Chỉnh font chữ không phải là khó, nhưng cần sự kiên trì nên hãy tôn trọng công sức của tôi bỏ ra=))
    description: "Xem thông tin thời tiết tại khu vực",
    commandCategory: "Tin tức",
    usages: "[Location]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];   
const location = args.join(" ");
if (!location) return api.sendMessage('𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝟭 đ𝗶̣𝗮 đ𝗶𝗲̂̉𝗺', event.threadID, event.messageID)
try {
const res = await axios.get(`https://api.popcat.xyz/weather?q=${location}`);
const data = res.data[0]
const stt = data

console.log(stt)
return api.sendMessage(`
🌅 Đ𝗶̣𝗮 đ𝗶𝗲̂̉𝗺: ${stt.location.name}
🌡 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${stt.current.temperature}°C
☁️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${stt.current.skytext}
💦 Đ𝗼̣̂ 𝗮̂̉𝗺: ${stt.current.humidity}%
💨 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝗴𝗶𝗼́: ${stt.current.windspeed}
⏱️ 𝗨𝗽𝗱𝗮𝘁𝗲: ${stt.current.date}`, event.threadID, event.messageID)
} catch {
            return api.sendMessage('𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 đ𝗶̣𝗮 đ𝗶𝗲̂̉𝗺 𝗻𝗮̀𝘆!', event.threadID, event.messageID);
        }
}