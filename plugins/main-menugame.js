import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, text }) => {
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `╭───『 Your Info 』
❏ *Nama:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
❏ *Tags:* @${m.sender.split`@`[0]}
❏ *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
❏ *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
❏ *Limit:* ${usrs.limit}
❏ *Level:* ${usrs.level}
❏ *Role:* ${usrs.role}
❏ *Money:* ${usrs.money}
❏ *User:* ${Object.keys(global.db.data.users).length}
╰–––––––––––––––༓
${readMore}
❏–––––『 *Game* 』
┆≼≽ asahotak
┆≼≽ caklontong
┆≼≽ family100
┆≼≽ lengkapikalimat
┆≼≽ math
┆≼≽ siapakahaku
┆≼≽ suit
┆≼≽ suitpvp
┆≼≽ susunkata
┆≼≽ tebakanime
┆≼≽ tebakchara
┆≼≽ tebakgambar
┆≼≽ tebakkabupaten
┆≼≽ tebaklirik
┆≼≽ tebaklogo
┆≼≽ tebaksurah
┆≼≽ tebakkata
┆≼≽ tictactoe
┆≼≽ attack
┆≼≽ war
❏–––––––––––––––༓`
conn.sendMessage(m.chat, {image: {url: global.thumb}, caption: tek}, m)
}
handler.command = /^(menugame)$/i

export default handler
