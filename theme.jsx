export default {
  logo: <span>Linux Blog</span>,
  project: {
    link: 'https://github.com/abdurakhman-uz/blog',
  },
  docsRepositoryBase: 'https://github.com/abdurakhman-uz/blog/',

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LinuxBlog" />
      <meta property="og:description" content="Uzbek Linux Blog" />
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },

  navigation: false,

  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://github.com/abdurakhman-uz/blog" target="_blank">Linux Blog</a>.
    </span>,
  },
  // sidebar: { 
  //   toggleButton: true

  // },
  // primaryHue: 223,
}