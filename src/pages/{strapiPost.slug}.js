import React from 'react'
import Layout from '../components/Layout'
import { Link,graphql } from "gatsby";
import SEO from '../components/Seo';

export default function StrapiPost({data,location}) {

  return (
    <Layout>
        <SEO title={data.strapiPost.title} img={data.strapiPost.featured_image.url}/>
        <div className="container mx-auto">
        <h3 className="font-black">{data?.strapiPost?.title}</h3>
        <img src={data?.strapiPost?.featured_image?.url} alt="" />
        <div dangerouslySetInnerHTML={{ __html: data?.strapiPost?.content }}></div>
        </div>
    </Layout>
  )
}


 export const MyPost = graphql`
 query MyPost ($slug: String) {
    strapiPost(slug: {eq: $slug}) {
      content
      featured_image {
        url
      }
      id
      slug
      title
    }
  }
`