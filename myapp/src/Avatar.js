import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import AvatarList from './AvatarList';	
import 'tachyons'; 

/*const Avatar = (props)=>{


	const avatarlistarray = [{
		id:1,
		name :"rehan",
		work: "web developer"
	},
	{
		id:2,
		name :"noreen rehman",
		work: "Backend"
	},
	{
		id:3,
		name :"alee",
		work: "Database"
	},
	{
		id:4,
		name :"rahill",
		work: "FrontEnd developer"
	}
	]

	const arraycard = avatarlistarray.map((avatar, i)=>{
		return <AvatarList name={avatarlistarray[i].name} work = {avatarlistarray[i].work}/>
	})
		return (
			<div className="mainpage">
			<h1>Welcome to My Channel</h1>
			{arraycard}
			<button>Subscribe</button>
			</div>
		);
	
}*/
class Avatar extends Component {
	constructor(){
		super();
		this.state = {
			name :  "Welcome to My Website"
		}
	}

	namechange(){
		this.setState({
			name: "Hello Noreen"
		})
	}
render(){
	const avatarlistarray = [{
		id:1,
		name :"rehan",
		work: "web developer"
	},
	{
		id:2,
		name :"noreen rehman",
		work: "Backend"
	},
	{
		id:3,
		name :"alee",
		work: "Database"
	},
	{
		id:4,
		name :"rahill",
		work: "FrontEnd developer"
	}
	]

	const arraycard = avatarlistarray.map((avatar, i)=>{
		return <AvatarList key={i} name={avatarlistarray[i].name} work = {avatarlistarray[i].work}/>
	})
		return (
			<div className="mainpage">
			<h1><a href="http://www.gmail.com">{this.state.name}</a></h1>
			{arraycard}
			<button onClick= {()=>{this.namechange()}}>Subscribe</button>
			</div>
		);
}
}
export default Avatar;