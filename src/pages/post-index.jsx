import _ from 'lodash'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import List from '../components/post/List'
import ListFilter from '../components/post/ListFilter'

function App() {
  const [ onload, setOnload ] = useState(false)
  const [ posts, setPosts ] = useState([])
  const [ categories, setCategories ] = useState([])
  const [ activeCategories, setActiveCategories ] = useState([])
  const [ limit, setLimit ] = useState(10)
  const [ total, setTotal ] = useState(0)

  //onload
  useEffect(()=>{
    if(onload === true){
      getData(10, [])
    }
  },[onload])
  
  //getdata if limit changed
  useEffect(()=>{
    getData(limit, activeCategories)
  },[limit])
  
  //set distinct list of categories
  useEffect(()=>{
    if(posts.length>0 && onload === true){
      let catObj = {}
      posts.forEach(i=>{
        i.categories.forEach(j=>{
          catObj[j.name] = j.name
        })
      })
      setCategories(_.map(catObj,x=>{ return { label:x, value:x } }))
    }
  },[posts])

  //onload get actions
  useEffect(()=>{ 
    setOnload(true) 
  },[])

  //get data from api
  const getData = (limit , filters) => {
    fetch('/api/posts')
    .then(res=>res.json())
    .then(res=>{
      if(filters.length>0 && res.posts.length > 0){
        let result = []
        res.posts.forEach(i=>{
          let notFound = false
          for (let y = 0; y < filters.length; y++) {
            if( _.map(i.categories, x=>x.name).indexOf(filters[y].value) < 0  ){
              notFound = true
            }
          }
          if(!notFound){ result.push(i) }
        })
        setTotal(result.length)
        setPosts(result.slice(0,limit))
      }else{
        setTotal(res.posts.length)
        setPosts(res.posts.slice(0,limit)||[])
      }
    })
    .catch(err=>{
      console.log({err})
    })
  }

  //handle categories changed 
  const onCategorySelect = (e) => {
    setActiveCategories(e)
    getData(10, e)
  }

  return <Layout>
      <ListFilter categories={categories} onCategorySelect={onCategorySelect}/>
      <List posts={posts} total={total} getData={getData} limit={limit} onLimitChange={e=>{setLimit(e)}}/>
    </Layout>;
}

export default App;
