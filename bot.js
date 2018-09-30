const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  https://discord.gg/Zr8VdEY ** ')

}).catch(console.error)
})

client.login('eyJpZCI6NDkxNzY2NTQ3NzQ5MTQyNTU5LCJlbWFpbCI6Im5hd2FmLnNob3AuMkBnbWFpbC5jb20ifQ.DoMo7w.5-INJ_6039JRD4Q8UgKGw4CEc6c');
