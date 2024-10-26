import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'
const initialContainerBackgroundClassNames = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
  ]
  
  // Write your code here
  class Comments extends Component{
    state={name:"",comment:"",listItems:[],}
    setName=(event)=>{
        this.setState({name:event.target.value})
    }
    setComment=(event)=>{
        this.setState({comment:event.target.value})
    }
    setCommentList=(event)=>{
        event.preventDefault();
        const{name,comment,listItems}=this.state
        const commentItemList={
            name,
            profileIcon:name[0],
            comment,
            id: uuidv4(),
            isLike:false
        }
        if(name && comment){
            this.setState({
                listItems:[...listItems,commentItemList],
                name:"",
                comment:""
            })

        }

      
    }
    deleteComment=id=>{
        const{listItems}=this.state
        const resultedItems=listItems.filter(item=>item.id!==id)
        this.setState({listItems:resultedItems})
    }
    setLike=id=>{
        this.setState((prevstate)=>({
            listItems:prevstate.listItems.map(item=>item.id===id?{...item,isLike:!(item.isLike)}:item)
        }))
    }
   
    render(){
        const{name,comment,listItems}=this.state
        const Count=listItems.length
        return(
            <div className='comments'>
                  <h1>Comments</h1>
                <div className='static-comment'>  
              
                        <form onSubmit={this.setCommentList}>
                            <p>Say something  about 4.0 technologies</p>
                            <input type='text' placeholder='Name' value={name} onChange={this.setName}/>
                            <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here"  value={comment}onChange={this.setComment}></textarea>
                            <button type='submit'>Add Comment</button>
                        </form>
                           <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "/>
                </div>
                <div className='dynamic-comment'>
                     <p className='head'>comments {Count}</p>
                     {
                             listItems.map(item=><CommentItem Items={item} key={item.id} deleteComment={this.deleteComment} setLike={this.setLike} />)
                     }
                   
                </div>      
            </div>
        )
    }
  }
  export default Comments