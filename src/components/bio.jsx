/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;

        const aboutMeLink = (
          <Link style={{ boxShadow: `none` }} to="/about">
            Matt Gabor
          </Link>
        );
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(0.5),
            }}
          >
            <p>
              Personal Finance blog by {aboutMeLink}
              <br />
              Consumable knowledge bytes to chomp on your path to wealth. All posts are under
              500(-ish) words. Trying to help at least one millennial become more financially
              literate.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
