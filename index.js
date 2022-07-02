const {
    spawn
} = require('child_process');
const {
    readFileSync
} = require('fs-extra');
const http = require('http');
const axios = require('axios');
const semver = require('semver');
const logger = require('./utils/log');
const chalk = require('chalk');
const chalkercli = require('chalkercli');
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const CFonts = require('cfonts');
const dashboard = http.createServer(function (_0x9520xa, _0x9520xb) {
    _0x9520xb.writeHead(200, 'OK', {
        "Content-Type": 'text/plain'
    });
    _0x9520xb.write('𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝗰𝗮̣̂𝘂 𝗰𝗵𝘂̉ 𝗡𝗴𝘂𝘆𝗲̂̃𝗻 𝗧𝗵𝗶𝗲̣̂𝗻 𝗡𝗵𝗮̂𝗻. 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗯𝗮𝗰𝗸');
    _0x9520xb.end()
});
dashboard.listen(process.env.port || 0);
logger('𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 đ𝘂̛𝗼̛̣𝗰 𝗿𝗲𝗺𝗮𝗸𝗲 𝘁𝘂̛̀ 𝗠𝗶𝗿𝗮𝗶𝘃𝟮 𝗱𝗼 𝗧𝗻𝗵𝗮𝗻 𝗱𝘂𝘆 𝘁𝗿𝗶̀ 𝘃𝗮̀ 𝗽𝗵𝗮́𝘁 𝘁𝗿𝗶𝗲̂̉𝗻', '🛠 𝗩𝗡');
logger('𝗧𝗵𝗲 𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 𝘀𝘆𝘀𝘁𝗲𝗺 𝗶𝘀 𝗮 𝗿𝗲𝗺𝗮𝗸𝗲 𝗼𝗳 𝗠𝗶𝗿𝗮𝗶𝘃𝟮 𝗺𝗮𝗶𝗻𝘁𝗮𝗶𝗻𝗲𝗱 𝗮𝗻𝗱 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗧𝗻𝗵𝗮𝗻', '🛠 𝗩𝗡');
logger('🛠 𝗗𝗼𝗻𝗮𝘁𝗲 𝗠𝗯𝗯𝗮𝗻𝗸: 𝟬𝟬𝟬𝟬𝟯𝟬𝟬𝟭𝟮𝟬𝟬𝟳', '𝗗𝗢𝗡𝗔𝗧𝗘');
const rainbow = chalkercli.rainbow(`\
[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓 𝐉𝐑𝐓 ===]\
`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
logger('𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗜𝗡𝗜𝗧𝗜𝗔𝗟𝗜𝗭𝗘𝗗', '𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧');
logger('𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗯𝗮𝗰𝗸 𝘁𝗼 𝗧𝗻𝗵𝗮𝗻 𝗕𝗼𝘁', '𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧');
logger('𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝘀𝘁𝗮𝗿𝘁 𝗿𝘂𝗻𝗻𝗶𝗻𝗴...', '𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧');
logger('𝗖𝗵𝗲𝗰𝗸𝗶𝗻𝗴 𝘁𝗵𝗲 𝘃𝗲𝗿𝘀𝗶𝗼𝗻...', '𝗨𝗣𝗗𝗔𝗧𝗘');
logger('𝗬𝗼𝘂𝗿 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗶𝘀 𝘁𝗵𝗲 𝗹𝗮𝘁𝗲𝘀𝘁!', '𝗨𝗣𝗗𝗔𝗧𝗘');
function startBot(_0x9520xf) {
    (_0x9520xf) ? logger(_0x9520xf, '𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 𝗦𝗧𝗔𝗥𝗧𝗜𝗡𝗚'): '';
    const _0x9520x10 = spawn('node', ['--trace-warnings', '--async-stack-traces', 'mirai.js'], {
        cwd: __dirname,
        stdio: 'inherit',
        shell: true
    });
    _0x9520x10.on('close', async (_0x9520x11) => {
        var _0x9520x12 = 'codeExit' ['replace']('codeExit', _0x9520x11);
        if (_0x9520x11 == 1) {
            return startBot('𝗕𝗢𝗧 𝗥𝗘𝗦𝗧𝗔𝗥𝗧𝗜𝗡𝗚!!!')
        } else {
            if (_0x9520x12.indexOf(2) == 0) {
                await new Promise((_0x9520x13) => {
                    return setTimeout(_0x9520x13, parseInt(_0x9520x12.replace(2, '')) * 1000)
                });
                startBot('𝗕𝗼𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮𝗰𝘁𝗶𝘃𝗮𝘁𝗲𝗱 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁!!!')
            } else {
                return
            }
        }
    });
    _0x9520x10.on('error', function (_0x9520x14) {
        logger('𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱: ' + JSON.stringify(_0x9520x14), '𝗦𝘁𝗮𝗿𝘁𝗶𝗻𝗴')
    })
}
axios.get('https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json').then((_0x9520xb) => {
    logger(_0x9520xb.data.name, 'NAME');
    logger('version: ' + _0x9520xb.data.version, 'VERSION');
    logger(_0x9520xb.data.description, 'DESCRIPTION')
});
setTimeout(async function () {
    CFonts.say('𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧', {
        font: 'block',
        align: 'center',
        gradient: ['red', 'magenta']
    });
    CFonts.say(`${'𝗕𝗼𝘁 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗧𝗻𝗵𝗮𝗻'}`, {
        font: 'console',
        align: 'center',
        gradient: ['red', 'magenta']
    });
    const rainbow = chalkercli.rainbow(`\
[=== 𝗔𝗖𝗧𝗜𝗩𝗘 𝗧𝗡𝗛𝗔𝗡 𝗕𝗢𝗧 ===]\
`).stop();
    rainbow.render();
    const frame = rainbow.frame();
    console.log(frame);
    logger('𝗕𝗮̆́𝘁 đ𝗮̂̀𝘂 𝗹𝗼𝗮𝗱 𝘀𝗼𝘂𝗿𝗰𝗲 𝗰𝗼𝗱𝗲', '𝗟𝗢𝗔𝗗');
    startBot()
}, 70);
async function bank() {
    const {
        readdirSync,
        readFileSync,
        writeFileSync,
        existsSync,
        copySync
    } = require('fs-extra');
    const {
        join,
        resolve
    } = require('path');
    const _0x9520x16 = join(__dirname + '/modules/commands/banking/banking.json');
    const logger = require('./utils/log.js');
    const _0x9520x17 = require('./modules/commands/banking/banking.json');
    const _0x9520x18 = 60 * 60;
    const _0x9520x19 = 0.01;
    if (_0x9520x17[0] == undefined) {
        return
    };
    while (true) {
        for (let _0x9520x1a of _0x9520x17) {
            var _0x9520x1b = _0x9520x17.find((_0x9520x1c) => {
                return _0x9520x1c.senderID == _0x9520x1a.senderID
            });
            var _0x9520x1d = _0x9520x1b.money;
            _0x9520x1b.money = (parseInt(_0x9520x1d + _0x9520x1d * _0x9520x19));
            writeFileSync(_0x9520x16, JSON.stringify(_0x9520x17, null, 2))
        };
        logger.loader('Đ𝗔𝗡𝗚 𝗫𝗨̛̉ 𝗟𝗜́ 𝗕𝗔𝗡𝗞');
        await new Promise((_0x9520x13) => {
            return setTimeout(_0x9520x13, _0x9520x18 * 1000)
        })
    }
}
bank()