import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (global.db.data.users[m.sender].premiumTime < 1) return conn.sendButtonDoc(m.chat, `ððððð ððð ðððððð ððððððð!!`, botdate, 'ðð®ð² ðð«ððºð¢ð®ðº', '.sewabot', m, adReply)
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokepð`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let res = await fetch(`https://malesin.xyz/xnxxsearch?q=${text}`)
		let rest = await res.json()
		let cap = `Hasil Pencarian Dari ${text}\n`
	for (let v of rest.result) {
	 cap += `â¢ *Title :* ${v.title}
â¢ *Info :* ${v.info}
â¢ *Link :* ${v.link}
`
cap +=  '\n' + 'â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxx", "xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["downloader", "premium"]
handler.command = /^xnxx(s?earch)?$/i

handler.register = false

export default handler