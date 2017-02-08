import React, { Component } from 'react';
import quotes from '../assets/quotes';
import styles from './styles.css';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			index: 0
		}
	}

	clickHandler(){
		let old = this.state.index;
		let rand = Math.round( Math.random() * 18) + 0;

		if(rand === old) {
			console.log('samezies');
			this.clickHandler();
		} else {
			this.setState({ index: rand });
		}

	}

	render(){
		return (
			<div>
				<h1 className={styles.red}>{quotes[this.state.index].quote}</h1>
				<h2>{quotes[this.state.index].author}</h2>

				<button onClick={this.clickHandler.bind(this)}>Random Quote</button>
			</div>
		);
	}
}
