import React,{useState,useEffect} from "react";
import Layout from "../../components/Layout";

const TrendsPage = ({location}) => {

  const [data,setData]=useState([])
  const OsTrendsReportId=location.pathname
  const id=location.state.url

  console.log(id)

  const getTrendsReport = ()=>{
    fetch(`https://websiteserver-ds7cf.ondigitalocean.app/posts/${id}`)
  //fetch(`http://localhost:1337/os-trends${result}`)
  .then(res =>  res.json())
  .then(response =>  setData(response))
}

    useEffect(()=>{
      getTrendsReport()
    },[id])

    console.log("data",data)
  
  return (
    <Layout>
      <section className="">
        <div className="container mx-auto py-10">
          <h3 className="text-5xl font-black">{data.title}</h3>
          <img src={data.featured_image.formats.small.url} alt="" />
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
      </section>
    </Layout>
  );
};


export default TrendsPage;
