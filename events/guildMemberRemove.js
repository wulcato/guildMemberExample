
module.exports = async (client, member) => {
  if (member.guild.id != 'GUILD_ID') return; //Do not run on other servers.
  const channelid = 'WELCOME_ID'; //welcome channel id
  console.log(member)
  const message2 = `**${member.user.tag}** , good bye. `
  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)

};