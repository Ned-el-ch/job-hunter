import React, { Component } from 'react';

export default class SearchForm extends Component {

	render() {

		return (

			<div>

				<form onSubmit={event => this.props.handleSubmit(event)}>

					<input

						type='text'
						placeholder='Search Jobs'
						onChange={event => this.props.handleChange(event)}
						value={this.props.value}

					/>
					<button type='submit'>Search</button>

				</form>

			</div>

		);

	};

};