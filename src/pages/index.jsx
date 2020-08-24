import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlePreview from '../components/ArticlePreview';

export function BlogIndex({ data, location }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const posts = get(data, 'allContentfulBlogPost.edges');

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Byte Sized Wealth" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      <ul className="article-list">
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
