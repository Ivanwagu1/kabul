import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date('Desember 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `━━━ꕥ〔 *SOURCE CODE* 〕ꕥ━⬣
✾ *Script By WH MODS DEV*

✾ *OFFICIAL GROUP*
_https://chat.whatsapp.com/B9PTc9PZbBH0INkdEN07ws_

✾ *YOUTUBE OFFICIAL*
https://youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow
━━━━━━ꕥ`
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, runnya,wm + '\n\n' + botdate, intro, [['🧑OWNER','.owner']], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `≪ Jᴏɪɴ Sɪɴɪ Cᴜʏ ⋟`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/1675369a8e6248f098a31.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/B9PTc9PZbBH0INkdEN07ws'
            }
        }
    })
}


handler.help = ['sc', 'sewasc']
handler.tags = ['info', 'main']

handler.command = /^(sc|script|sewasc)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 


function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}