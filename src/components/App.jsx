import { BrowserRouter, Route } from 'react-router-dom';
import PostDetail from '../pages/post-detail';
import PostIndex from '../pages/post-index';

function App() {
  return (<BrowserRouter>
    <Route path="/" exact component={PostIndex}/>
    <Route path="/postDetail/:id" exact component={PostDetail}/>
  </BrowserRouter>);
}

export default App;
