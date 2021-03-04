/* eslint-disable react/no-danger */
import { Link, graphql } from 'gatsby';
import Bio from '../Bio';
import Layout from './Layout';
import SEO from './SEO';
import { rhythm, scale } from '../../utils/typography';

interface BlogPostProps {
  data: SiteDataType;
  pageContext: {
    previous: ContentfulPost;
    next: ContentfulPost;
  };
  location: LocationType;
}

function BlogPostTemplate({ data, pageContext, location }: BlogPostProps) {
  const post = data.contentfulBlogPost;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title ?? siteTitle}
        description={post.body.childMarkdownRemark.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.publishDate}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html ?? '',
          }}
        />
        <hr style={{ marginBottom: rhythm(1) }} />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                {`← ${previous.title}`}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {`${next.title} →`}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
