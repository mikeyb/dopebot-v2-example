const { gql } = require("graphql-request")

const getHustler = gql`
    query Hustler($where: HustlerWhereInput) {
        hustlers(where: $where) {
            edges {
                node {
                    name
                    type
                    title
                    svg
                    neck { fullname }
                    ring { fullname }
                    accessory { fullname }
                    drug { fullname }
                    hand { fullname }
                    weapon { fullname }
                    clothes { fullname }
                    vehicle { fullname }
                    waist { fullname }
                    foot { fullname }
                }
            }
        }
    }
`;

const getHustlerImage = gql`
    query Hustler($where: HustlerWhereInput) {
        hustlers(where: $where) {
            edges {
                node {
                    title
                    name
                    svg
                }
            }
        }
    }
`;

const getHustlerCount = gql`query Hustler { hustlers { totalCount } }`;

module.exports = {
    getHustler: getHustler,
    getHustlerImage: getHustlerImage,
    getHustlerCount: getHustlerCount
}