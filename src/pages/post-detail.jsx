import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import Detail from '../components/post/Detail'

export default function App (){
  let { id } = useParams();
  const [post, setPost] = useState(null)

  useEffect(()=>{
    fetch(`/api/posts/${id}`)
    .then(res=>res.json())
    .then(res=>{ setPost(res) })
    .catch(err=>{
      console.log({err})
    })
  },[])
  
  return (<Layout>
    <Link to="/"><p className="m-5">Back</p></Link>
     {post?<Detail post={post}/>:null}
    </Layout>)
}