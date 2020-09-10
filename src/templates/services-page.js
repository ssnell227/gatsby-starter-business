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
            subtitleTop={frontmatter.subtitleTop}
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
        subtitleTop
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
        asbesdosBlock {
          listitem {
            text
          }
          image
          title
        }
        leadBlock {
          image
          title
          listitem {
            text
          }
        }
        radonBlock {
          image
          title
          listitem {
            text
          }
        }
        wellWaterBlock {
          image
          title
          listitem {
            text
          }
        }
        pricingBlock {
          homeInspectionPricing {
            pricing {
              price
              text
            }
            title
          }
          additionalPricing {
            pricing {
              item
              price
            }
            title
          }
          title
        }
      }
    }
  }
`