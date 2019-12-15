import React, { Component } from 'react';
import crosshair from '../images/crosshair.png';

export default class Crosshair extends Component {

	render() {

		return (

			<img

				alt='crosshair'
				draggable={false}
				src={crosshair}
				style={{

					height: '70px',
					position: 'absolute',
					// zIndex: 1,
					opacity : 0.7,
					top: this.props.top,
					left: this.props.left

				}}

			/>

		);

	};

};