import { useStaticQuery, graphql } from 'gatsby';

function useSEOQuery() {
  const { site } = useStaticQuery(
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

  return site;
}

export default useSEOQuery;
