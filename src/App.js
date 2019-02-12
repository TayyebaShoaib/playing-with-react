import React, { Component } from 'react';
import './App.css';

const list = [ 
	{ 
		title: 'React', 
		url: 'https://reactjs.org/', 
		author: 'Jordan Walke', 
		num_comments: 3, 
		points: 4, 
		objectID: 0, 
	}, 
	{ 
		title: 'Redux', 
		url: 'https://redux.js.org/', 
		author: 'Dan Abramov, Andrew Clark', 
		num_comments: 2, 
		points: 5, 
		objectID: 1,
	}
];			

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: list
		};
	}
	render() {
		const helloWorld = "Hello World!";
		return (
			<div className="App">
				{
					list.map(item => 
						<ul key={item.objectID}>
							<li><a href="{item.url}">Title: {item.title}</a></li>
							<li>Author: {item.author}</li>
							<li>Comments: {item.num_comments}</li>
							<li>Points: {item.points}</li>
						</ul>
					)
				}
			</div>
		);
	}
}

export default App;
