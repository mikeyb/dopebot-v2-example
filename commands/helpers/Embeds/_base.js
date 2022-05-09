const { MessageEmbed } = require("discord.js");
const {
    dWThumbnailPic,
    dwSmileyPic
} = require("../../../constants");

module.exports = new MessageEmbed()
    .setColor('WHITE')
    .setThumbnail(dWThumbnailPic)
    .setAuthor({ name: 'DopeWars.gg', iconURL: dwSmileyPic, url: 'https://dopeswars.gg' })
    .setTimestamp();