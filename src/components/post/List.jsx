import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Detail from './Detail'

const LIMIT = 10

export default function App(props) {
  return (
    <InfiniteScroll
      dataLength={props.posts.length} //This is important field to render the next data
      next={()=>{props.onLimitChange(props.limit + LIMIT)}}
      hasMore={props.total !== props.posts.length}
      loader={<h4 className="text-center my-12">Loading...</h4>}
    >
      {props.posts.map((i,indexX)=>{ 
        return (
          <Link to={`/postDetail/${i.id}`} key={`div1-${indexX}`}>
              <Detail post={i}/>
          </Link>
        )
      })}
    </InfiniteScroll>
  )
}

