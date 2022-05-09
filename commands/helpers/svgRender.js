const Sharp = require('sharp');

exports.svgRenderer = async (svg) => {

    const strippedSvg = svg.replace("data:image/svg+xml;base64,", '');
    const encodedSvg = Buffer.from(strippedSvg, "base64");

    return Sharp(Buffer.from(encodedSvg)).png();

};