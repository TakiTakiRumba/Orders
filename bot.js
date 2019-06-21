const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "£";

client.on("message",async message => {
  if(message.content === '£order'){//الامر
  var shopc = message.guild.channels.find("name","orders")
    if(!shopc) return message.reply("There is no room have the name orders")
      let shop = '';
        let fillter = m => m.author.id === message.author.id
        
       
  
        await message.channel.send("** ☞  Hello Sir , Write Your Order Please ☺ . **").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
  })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       // 90 + 40 + 20 + 20 + 10 + 20 = 200
  let desc = '';
  let nord = new Discord.RichEmbed()
  .setColor("#b42323")
  .addField("New Order : ", shop)
  .setTimestamp()
   e.edit("**Your Order Was Sended , Thanks Sir . ☺**").then(e => {
    shopc.send('**That Order Sent By : ☞ **' + message.author)
    shopc.sendEmbed(nord)
    
    })
  })
    })
  }
             
        
    
       
    
        
       
  }
  );


client.login(process.env.BOT_TOKEN);
