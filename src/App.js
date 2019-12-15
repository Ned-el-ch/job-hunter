import './App.css';
import React, { Component } from 'react';
import Crosshair from './components/Crosshair';
import TargetContainer from './components/TargetContainer';
import Background from './components/Background';
import SearchForm from './components/SearchForm';
import Timer from './components/Timer';

export default class App extends Component {

	constructor(props) {

		super(props);
		this.state = {

			gameStarted: false,
			gameRunning: false,
			cursorY: 0,
			cursorX: 0,
			searchQuery : '',
			currentScore : 0,
			jobResults: [],
			jobsEarned: 0,
			pointsForJobListing: 5000

		};

	};

	handleMouseMovement = (event) => {

		this.setState({cursorY: event.clientY - 35, cursorX: event.clientX - 35});

	}

	handleClick = (event) => {

		let stateObj = {currentScore: this.state.currentScore + 1000, jobsEarned: this.state.jobsEarned}

		if ((stateObj.currentScore)% this.state.pointsForJobListing === 0 ) {

			stateObj.jobsEarned += 1

		}

		event.persist()
		this.setState(stateObj)

	}

	getJobData = (jobName) => {

		const STR = jobName.split(' ').join('%20')
		const API_KEY = 'ec44f733b4678f42bf54aae5a7171531'
		const APP_ID = '90096d11'
		const URL = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=20&what=${STR}&content-type=application/json`
		fetch(URL)
			.then(res => res.json())
			.then(res => this.setState({jobResults: res.results}))

	}

	handleSubmit = (event) => {

		event.preventDefault();
		this.getJobData(this.state.searchQuery)
		this.setState({gameStarted: true, gameRunning: true})

	}

	handleChange = (event) => {

		this.setState({searchQuery: event.target.value})

	}

	stopGame = () => {

		this.setState({gameRunning: false})

	}

	render() {

		return (

			<div
				style={
					this.state.gameRunning ? 
					{
						cursor: 'none'
					} : null
				}
				onMouseMove={event => this.handleMouseMovement(event)}
			>


				{this.state.gameStarted ? 
				
				<div>

						<h1>Job Hunter</h1>
						<h2>{this.state.pointsForJobListing} points = 1 job listing!</h2>
						< Timer
							points={this.state.currentScore}
							stopGame={this.stopGame}
						/>
						< Background gameRunning={this.state.gameRunning}/>

						{this.state.gameRunning ? 
						< Crosshair

							top={this.state.cursorY}
							left={this.state.cursorX}
						/> : null
						}

						< TargetContainer 
							jobs={this.state.jobResults}
							jobsEarned={this.state.jobsEarned}
							handleClick={this.handleClick}
							gameRunning={this.state.gameRunning}
							/>

						

					</div>
				:
				<div>

					<h1>Job Hunter</h1>
					<h3>Everyone knows that to be a good employee, you have to be very quick with a mouse.</h3>
					<h3>In the fast-paced job market of today, only those with the best hand-eye mouse dexterity coordination survive.</h3>
					<h2>Enter the job you want, and get ready</h2>
						< SearchForm
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							value={this.state.searchQuery}
						/>

					</div>
			}

			</div>

		);

	};

};