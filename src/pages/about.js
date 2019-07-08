import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

function AboutPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div>
        Dog lover, husband, outdoor enthusiast 🐶👫🌲. Just a regular guy with some financial tips I
        learned over the years. No formal education in finance or industry exposure. Most content
        can be found elsewhere on the internet, but synthesized by me and credit given where it's
        due. 1. Who are you and why are you writing this blog? 2. What makes you different and
        unique? 3. Why should someone care about you? 4. What is a big challenge you had to
        overcome? Is there a big mistake you've made? 5. How are you going to help the reader thats
        unique? 6. How can the audience help you? 7. What can someone expect from your blog?
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

// 1. Who are you and why are you writing this blog?
// 2. What makes you different and unique?
// 3. Why should someone care about you?
// 4. What is a big challenge you had to overcome? Is there a big mistake you've made?
// 5. How are you going to help the reader thats unique?
// 6. How can the audience help you?
// 7. What can someone expect from your blog?
