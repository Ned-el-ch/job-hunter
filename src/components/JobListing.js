import React, { Component } from 'react';

export default class JobListing extends Component {

	render() {

		const title = this.props.details.title.replace(/<\/[^>]*>/, "").replace(/<[^>]*>/, "");
		const location = this.props.details.location.display_name
		const oof = this.props.details.description.split(' ')
		let description = oof.slice(0, 20)
		description.push('...')
		description = description.join(' ')
		description = description.replace(/<\/[^>]*>/, "").replace(/<[^>]*>/, "")
		const salary_min = Math.floor(this.props.details.salary_min / 1000)
		const salary_max = Math.floor(this.props.details.salary_max / 1000)
		const contract_type = this.props.details.contract_type
		const contract_time = this.props.details.contract_time//.split("_").join(" ")
		const redirect_url = this.props.details.redirect_url

		return (

			<div
				className='job-listing-card'
				style={this.props.gameRunning ? 
					{opacity: '10%'}
					: {backgroundColor: 'rgb(255, 255, 255, 0.3)', opacity: '100%'}
					}
			>

				<h3>{title}</h3>
				<h5>{location}</h5>
				<p>{description}</p>
				<h4>{contract_time} / {contract_type}</h4>
				<h4>£{salary_min}K - £{salary_max}K</h4>
				<h2>{this.props.gameRunning ? 'Apply Now' : <a href={redirect_url} target='_blank'>Apply Now</a> }</h2>

			</div>

		);

	};

};