import React, { Component } from 'react';
import background from '../images/background.jpg';

export default class Background extends Component {

	render() {

		return (

			<img
				className='background'
				src={background}
				alt='background'
				draggable={false}
				style={{zIndex: '-1'}}
			/>

		);

	};

};