const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
	console.log('Dream iS Here');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`b 1.0`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});



    const dreamv2 = ["589506382211055616"]
    client.on('message', message => {
        var dream = message.content.split(` `).slice(1).join(' ');
          if (!dreamv2.includes(message.author.id)) return;
          if(message.content.startsWith(prefix + "ply")){
            client.user.setActivity(dream);
            message.channel.send(`✔️ **Done Playing Now __${dream}__**`)
        }
          if (message.content.startsWith(prefix + 'wt')) {
      client.user.setActivity(dream, {type:'WATCHING'});
          message.channel.send(`✔️  **Done Watching Now __${dream}__ **`)
      } else
      if (message.content.startsWith(prefix + 'ls')) {
      client.user.setActivity(dream , {type:'LISTENING'});
          message.channel.send(`✔️ **Done Listening Now __${dream}__** `)
      } else
      if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(dream, "https://www.twitch.tv/dream");
         message.channel.send(`✔️ **Done Stream Now  __${dream}__ **`)
      }
 
    });


client.login(process.env.LIGHT);