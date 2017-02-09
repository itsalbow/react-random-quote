import React, { Component } from 'react';
import quotes from '../../assets/quotes';
import styles from './styles.css';




export default class Quote extends Component {
	constructor(props){
		super(props);
	}


	render(){
		const image = require(`../../assets/${quotes[this.props.index].pic}`);
		const backgroundStyles = {
			backgroundImage: 'url(' + image + ')',
			backgroundSize: 'cover'
		}

		return (
			<div className={styles.box}>
				<h2>{quotes[this.props.index].quote}</h2>
				<h3>{quotes[this.props.index].author}</h3>
				<div className={styles.picture} style={ backgroundStyles }/>
			</div>
		)
	}
}
