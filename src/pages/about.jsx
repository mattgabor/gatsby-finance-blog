import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 Format:
  1. Who are you and why are you writing this blog? 
  2. What makes you different and unique? 
  3. Why should someone care about you? 
  4. What is a big challenge you had to overcome? Is there a big mistake you've made? 
  5. How are you going to help the reader thats unique? 
  6. How can the audience help you? 
  7. What can someone expect from your blog?
 */

function AboutPage({ data, location }) {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div>
        Dog lover, husband, outdoor enthusiast{' '}
        <span role="img" aria-label="Dog">
          🐶
        </span>
        <span role="img" aria-label="Couple">
          👫
        </span>
        <span role="img" aria-label="Tree">
          🌲
        </span>
        . Just a regular guy with some financial tips I learned over the years. No formal education
        in finance or industry exposure. Most content can be found elsewhere on the internet, but
        synthesized by me and credit given where it's due.
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
