module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.taep.fr',
        title: 'TAEP'
    },
    plugins: [
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -100
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'cuoNXR7SmfzefSFVGLegEv50CNvuznKJuWL4ZngmfB8',
                spaceId: 'qk3eej8c7lsu'
            }
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
      	    resolve: 'gatsby-transformer-sharp',
            options: {
        	checkSupportedExtensions: true,
      	    },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-120800801-1'
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        }
    ]
}
