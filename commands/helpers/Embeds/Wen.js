const BaseEmbed = require('./_base');

const WenEmbeds = {};

WenEmbeds.Moon = async function () {

    const moonDate = new Date(+(new Date()) + Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US');

    const Embed = new MessageEmbed()
        .setColor('WHITE')
        .setTitle('Secret Moon Date 👀')
        .setThumbnail(dWThumbnailPic)
        .setAuthor('DopeWars.gg', dwSmileyPic, 'https://dopeswars.gg')
        .setDescription(`${moonDate} 🚀 🌑`)
        .setTimestamp();

    return Embed;

};

WenEmbeds.Game = async function () {

    const Embed = new MessageEmbed()
        .setColor('WHITE')
        .setTitle('Wen game ❓❓')
        .setThumbnail(dWThumbnailPic)
        .setAuthor('DopeWars.gg', dwSmileyPic, 'https://dopeswars.gg')
        .setDescription("-")
        .addField('Development', "The game is actively in the design and development stage.\nDopeWars is a community led project with many moving parts, there is no solid date for the game release.")
        .setTimestamp();

    return Embed;

};

module.exports = WenEmbeds;