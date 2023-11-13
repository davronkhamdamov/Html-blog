export default {
  logo: <span>Html Blog</span>,
  project: {
    link: "https://github.com/davronkhamdamov/Html-blog.git",
  },
  docsRepositoryBase: "https://github.com/davronkhamdamov/Html-blog.git",

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HtmlBlog" />
      <meta property="og:description" content="Uzbek html Blog for beginners" />
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },

  navigation: false,

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©
        <a href="https://github.com/davronkhamdamov/Html-blog.git" target="_blank">
          Html Blog
        </a>
        .
      </span>
    ),
  },
  sidebar: {
    toggleButton: true

  },
  primaryHue: 223,
};
