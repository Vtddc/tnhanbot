  module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tnhan",
    //Chỉnh font chữ không phải là khó, nhưng cần sự kiên trì nên hãy tôn trọng công sức của tôi bỏ ra=))
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Thông tin",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event,arg, Users }) => {
	const axios = global.nodemodule["axios"];
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
  const request = require('request');
	const res = await axios.get(`https://jrt-api.jrt-official.repl.co/love`);
var love = res.data.data;
	const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    const timeStart = Date.now();
	let today = new Date();
 axios.get('https://jrt-api.jrt-official.repl.co/gai').then(res => {
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({body: `𝗖𝗵𝗮̀𝗼 𝗰𝗮̣̂𝘂: ${name}\n𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀: ${thu} || ${gio}\n𝗕𝗼𝘁 đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰: ${hours} giờ ${minutes} phút ${seconds} giây.\n[ 𝗣𝗿𝗲𝗳𝗶𝘅 ] : ${global.config.PREFIX}\n[ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 ] : ${global.data.allUserID.length}\n[ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺 ] : ${global.data.allThreadID.length}\n[ 𝗖𝗽𝘂 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 ] : ${pidusage.cpu.toFixed(1)}\n[ 𝗥𝗮𝗺 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 ] : ${byte2mb(pidusage.memory)}\n[ 𝗣𝗶𝗻𝗴 ] : ${Date.now() - timeStart}ms\n[ 𝗧𝗵𝗶́𝗻𝗵 ] : ${love}\n`, attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`)).on("close", callback);
   })
}