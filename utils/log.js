const chalk = require('chalk');
module.exports = (_0xf881x2, _0xf881x3) => {
    const _0xf881x4 = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright'];
    const _0xf881x5 = chalk[_0xf881x4[Math.floor(Math.random() * _0xf881x4.length)]];
    const _0xf881x6 = chalk[_0xf881x4[Math.floor(Math.random() * _0xf881x4.length)]];
    switch (_0xf881x3) {
    case 'warn':
        console.log(chalk.bold.hex('#FF7F50')('[ 𝗪𝗔𝗥𝗡 ] → ') + _0xf881x2);
        break;
    case 'error':
        console.log(chalk.bold.hex('#FF0000')('[ 𝗪𝗔𝗥𝗡 ] → ') + _0xf881x2);
        break;
    case 'load':
        console.log(_0xf881x5('[ 𝗡𝗚𝗨̛𝗢̛̀𝗶 𝗗𝗨̀𝗡𝗚 𝗠𝗢̛́𝗜 ] → ') + _0xf881x6(_0xf881x2));
        break;
    default:
        console.log(_0xf881x5(`${'[ '}${_0xf881x3}${' ] → '}`) + _0xf881x6(_0xf881x2));
        break
    }
};
module.exports.loader = (_0xf881x2, _0xf881x3) => {
    const _0xf881x4 = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright'];
    const _0xf881x5 = chalk[_0xf881x4[Math.floor(Math.random() * _0xf881x4.length)]];
    const _0xf881x6 = chalk[_0xf881x4[Math.floor(Math.random() * _0xf881x4.length)]];
    switch (_0xf881x3) {
    case 'warn':
        console.log(chalk.bold.hex('#FF0000')('[ 𝗧𝗡𝗛𝗔𝗡 ] → ') + _0xf881x2);
        break;
    case 'error':
        console.log(chalk.bold.hex('#FF0000')('[ 𝗧𝗡𝗛𝗔𝗡 ] → ') + _0xf881x2);
        break;
    default:
        console.log(_0xf881x5(`${'[ 𝗧𝗡𝗛𝗔𝗡 ] → '}`) + _0xf881x6(_0xf881x2));
        break
    }
};
module.exports.banner = (_0xf881x2) => {
    const _0xf881x7 = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright'];
    const _0xf881x8 = chalk[_0xf881x7[Math.floor(Math.random() * _0xf881x7.length)]];
    console.log(_0xf881x8(_0xf881x2))
}