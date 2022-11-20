let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / DANA /  :
├ • *083137354143*
│
├ • SAWERIA
├ No Link Saweria
│
├ • OWNERKU
├ wa.me/62895330014743
╰───────────
© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝐅𝐢𝐤𝐫𝐢𝐢
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
