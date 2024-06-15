const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 

const audiovn = "./start.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Huncho-md",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "Hi human, I am on run",
          body: "HUNCHO BOT",
          thumbnailUrl: "https://telegra.ph/file/e18441d126f37be8efbfa.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
