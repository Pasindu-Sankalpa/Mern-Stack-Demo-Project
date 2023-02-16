import React, { Component } from 'react';
//Enable consuming REST APIs in a react app
import axios from 'axios';

//Define components as classes or functions
export default class App extends Component{
  //The constructor for a React component is called before it is mounted.
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

  //This is invoked immediately after a component is mounted
  componentDidMount(){
    this.retrivePosts();
  }

  retrivePosts(){
    axios.get('http://localhost:8000/posts').then(res=>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

  //Only required method in a class component
  //This will examine this.props and this.state and return relevant type
  render() {
    return (
      <div className='container'>
        <p>All Posts</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Topic</th>
              <th scope='col'>Description</th>
              <th scope='col'>Post Category</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
                <th scope='row'>{index+1}</th>
                <td>{posts.topic}</td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className='btn btn-warning' href='#'>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className='btn btn-danger' href='#'>
                    <i className='fas fa-trash'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    )
  }
}