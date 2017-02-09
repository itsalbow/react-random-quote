/**
 * App Component
 */

import React, { Component } from 'react';
import Quote from '../Quote';
import quotes from '../../assets/quotes';
import styles from './styles.css';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			index: 0
		}
		this.quoteHandler = this.quoteHandler.bind(this);
	}

	quoteHandler(){
		let old = this.state.index;
		let rand = Math.round( Math.random() * 18) + 0;

		if(rand === old) {
			console.log('samezies');
			this.quoteHandler();
		} else {
			this.setState({ index: rand });
		}
	}

	render(){
		return (
			<div className={styles.wrapper}>
				<h1>Words of Wisdom</h1>
				<a href='#' className={styles.myButton} onClick={this.quoteHandler}>
					<i className="fa fa-repeat" aria-hidden="true"></i>
				</a>

				<a href={`https://twitter.com/intent/tweet?text=${quotes[this.state.index].quote}+${quotes[this.state.index].author}&via=Al_Armz`}
					className={styles.myButton}
					target='_blank'
				>
					<i className="fa fa-twitter" aria-hidden="true"></i>
				</a>

				<Quote index={this.state.index}/>
			</div>
		);
	}
}
