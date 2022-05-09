const BaseEmbed = require('./_base');

const HustlerEmbeds = {};

HustlerEmbeds.Hustler = function (dope) {

    const Embed = new MessageEmbed()
        .setColor('#000000')
        .setTitle('DOPE #' + dope.id)
        .setThumbnail(dope.image)
        .setAuthor('DopeWars.gg', dwSmileyPic, 'https://dopeswars.gg')
        .setDescription('Dope Inventory')
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
        .addField('🔴✨ Quixotic', `[Listing](${openseaCollectionLink}/${dope.id})`, true)
        .setTimestamp();

    return Embed;

};

module.exports = HustlerEmbeds;