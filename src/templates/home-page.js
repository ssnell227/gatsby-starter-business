import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(data)

  return (
    <Layout>
      <HomePageTemplate
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        carousel={frontmatter.carousel}
        whyblock={frontmatter.whyblock}
        services={frontmatter.services}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
query IndexPage($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      meta_title
      meta_description
      heading
      description
      carousel {
        image1
        image2
        image3
      }
      whyblock {
        title
        whyimage
        whylist {
          text
          whyitemtitle
        }
      }
      services {
        image
        title
      }
    }
  }
}


`
