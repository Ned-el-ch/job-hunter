import React, { Component } from 'react';

export default class Timer extends Component {

	constructor(props) {

		super(props);
		this.state = {

			currentCount: 60,
			timerInterval: 1000

		};

	};

	timer() {

		this.setState({

			currentCount: this.state.currentCount - 1

		});

		if(this.state.currentCount < 1) {

			clearInterval(this.intervalId);
			this.props.stopGame();

		};

	};

	componentDidMount() {

		this.intervalId = setInterval(this.timer.bind(this), this.state.timerInterval);

	};

	componentWillUnmount(){

		clearInterval(this.intervalId);

	};

	render() {

		return (

			<div className='timerContainer'>

				<h1>Time: {this.state.currentCount}</h1>
				<h2>Score: {this.props.points}</h2>

			</div>

		);

	};

};