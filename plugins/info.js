let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Sugar Dady / Reyali
Devloper: @Nurotomo
Github: https://github.com/reyali/codetbot6


*Sosmed :*
Kritik kami di sosmed
Instagram: http://instagram.com/reyali_adji

*Thanks To :*
Allah SWT.
Nurotomo
Drawl Nag
Padil Samiri
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 082252420430
║>Request? Wa.me/6282252420430
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

