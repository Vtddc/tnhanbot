module.exports.config = {
	name: "weather",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "JRT & chỉnh font chữ by tnhan",
	//Chỉnh font chữ không phải là khó, nhưng cần sự kiên trì nên hãy tôn trọng công sức của tôi bỏ ra=))
	description: "Xem thông tin thời tiết tại khu vực",
	commandCategory: "Tin tức",
	usages: "[Location]",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": "",
		"request": ""
	},
	envConfig: {
		"OPEN_WEATHER": "196ac91264f90df6590b46309556229f"
	}
};

module.exports.languages = {
	"vi": {
		"locationNotExist": "[🐧] Đ𝐢̣𝐚 đ𝐢𝐞̂̉𝐦 %1 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐨̂̀𝐧 𝐭𝐚̣𝐢!",
		"returnResult": "🌡 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: %1°C\n🌡 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂ 𝗰𝗼̛ 𝘁𝗵𝗲̂̉ 𝗰𝗮̉𝗺 𝗻𝗵𝗮̣̂𝗻 đ𝘂̛𝗼̛̣𝗰: %2°C\n☁️ 𝗖𝗮̉𝗻𝗵 𝗾𝘂𝗮𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: %3\n💦 Đ𝗼̣̂ 𝗮̂̉𝗺: %4%\n💨 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝗴𝗶𝗼́: %5 𝗸𝗺/𝗵\n🌅 𝗠𝗮̣̆𝘁 𝘁𝗿𝗼̛̀𝗶 𝗺𝗼̣𝗰 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: %6\n🌄 𝗠𝗮̣̆𝘁 𝘁𝗿𝗼̛̀𝗶 𝗹𝗮̣̆𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: %7\n"
	},
	"en": {
		"locationNotExist": "Can't find %1.",
		"returnResult": "🌡 Temp: %1℃\n🌡 Feels like: %2℃\n☁️ Sky: %3\n💦 Humidity: %4%\n💨 Wind speed: %5km/h\n🌅 Sun rises: %6\n🌄 Sun sets: %7"
	}
}

module.exports.run = async ({ api, event, args, getText }) => {
	const request = global.nodemodule["request"];
	const moment = global.nodemodule["moment-timezone"];
	const { throwError } = global.utils;
	const { threadID, messageID } = event;
	
	var city = args.join(" ");
	if (city.length == 0) return throwError(this.config.name, threadID, messageID);
	return request(encodeURI("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + global.configModule[this.config.name].OPEN_WEATHER + "&units=metric&lang=" + global.config.language), (err, response, body) => {
		if (err) throw err;
		var weatherData = JSON.parse(body);
		if (weatherData.cod !== 200) return api.sendMessage(getText("locationNotExist", city), threadID, messageID);
		var sunrise_date = moment.unix(weatherData.sys.sunrise).tz("Asia/Ho_Chi_Minh");
		var sunset_date = moment.unix(weatherData.sys.sunset).tz("Asia/Ho_Chi_Minh");
		api.sendMessage({
			body: getText("returnResult", weatherData.main.temp, weatherData.main.feels_like, weatherData.weather[0].description, weatherData.main.humidity, weatherData.wind.speed, sunrise_date.format('HH:mm:ss'), sunset_date.format('HH:mm:ss')),
			location: {
				latitude: weatherData.coord.lat,
				longitude: weatherData.coord.lon,
				current: true
			},
		}, threadID, messageID);
	});
}