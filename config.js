
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5JYTFDdzZzUW5kOWRwWnVKQ1RiWHdSRjJINmdyMnVnQkM5dEFoR0cwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpWSmRQdXNKb3JTd2lsZU0wSnd3U25KaU1qK1lQYk13UjRYeGsrZTVIRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQXV3cVJtYlpjYVRMeWVhMmJHaFAwVWkzQ0xSNGdCVjZ5NnhJcFEzMEZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT05jNnNUMHk4QVBTUERFZlozd0pvLzJWVjdhbUtIQWN3UDNsOENuZmdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIVWlEUEN0WGF0MWZIUmlGY2padVRCMDZOK011cGQxcmk2RFg1TE1EMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAvQkhBUEo0SlJwd0czdzFtbC95bGxobEt0dWttdDl3bE54SG1ZNHhYV289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEU2Z0c4cWo2YUxvUFdxV3RMUHNYODJSbWpmYmNNaVRQejJQOWU4UHEwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVlEK0t1T1UyUW9OQmJxRGJUdzY0c3d4UDUzM29IYUNLc1B0UnY3QVEwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inoyd3hPejluN04rbDlWZ3c3dGI3WDJUYnRRVTZlMmdvNThKanNrNmJsM2pOM3RlVHBmVEhTdGovZnJHckwyZFpoT1BBdjZvQkRMNDhrbjV4THNwTGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Im05TkcwUU45VjFVN2x6OTR3MDlXbmg4N1U3VVA3TGwwdXJXWG5vcFFRZkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1EV0FXbVVPUzdDd0FDT29Ra0hTVlEiLCJwaG9uZUlkIjoiOGQ4M2ViNzQtMzA0MS00NDk1LTk1MjgtZDUyOTM0ZjI0ODMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJpZ01jTkVKa1ZrekNFamdDWW9MTjQ1VGtvTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcU4vNi9pMXYxUXArN2tUZU5tN2ZzL1JzcUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUQ3MjVOSFoiLCJtZSI6eyJpZCI6IjI0MjA2NjMyODY5MTo3MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLEkOKCs+KxpOKCrSBKw5jigq3JhuKxpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSi9qaG9rREVKenhsYlVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1kvSXRMNkN5SlQ2MS8ycHAwOWZhNGJHVFJwdEhSQVkzZUt3RFpvdUtIaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ0QzQm1PSythVFNJN0R1eWFvUnYxbm5pdHllQUtxMmZDVzQzdnBVcUpNWmh3TU80ZVpza0pyQ3NHZ1RqODdDMENhelhZSXRkMHRISlZPL2hpd2I2QWc9PSIsImRldmljZVNpZ25hdHVyZSI6InBkcG9sSE54MXlWWUI1elhaK05xbmtjcG1wZVlWMnd4N2VVcEdEUFV6cmMzL0JpRVBQWWVHcmN2YkhPbDF4RXNwcjR2aE9haW4zamJMRjdUeDhsNmdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY2MzI4NjkxOjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJHUHlMUytnc2lVK3RmOXFhZFBYMnVHeGswYWJSMFFHTjNpc0EyYUxpaDUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMjAzNjJ9



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "y",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "€",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "Byte-Md",
  ownername: process.env.OWNER_NAME || "☬☬𝐷𝐴𝑅𝐾 𝐽𝑂𝐾𝐸𝑅☫☫",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "privé",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
