/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = process.env.PREFIX || ""; // your desired prefix symbol,emoji, leave blank for no prefix
global.owner = process.env.OWNER_NUMBER || "2347040401291"; // owner number 
global.sudo = process.env.SUDO  || "2347059092107";
global.ownername = process.env.OWNER_NAME || "༒𝘖𝘱𝘵𝘪𝘮𝘶𝘴 𝘗𝘳𝘪𝘮𝘦༒"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "CYBERTRON";
global.author = process.env.AUTHOR  || "OPTIMUS";
global.packname = process.env.PACK_NAME  || "PRIME";
global.thumb = process.env.THUMB_IMAGE || 'https://files.catbox.moe/1uhvld.jpg';
global.footer = process.env.FOOTER || '🤖 © wa bot';
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "Arch_2119286348d5d74365adb55b24e2cfce";
global.simbol = process.env.SYMBOL || '♘';
global.menutype = process.env.MENU_TYPE  || "v2";
global.warn = process.env.WARN || "3";
global.goodbye = process.env.GOODBYE === 'false';
global.welcome = process.env.WELCOME === 'false';
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.startup = process.env.START_MSG === 'true';
global.scan = 'https://arch-session.onrender.com';
global.api = '';


//======= Don't touch =======\\
global.msg = {
    succes: '_Success_',
    owner: '_This feature could be used by owner only_',
	admin: '_This feature could be used by group admin only_',
	botAdmin: '_This feature could be used when the bot is an admin only_',
    group: '_Features Used Only For Groups!_',
    private: '_Features Used Only For Private Chat!_',
    bot: '_This feature could be used by bot only_',
    wait: '_processing.._',
    ban: '_Sorry you have been banned from using command contact owner to unban_'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
