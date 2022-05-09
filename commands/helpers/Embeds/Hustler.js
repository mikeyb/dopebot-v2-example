const BaseEmbed = require('./_base');

const HustlerEmbeds = {};

HustlerEmbeds.Hustler = function (hustler) {

    const Embed = new MessageEmbed()
        .setColor('#000000')
        .setTitle('Hustler #' + hustler.id + ' ' + hustler.title)
        .setThumbnail(hustler.image)
        .setAuthor('DopeWars.gg', dwSmileyPic, 'https://dopeswars.gg')
        .setDescription('Hustler Inventory')
        .addField("Goes by the name", '**' + hustler.name + ' - ' + hustler.title + '**', false)
        .addField('⛓️ Neck', hustler.neck.fullname, true)
        .addField("\u200b", "\u200b", true)
        .addField('💍 Ring', hustler.ring.fullname, true)
        .addField('🦺 Clothes', hustler.clothes.fullname, true)
        .addField("\u200b", "\u200b", true)
        .addField('🥊 Hand', hustler.hand.fullname, true)
        .addField('🩲 Waist', hustler.waist.fullname, true)
        .addField("\u200b", "\u200b", true)
        .addField('🗡️ Weapon', hustler.weapon.fullname, true)
        .addField('👞 Foot', hustler.foot.fullname, true)
        .addField("\u200b", "\u200b", true)
        .addField('🐊 Drug', hustler.drug.fullname, true)
        .addField('🚓 Vehicle', hustler.vehicle.fullname, true)
        .addField("\u200b", "\u200b", true)
        .addField('🎭 Accessory', hustler.accessory.fullname, true)
        .addField('🔴✨ Quixotic', `[Listing](${quixoticCollectionLink}/${hustler.id})`, true)
        .setTimestamp();

    return Embed;

};

module.exports = HustlerEmbeds;