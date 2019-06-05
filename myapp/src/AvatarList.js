import React from 'react';
import ReactDOM from 'react-dom';

const AvatarList = (props)=>{
	return (
		<div className="avatarstyle ma4 bg-light-purple dib pa2 tc grow <shadow-4></shadow-4>">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
			<h1>  	{props.name} </h1>
			<p>{props.work}</p>
		</div>
		);
}
export default AvatarList;