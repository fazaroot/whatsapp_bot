const chalk = require('chalk')
const fs = require('fs')

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menushun = (prefix) => {
  return ctext(`
╭━━━━━━━━━━━━━━━━━━━━━╮
┃       M E N U       ┃
┣━━━━━━━━━━━━━━━━━━━━━┫
┃
┃⧫ ${prefix}menu ai
┃⧫ ${prefix}menu anime
┃⧫ ${prefix}menu database
┃⧫ ${prefix}menu download
┃⧫ ${prefix}menu game
┃⧫ ${prefix}menu group
┃⧫ ${prefix}menu other
┃⧫ ${prefix}menu owner
┃⧫ ${prefix}menu search
┃⧫ ${prefix}menu tools
┃
┣━━━━━━━━━━━━━━━━━━━━━┫
┃  𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔: 𝒗1.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
╰━━━━━━━━━━━━━━━━━━━━━╯
`);
};

global.menuai = (prefix) => {
  return ctext(`
╭━━━━━━━━━━━━━━━━━━━━━╮
┃       「 *A I* 」   ┃
┣━━━━━━━━━━━━━━━━━━━━━┫
┃
┃⧫ ${prefix}ai
┃⧫ ${prefix}shun
┃⧫ ${prefix}openai
┃⧫ ${prefix}gpt4
┃⧫ ${prefix}simi
┃⧫ ${prefix}text2img
┃⧫ ${prefix}blackbox
┃⧫ ${prefix}gemini
┃
┣━━━━━━━━━━━━━━━━━━━━━┫
┃  𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔: 𝒗1.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
╰━━━━━━━━━━━━━━━━━━━━━╯
`);
};

global.menuanime = (prefix) => {
return ctext(`━────「 *A N I M E* 」────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}waifu
╎│•⟢ ${prefix}neko
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menudatabase = (prefix) => {
return ctext(`━──「 *D A T A B A S E* 」──━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menudownload = (prefix) => {
return ctext(`━──「 *D O W N L O A D* 」──━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}ytmp4
╎│•⟢ ${prefix}ytmp3
╎│•⟢ ${prefix}tiktok
╎│•⟢ ${prefix}instagram
╎│•⟢ ${prefix}spotify
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menugame = (prefix) => {
return ctext(`━─────「 *G A M E* 」─────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}apakah
╎│•⟢ ${prefix}kapankah
╎│•⟢ ${prefix}bisakah
╎│•⟢ ${prefix}bagaimanakah
╎│•⟢ ${prefix}rate
╎│•⟢ ${prefix}gantengcek
╎│•⟢ ${prefix}cantikcek
╎│•⟢ ${prefix}gaycek
╎│•⟢ ${prefix}lesbycek
╎│•⟢ ${prefix}sangecek
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menugroup = (prefix) => {
return ctext(`━────「 *G R O U P* 」────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}getcontact
╎│•⟢ ${prefix}totag
╎│•⟢ ${prefix}linkgroup
╎│•⟢ ${prefix}linkgc
╎│•⟢ ${prefix}resetlinkgc
╎│•⟢ ${prefix}sendlinkgc
╎│•⟢ ${prefix}kick
╎│•⟢ ${prefix}add
╎│•⟢ ${prefix}promote
╎│•⟢ ${prefix}demote
╎│•⟢ ${prefix}hidetag
╎│•⟢ ${prefix}h
╎│•⟢ ${prefix}tagall
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menuother = (prefix) => {
return ctext(`━────「 *O T H E R* 」────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}sc
╎│•⟢ ${prefix}owner
╎│•⟢ ${prefix}afk
╎│•⟢ ${prefix}limit
╎│•⟢ ${prefix}carbon
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menuowner = (prefix) => {
return ctext(`━────「 *O W N E R* 」────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}resetlimit
╎│•⟢ ${prefix}addlimit
╎│•⟢ ${prefix}pushkontak2
╎│•⟢ ${prefix}pushkontak
╎│•⟢ ${prefix}getidgc
╎│•⟢ ${prefix}join
╎│•⟢ ${prefix}addgc
╎│•⟢ ${prefix}delgc
╎│•⟢ ${prefix}backup
╎│•⟢ ${prefix}getcase
╎│•⟢ ${prefix}biochange
╎│•⟢ ${prefix}autobio
╎│•⟢ ${prefix}readchange
╎│•⟢ ${prefix}autoread
╎│•⟢ ${prefix}public
╎│•⟢ ${prefix}self
╎│•⟢ ${prefix}addprem
╎│•⟢ ${prefix}delprem
╎│•⟢ ${prefix}listpremium
╎│•⟢ ${prefix}listprem
╎│•⟢ ${prefix}bcgc
╎│•⟢ ${prefix}bcgroup
╎│•⟢ ${prefix}restart
╎│•⟢ ${prefix}delcase
╎│•⟢ ${prefix}addcase
╎│•⟢ ${prefix}addcase
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menusearch = (prefix) => {
return ctext(`━────「 *S E A R C H* 」────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}pinterest
╎│•⟢ ${prefix}spotify
╎│•⟢ ${prefix}play
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menustickanim = (prefix) => {
return ctext(`━─────「 *S T I C K* 」─────━
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}kill
╎│•⟢ ${prefix}pat
╎│•⟢ ${prefix}lick
╎│•⟢ ${prefix}bite
╎│•⟢ ${prefix}yeet
╎│•⟢ ${prefix}bonk
╎│•⟢ ${prefix}wink
╎│•⟢ ${prefix}poke
╎│•⟢ ${prefix}nom
╎│•⟢ ${prefix}slap
╎│•⟢ ${prefix}smile
╎│•⟢ ${prefix}wave
╎│•⟢ ${prefix}blush
╎│•⟢ ${prefix}smugh
╎│•⟢ ${prefix}glomp
╎│•⟢ ${prefix}happy
╎│•⟢ ${prefix}dance
╎│•⟢ ${prefix}cringe
╎│•⟢ ${prefix}highfive
╎│•⟢ ${prefix}handhold
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

global.menutools = (prefix) => {
return ctext(`━────「 *T O O L S* 」────
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢ ${prefix}clonebot
╎│•⟢ ${prefix}hd
╎│•⟢ ${prefix}toimg
╎│•⟢ ${prefix}toaud
╎│•⟢ ${prefix}tomp3
╎│•⟢ ${prefix}tovn
╎│•⟢ ${prefix}tourl
╎│•⟢ ${prefix}shortlink
╎│•⟢ ${prefix}sticker
╎│•⟢ ${prefix}qc
╎│•⟢ ${prefix}smeme
╎│•⟢ ${prefix}wm
╎│•⟢ ${prefix}lirik
╎│•⟢ ${prefix}gitclone
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾𝑽𝒆𝒓𝒔𝒊 𝑹𝒊𝒍𝒊𝒔 : 𝒗𝟏.5 𝑵𝒐𝒕 𝑬𝒏𝒄𝒓𝒊𝒑𝒕𝒆𝒅
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})