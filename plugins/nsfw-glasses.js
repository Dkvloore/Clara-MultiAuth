let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
             conn.sendMessage(m.chat, { image : { url : pickRandom(glasses) }, caption : `Cih Dasar Sangean` }, m)
}
handler.help = ['glasses']
handler.tags = ['nsfw','premium']
handler.command = /^(glasses)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const glasses = [

"https://media.discordapp.net/attachments/556959468252954634/694944530285199440/image0-2.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/704130759199293580/image0.png",
  "https://media.discordapp.net/attachments/556959468252954634/603283581002842155/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/634877730416099336/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/589496991852265532/D34mtWJUYAAg70m_large.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/603283662460682243/image0.png",
  "https://media.discordapp.net/attachments/556959468252954634/603283591161446402/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/627289213662003200/70287451_p0_master1200.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/589497115353546752/DzodToGUUAUpHlS_large.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/590654270936711179/hitsujigaoka_nemu_gankutsu_sou_no_fuyajou_san_drawn_by_nitro_mugityaoisii__sample-50086066f2632d8de6.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/737046330647773294/illust_83251610_20200726_133858.png",
  "https://media.discordapp.net/attachments/556959468252954634/707412081095344138/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/631301414542639116/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/669270831016443924/76563936_p0_master1200.png",
  "https://media.discordapp.net/attachments/556959468252954634/704805820256485523/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/589498132828520468/Dzse-h9VAAAzELR_large.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/589497137658724362/DznW-CgUYAAk5Vg_large.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/718175932602515557/illust_82084629_20200604_115318.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/636752505388400670/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/603283674477363280/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/603283604054868001/image0.png",
  "https://media.discordapp.net/attachments/556959468252954634/668468590181089280/155_mar_e04_03.png",
  "https://media.discordapp.net/attachments/556959468252954634/606821723668611083/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/652578306658533376/8455b06ca3b211bf821c741eb502ed5e.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/626878949992955929/3068bce1548e2f9de29d37afc6ba6571_01C9VVDA5ZJA2K41XT5G8ZQ55Z.640x0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/637296463709208586/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/638471226087440393/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/594866567788101654/illust_70464839_20190626_225617.png",
  "https://media.discordapp.net/attachments/556959468252954634/652578219794497547/8eef3837087c9944f37ad27b7e0115ba.jpeg",
  "https://media.discordapp.net/attachments/556959468252954634/719469938154143785/illust_74759514_20200608_011759.png",
  "https://media.discordapp.net/attachments/556959468252954634/636750057076686871/image0.png",
  "https://media.discordapp.net/attachments/556959468252954634/590654250468507707/mash_kyrielight_fate_grand_order_and_etc_drawn_by_uguisu_kagura__edf776eb552730b0c936c7ee51a14225.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/590654280076230704/thompson_submachine_gun_girls_frontline_drawn_by_take_trude1945oneetyan__sample-01fb97622066360dd20a.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/603283587982164009/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/631678867932839936/girls-with-guns-01112018-06.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/706540746651729980/I9ywLzxfXcagS_2t4X10EHg1KxjrErStzgu3-doVIJ4.png",
  "https://media.discordapp.net/attachments/556959468252954634/669270727232323584/78249151_p0_master1200.png",
  "https://media.discordapp.net/attachments/556959468252954634/590654263324180520/bb_and_bb_fate_grand_order_and_etc_drawn_by_michael_r__sample-ea83c48d614d56429b02987f500924cb.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/617774863549202479/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/668489652646182988/78507501_p0_master1200.png",
  "https://media.discordapp.net/attachments/556959468252954634/634877731720658956/image8.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/737871875048472576/illust_83289281_20200728_201909.png",
  "https://media.discordapp.net/attachments/556959468252954634/627289247933661184/70802989_p0_master1200.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/634877729803862041/image6.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/627289251981033473/53806164_p0_master1200.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/669270455169056778/78238187_p0_master1200.png",
  "https://media.discordapp.net/attachments/556959468252954634/636750060356370433/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/707407235609002054/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/634877729283506186/image7.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/771269079029776394/illust_84539103_20201029_000743.png",
  "https://media.discordapp.net/attachments/556959468252954634/769038451717701662/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/589498132438712330/DzqqfOMVAAA76W3_large.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/636746176993165323/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/615581457733124096/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/627289233572233217/68282091_p0_master1200.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/603283626225827900/image0.jpg",
  "https://media.discordapp.net/attachments/556959468252954634/706739518522523658/image0.jpg"
]