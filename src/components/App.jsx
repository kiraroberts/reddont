import React from 'react'
import Header from './Header'
import CommentList from './CommentList'
import NewCommentForm from './NewCommentForm'
import Error404 from './Error404'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterCommentList: []
    }
    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this)
  }

  handleAddingNewCommentToList(newComment){
    var newMasterCommentList = this.state.masterCommentList.slice()
    newMasterCommentList.push(newComment)
    this.setState({masterCommentList: newMasterCommentList})
  }

  render(){
    return (
      <div>
        <Header/>
        <NewCommentForm  onNewCommentCreation={this.handleAddingNewCommentToList} />
        <Switch>
          <Route exact path='/' render={() => <CommentList commentList= {this.state.masterCommentList}  />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App

// render={()=><NewCommentForm onNewCommentCreation={this.handleAddingNewCommentToList}