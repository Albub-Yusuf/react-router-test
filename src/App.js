import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';
import PostDetails from './components/PostDeatails/PostDetails';

function App(){

  const listStyle = {
    marginLeft: '100px',
    
}

const logoStyle = {
    width:'40%',
    fontSize: '32px',
    fontWeight: '600px'
}

return(

  <Router>
    <div>
      <nav style={{display:'flex', alignItems:'center', justifyContent:'center', width:'80%', margin:'0 auto'}}>
        <div style={logoStyle}>Social Buddy</div>
        <div>
          <ul style={{  alignItems:'center', justfyContent:'center',display:'flex', float:'right',margin:'0 50px'}}>
            <li style={{marginLeft:'10px', marginRight:'20px',listStyleType:'none'}}>
              <Link to="/home">Home</Link>
            </li>
            <li style={{marginLeft:'10px', marginRight:'20px',listStyleType:'none'}}><Link to="/post/1">Post</Link></li>
            <li style={{marginLeft:'10px', marginRight:'20px',listStyleType:'none'}}><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
  </Router>


)

}

export default App;
