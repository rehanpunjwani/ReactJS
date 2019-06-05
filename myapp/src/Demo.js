import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
// class Demo extends Component {

// 	render(){
// 		return (
// 			<div className="myclass">
// 			<h1> Hello {this.props.name} </h1>
// 			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
// 			Ab dignissimos velit, at quasi laudantium error, iure explicabo. Ex doloremque
// 			 architecto ducimus cumque amet similique voluptatibus. Porro, hic! Id, alias, reprehenderit.</p>
// 			</div>
// 		);
// 	}
// } 	

/*Functional Component */
const Demo = (props)=>{
	return (
			<div className="myclass">
			<h1> Hello {props.name} </h1>
			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Ab dignissimos velit, at quasi laudantium error, iure explicabo. Ex doloremque
			 architecto ducimus cumque amet similique voluptatibus. Porro, hic! Id, alias, reprehenderit.</p>
			</div>
		)
}
export default Demo;