import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';
import Img from 'gatsby-image';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import heroStyles from '../components/hero.module.css';

function BlogPostTemplate({ data, location }) {
  const post = get(data, 'contentfulBlogPost');
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <div className={heroStyles.hero}>
        {post.heroImage && (
          <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.fluid} />
        )}
      </div>
      <h1>{post.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.publishDate}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: post.body.childMarkdownRemark.html,
        }}
      />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
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
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
