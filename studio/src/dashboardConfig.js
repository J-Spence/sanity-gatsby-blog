export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f96928e0a39519762939f75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b56c4u1w',
                  apiId: '46714b7c-c715-4217-97ea-56c15ec3900c'
                },
                {
                  buildHookId: '5f96928e4b8347af4798a2ec',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f7a6gtzu',
                  apiId: '6b9e2e4a-51b2-4bdb-b46f-57c998c4952a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/J-Spence/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f7a6gtzu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
