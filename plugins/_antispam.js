export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 7) {
            if (this.spam[m.sender].count > 7) {
                //global.db.data.users[m.sender].banned = true
                // m.reply('*Jangan Spam!!*')
                let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let caption = `Woy *@${who.split("@")[0]}* Jangan spam!`
    this.sendButton(m.chat, caption, wm, null, [['Owner', '/owner kontak']], m, { mentions: this.parseMention(caption) })
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}