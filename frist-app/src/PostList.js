
import React,{Component} from 'react';
import './css/PostList.css';
import PostItem from './PostItem';

// const data = [
//     { title : '大家一起来讨论 React 吧' , author : '张三' , data : '2018-07-18'},
//     { title : '前端框架，你最爱哪一个' , author : '李四' , data : '2018-06-18'},
//     { title : 'Web App 的时代已经到来' , author : '王五' , data : '2018-05-18'},
// ];

//组件的生命周期
//挂载阶段  更新阶段  卸载阶段
// constructor()  


class PostList extends Component{
    constructor(props){

        super(props);
        this.state = {
            posts : []
        };
        this.time = null;
        this.headleVote = this.headleVote.bind(this);
    }

    componentDidMount(){
        this.time = setInterval( () => {
            this.setState({
                posts :[
                    { id:1 , title : '大家一起来讨论 React 吧' , author : '张三' , data : '2018-07-18' , vote:0},
                    { id:2 , title : '前端框架，你最爱哪一个' , author : '李四' , data : '2018-06-18' , vote:0},
                    { id:3 , title : 'Web App 的时代已经到来' , author : '王五' , data : '2018-05-18' , vote:0},
                ]
            })
        },1000)
    }

    componentWillUnmount(){
        if(this.time){
            clearInterval(this.time);
        }
    }

    headleVote(id){
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? {...item,vote: ++item.vote } : item;
            return newItem;
        });
        this.setState({
            posts
        })
    }

    

    render(){
        return (
            <div className="list">
                贴子列表
                <ul>
                    { this.state.posts.map(item => 
                    <PostItem key={item.id} post = {item} onVote={this.headleVote} />
                    )}
                </ul>
            </div>
        )
    }
}
export default PostList;