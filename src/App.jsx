import React from 'react';
import './App.css';
import Posts from './Posts';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: '',
      posts: [],
      page: 1
    }
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.page}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data
      })
    })
  }
  pageForward = () => {
    var newPage = this.state.page;
    newPage++;
    if (newPage >= 11) {
      newPage = 1
    }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.page}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data,
        page: newPage
      })
    })
   
  }
  pageBack = () =>{
  
    this.state.page --
    if (this.state.page <= 1) {
      this.state.page = 10
    }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.page}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data,
       
      })
    })
   
  }
  render() {
    console.log(this.state.page)
    return (
      <>
        <h1>Cycle Through Users:</h1>
       <div className="btn">
        <button onClick={()=> {this.pageBack()}}> Back </button>
        <button onClick={()=> {this.pageForward()}}> Forward </button>
      </div>
        <Posts posts={this.state.posts}/>
        <div>
          
        </div>
      </>
    )
  }
}
export default App;


