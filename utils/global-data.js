export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'person name here.  could be BLOG_NAME';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'blog title here.  probably BLOG_TITLE';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'blog footer text here.  probably BLOG_FOOTER_TEXT';

  return {
    name,
    blogTitle,
    footerText,
  };
};
