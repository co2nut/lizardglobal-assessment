export default function Layout(props){
  return (
    <div className="grid grid-cols-12 md:grid-cols-8">
      <div className="col-span-12 md:col-start-3 md:col-span-4 ">
        {props.children}
      </div>
    </div>)
}