import React, { Component } from 'react';
import JobListing from './JobListing';

export default class JobListingsContainer extends Component {

	renderJobs = () => {

		return this.props.jobs.map((job, index) => {

			if (index < this.props.jobsEarned) {

				return (<JobListing details={job} key={index} gameRunning={this.props.gameRunning}/>);

			} else {

				return null;

			};

		});

	};

	render() {

		return (

			<div>

				{this.props.gameRunning ? null : this.renderJobs()}

			</div>

		);

	};

};