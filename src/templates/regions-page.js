import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import RegionsPageTemplate from '../components/RegionsPageTemplate'

const RegionsPage = ({data}) => {
    const { frontmatter } = data.markdownRemark
    console.log(data)
    return (
        <Layout>
            <RegionsPageTemplate
            metaDescription={frontmatter.meta_description}
            metaTitle={frontmatter.meta_title}
            title={frontmatter.title}
            regionsServed={frontmatter.regionsServed}
            regionsList={frontmatter.regionsList}
            />
        </Layout>
    )
}

export default RegionsPage

export const pageQuery = graphql`
query RegionsPage($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
        meta_description
        meta_title
        title
        regionsServed {
          title
          regionType {
            blurb
            title
          }
        }
        regionsList {
          region {
            areaName
            county
            zipCode
          }
        }
      }
    }
  }

`
