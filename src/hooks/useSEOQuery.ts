import { useStaticQuery, graphql } from 'gatsby';

const useSEOQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSEOQuery;
