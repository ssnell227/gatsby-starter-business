import React from 'react'
import Layout from '../components/Layout'
import ServicesPageTemplate from '../components/ServicesPageTemplate'

const ServicesPage = ({ data}) => {
    const { frontmatter } = data.markdownRemark
    return (
        <Layout>
            <ServicesPageTemplate
            title={frontmatter.title}
             />
        </Layout>
    )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`