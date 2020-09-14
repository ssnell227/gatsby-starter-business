import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => {
  const { markdownRemark: {frontmatter} } = data 
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        title={frontmatter.title}
        aboutBlockItem={frontmatter.aboutBlockItem}
        aboutImage={frontmatter.aboutImage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        aboutBlockItem {
          blurb
          image
          subtitle
          title
        }
        aboutImage
      }
    }
  }
`
