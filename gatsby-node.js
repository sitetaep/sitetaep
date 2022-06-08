exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allContentfulExpertise {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)

    data.allContentfulExpertise.edges.forEach((edge) => {
        const slug = edge.node.name
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/expertise/index.jsx`),
            context: { slug: slug }
        })
    })
}
