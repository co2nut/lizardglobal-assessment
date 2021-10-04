import moment from 'moment'

export default function App(props) {
  const { post } = props
  return (<>
    <div className="rounded-3xl grid grid-cols-8 gap-2 shadow-md bg-white m-5 p-3">
      <div className="col-span-2">
        <div className="grid grid-cols-1 gap-1">
          {/* author name */}
          <div className="col-span-1 justify-self-center"><img src={post.author.avatar} alt={post.author.name} /></div>
          {/* author avatar */}
          <div className="col-span-1 p-t"><p className="text-sm capitalize font-medium antialiased text-center">{post.author.name}</p></div>
        </div>
      </div>

      <div className="col-span-6">
        {/* post title */}
        <div className="grid grid-cols-1 gap-1">
          <div className="col-span-1 "><p className="capitalize font-medium antialiased">{post.title}</p></div>
        </div>
        {/* post categories */}
        <div className="flex flex-wrap">
          {post.categories.map((j, indexJ) => (<div key={`div2-${indexJ}`} className="bg-blue-200 mx-1 my-2 px-3 py-1 text-xs shadow rounded-2xl">{j.name}</div>))}
        </div>
        {/* post summary */}
        <div className="flex flex-wrap">
          <p className="antialiased">{post.summary}</p>
        </div>
      </div>
      
      <div className="col-span-12">
          <p className="text-xs antialiased text-right">{moment(post.publishDate).format('YYYY-MM-DD HH:mm')}</p>
      </div>
    </div>
  </>
  )
}