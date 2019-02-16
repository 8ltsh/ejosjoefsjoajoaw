const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.login(process.env.BOT_TOKEN);



client.on("message", message => {
    if(message.content.startsWith("verify")) { // الامر
      let number = Math.floor((Math.random() * 4793) + 17); // تعريف الرقم بيكون عشوائي math.random + math.floor عشان مايكون فيه فواصل
    var Canvas = require('canvas') // تعريف الكانفاس لازم تشيله اذا كنت معرفه قبل
  , Image = new Canvas.Image // صنع صورة جديدة
  , canvas = Canvas.createCanvas(89, 50) // قياسات الصورة
  , ctx = canvas.getContext('2d');
  ctx.font = '25px Impact'; // الخط
  let args = message.content.split(" ").slice(1); // تعريف ال args
 
Image.src = canvas.toBuffer();
 
    console.log(Image);
ctx.fillText(num,17, 35); // احداثيات الرقم
 
 
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();
      message.reply('**قم بكتابة الرقم الضاهر بالصورة**')
      let filter = m => m.author.id === message.author.id; // تعريف الفلتر
      message.channel.sendFile(canvas.toBuffer()).then(m => { //يرسل الصورة
        message.channel.awaitMessages(res => res.content == `${number}` && filter, { //  محتوى الرسالة الي لازم يكتبها + لازم يكتبها بس الكاتب اذا كتب الرقم شخص ثاني مايزبط ونلاحظ ذا من خلال تعريف الفلتر
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => { // اذا كتب الرقم صح
          message.reply('**تم تفعيلكء**') // يرد على العضو
          message.delete(); // يحذف الرسالة
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "◈- Verified")); // الرتبة الي تبي البوت يعطيها للعضو
          message.member.removeRole(message.guild.roles.find(c => c.name == "◈- Not Verified")); // (الرتبة الي تبي البوت يشيلها من العضو (يمديك تحذف ذا السطر
          // السطر الي فوق يمديك تشيله اذا كنت تبي  البوت مايشيل منه اي رتبة بس يعطيه رتبة
        }).catch(() => {
          m.edit(`You took to long to type the number.nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})
