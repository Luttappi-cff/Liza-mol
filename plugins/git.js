const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("Liza.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Liza-mol bot created by Ameer Suhail*
*Creator number : wa.me/6282137207?text=Hi%20Ameer%20Suhail.%20*

*my video 🥲: https://youtu.be/ShA5krTjtPk*

*Githublink (Setup)  :    https://github.com/Luttappi-cff/Liza-mol*

*Audio commads :   https://github.com/Luttappi-cff/Liza-mol/tree/master/uploads*

*Sticker commads : https://github.com/Luttappi-cff/Liza-mol/tree/master/uploads*

*Enta video ane https://youtu.be/ShA5krTjtPk: * 

* Subscribe The Channel ☝*
`}) 

}));
