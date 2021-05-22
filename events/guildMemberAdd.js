module.exports = async (client, member) => {
  if (member.guild.id != 'GUILD_ID') return; //Do not run on other servers.
  let myRole = member.guild.roles.cache.get("ROLE_ID"); //automatic role to members. ID of the role.
  member.roles.add(myRole);
  const channelid = 'WELCOME_ID'; //welcome channel id
  const targetchannelid = 'RULES_ID'; //rules channel id
  console.log(member)

  const message2 = `Welcome <@${member.id}> ! pls read  ${member.guild.channels.cache
    .get(targetchannelid)} '!`

  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)
};


