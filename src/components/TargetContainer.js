import React, { Component } from 'react';
import Target from './Target';
import JobListingsContainer from './JobListingsContainer';

export default class TargetContainer extends Component {

	constructor() {

		super();
		this.state = {

			targetPositions: [],
			targetsSpawned: 0,
			canSpawn: 15,
			spawnInterval: 300

		};

	};

	spawnTarget = () => {

		if (this.state.canSpawn > 0) {

			let arr = [...this.state.targetPositions]
	
			arr.push({ yPos: Math.ceil(Math.random() * 500) + 100, alive: true})
	
			this.setState({
				targetPositions: arr,
				targetsSpawned: this.state.targetsSpawned + 1,
				canSpawn: this.state.canSpawn - 1
			})

		};

	};

	handleClick = (event) => {

		event.persist()

		let arr = [...this.state.targetPositions]
		let index = parseInt(event._targetInst.return.key);
		arr[index].alive = false;
		this.props.handleClick(event)
		this.setState({
			targetPositions: arr,
			canSpawn: this.state.canSpawn + 1,
			spawnInterval: Math.ceil(Math.random() * 300) + 300
		})

	}

	componentDidMount() {

		this.intervalId = setInterval(this.spawnTarget, this.state.spawnInterval);

	};

	componentWillUnmount(){

		clearInterval(this.intervalId);

	};

	render() {

		return (

			<div>

				{(this.props.gameRunning) ?

					this.state.targetPositions.map((obj, index) => {

						if (obj.alive && this.state.canSpawn > 0) {

							return (<Target

										handleClick={this.handleClick}
										left={'1500px'}
										top={obj.yPos}
										key={index}
										alive={obj.alive}
	
									/>)

						} else if (obj.alive && this.state.canSpawn === 0) {

							return (<Target

								handleClick={this.handleClick}
								left={'1500px'}
								top={obj.yPos}
								key={index}
								alive={obj.alive}

							/>)

						} else if (!obj.alive) {

							return null

						}

					})
					: <h1 className='success-message'>"You earned {this.props.jobsEarned} job listing{this.props.jobsEarned === 1 ? '' : 's'}, you suck"</h1>

				}

				< JobListingsContainer
					jobs={this.props.jobs}
					jobsEarned={this.props.jobsEarned}
					gameRunning={this.props.gameRunning}
				/>

			</div>

		);

	};

};