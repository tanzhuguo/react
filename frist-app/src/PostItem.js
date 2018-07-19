
import React , {Component} from 'react';
//props 组件  和 state组件
// class PostItem extends Component{

//     constructor(props){   //构造方法
//         super(props);  // 用来完成React 组件的初始化工作
//         this.state = {  // 定义组件的状态
//             vote:0
//         }
//     }
//     // 点击事件 处理
//     handleclick() {
//         let vote = this.state.vote;
//         vote++;
//         this.setState({
//             vote:vote
//         })
//     }
//     render(){
//         const {title , author , data} = this.props;
//         return(
//             <li>
//                 <div>{title}</div>
//                 <div>创建人：<span>{author}</span></div>
//                 <div>创建时间：<span>{data}</span></div>
//                 <div>
//                     <button onClick = {() => {this.handleclick()}}>点赞</button> 
//                     &nbsp;
//                     <span>{this.state.vote}</span>
//                 </div>
//             </li>
//         )
//     }
// }

function PostItem(props){
    const handleClick = () => {
        props.onVote(props.post.id);
    }
    const {post} = props;
    return(
        <li>
            <div>{post.title}</div>
            <div>创建人：<span>{post.author}</span></div>
            <div>创建时间：<span>{post.data}</span></div>
            <div>
                <button onClick = {handleClick}>点赞</button> 
                &nbsp;
                <span>{post.vote}</span>
            </div>
        </li>
    )
}

export default PostItem;