const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendi
const isLinkHttp = /http|https/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id

    if (chat.antiLinkTik && isAntiLinkTik) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Tiktok!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Youtube!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Telegram!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Facebook!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Instagram!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        await conn.sendButton(m.chat, `*Terdeteksi ${name} Telah Mengirim Link Http!!* ${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['Owner', '/owner'], m)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    return !0
}