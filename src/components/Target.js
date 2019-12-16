import React, { Component } from 'react';
import reindeer from '../images/reindeer.png';

export default class Target extends Component {

	render() {

		return (

			<img

				alt='target'
				onClick={event => this.props.handleClick(event)}
				className='element-animation'
				draggable={false}
				src={reindeer}
				style={{

					height: '110px',
					position: 'absolute',
					top: this.props.top,
					left: this.props.left

				}}

			/>

		);

	};

};