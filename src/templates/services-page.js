import React from 'react'
import Layout from '../components/Layout'
import ServicesPageTemplate from '../components/ServicesPageTemplate'
import {graphql} from 'gatsby'

const ServicesPage = ({ data}) => {
    const { frontmatter } = data.markdownRemark
    console.log(data)
    return (
        <Layout>
            <ServicesPageTemplate
            title={frontmatter.title}
            subtitle={frontmatter.subtitle}
            meta_title={frontmatter.meta_title}
            meta_description={frontmatter.meta_description}
            asbesdosBlock={frontmatter.asbesdosBlock}
            homeInspectionBlock={frontmatter.homeInspectionBlock}
            leadBlock={frontmatter.leadBlock}
            radonBlock={frontmatter.radonBlock}
            wellWaterBlock={frontmatter.wellWaterBlock}
            pricingBlock={frontmatter.pricingBlock}
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
        asbesdosBlock {
          image
          title
        }
        homeInspectionBlock {
          image
          text
          title
        }
        leadBlock {
          image
          title
        }
        radonBlock {
          image
          title
        }
        wellWaterBlock {
          image
          title
        }
        pricingBlock {
          title
          listitem {
            text
            title
          }
        }
      }
    }
  }
`