const { gql } = require("graphql-request")

const getDope = gql`
    query Dopes($where: DopeWhereInput) {
        dopes(
            where: $where
        ) {
            edges {
                node {
                    score
                    rank
                    opened
                    claimed
                    items {
                        fullname
                        type
                        tier
                        count
                        greatness
                        augmented
                    }
                }
            }
        }
    }
`;

module.exports = {
    getDope: getDope
}
