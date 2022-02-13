import React, {useEffect,useState} from "react";
import { Link,graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from '../components/Seo'




// markup
const IndexPage = ({data}) => {


/* const [data,setData]=useState([]) */

/* useEffect(()=>{
  fetch('https://websiteserver-ds7cf.ondigitalocean.app/posts')
  .then(res=>res.json())
  .then(response=>setData(response))
},[])
 */
const featured_image=data && data[0]?.featured_image.formats.large.url


  return (
    <Layout>
      <SEO title="Homepage" img={featured_image}/>
      <section>
        <div className="container mx-auto">
        <h3>featured_image</h3>
            <img src={featured_image} alt="" />
          <div className="w-1/3 bg-white rounded-lg shadow">
           
            
            <ul className="divide-y-2 divide-gray-100">
             {data.allStrapiPost.edges.map((x,index)=>{
               return (
                <li
                className="p-3 my-2 "
                key={x.node.strapiId}
              
              >
                <span>
                  <a>
                    <Link to={`/${x.node.slug}`}
                 
                    state={{ url: x.node.slug }}>{x.node.title}</Link>
                  </a>
                </span>
              </li>
               )
             })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiPost {
      edges {
        node {
          id
          featured_image {
            url
          }
          slug
          title
          content
        }
      }
    }
  }
`

export default IndexPage;
