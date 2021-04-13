/* eslint-disable react/no-danger */
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Author from './Author';
import Layout from './Layout';
import SEO from './SEO';
import { rhythm, scale } from '../utils/typography';
import formatPublishedDate from '../utils/formatPublishedDate';

interface BlogPostProps {
  data: { contentfulBlogPost: ContentfulPost };
  pageContext: {
    previous?: ContentfulPost;
    next?: ContentfulPost;
  };
  location: LocationType;
}

function BlogPostTemplate({ data, pageContext, location }: BlogPostProps) {
  const { previous, next } = pageContext;

  const post = data.contentfulBlogPost;
  const pageTitle = post.title;
  const pageDescription = post.description.childMarkdownRemark.excerpt;
  const publishedDate = formatPublishedDate(post.publishDate);
  const heroImage = post.heroImage.gatsbyImageData;
  const postAuthor = post.author;
  const bodyHTML = post.body.childMarkdownRemark.html;

  return (
    <Layout location={location} title={pageTitle}>
      <SEO title={pageTitle} description={pageDescription} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {pageTitle}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {publishedDate}
          </p>
        </header>
        <GatsbyImage image={heroImage} alt={pageTitle} />
        <section
          dangerouslySetInnerHTML={{
            __html: bodyHTML ?? '',
          }}
        />
        <hr style={{ marginBottom: rhythm(1) }} />
        <footer>
          <Author author={postAuthor} />
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
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate
      heroImage {
        gatsbyImageData
      }
      description {
        childMarkdownRemark {
          excerpt
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        title
        company
        shortBio {
          shortBio
          childMarkdownRemark {
            html
          }
        }
        github
        facebook
        # twitter
        image {
          gatsbyImageData
        }
      }
    }
  }
`;
