const {
  pnix,
  isPrivate,
  getBuffer
} = require("../lib/");
pnix({
  'pattern': 'alive2',
  'fromMe': isPrivate,
  'type': 'main'
}, async (_0x3eb68d, _0x3be952) => {
  const _0x554062 = await getBuffer("https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg");
  const _0x19f988 = {
    'title': "The onwner isnt available now",
    'body': "Madara-𝙼𝙳",
    'thumbnail': _0x554062,
    'mediaType': 0x1,
    'mediaUrl': "https://i.imgur.com/6jdTPZz.mp4",
    'sourceUrl': "https://github.com/AbhishekSuresh2/Phoenix-MD",
    'showAdAttribution': false,
    'renderLargerThumbnail': false
  };
  await _0x3eb68d.client.sendMessage(_0x3eb68d.jid, {
    'audio': {
      'url': "https://i.imgur.com/6jdTPZz.mp4"
    },
    'mimetype': "audio/mp4",
    'ptt': true,
    'contextInfo': {
      'externalAdReply': _0x19f988
    }
  }, {
    'quoted': _0x3eb68d.quoted || ''
  });
});
