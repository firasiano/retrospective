import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Thing from './Task.jsx';

export default class TheGood extends Component {
	handleSubmit(event) {
	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
	 
	    this.props.things.insert({
	      text,
	      createdAt: new Date(), // current time
	      owner: Meteor.userId(),           // _id of logged in user
	      username: Meteor.user().username,  // username of logged in user
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  	}

    renderThings() {
    	var things = this.props.things.find({}, { sort: { createdAt: -1 } }).fetch()
    	return (
    		<ul className="mdl-list">
	    		{things.map((thing) => (
			      <Thing key={thing._id} thing={thing} things={this.props.things} />
			    ))}
    		</ul>
    	);
  	}

	render(){
		return(
			<div className="mdl-card mdl-shadow--2dp">
			    <div className="mdl-card__title" style={{background: 'url('+this.props.image+') 0 0/100% 100%', color: 'white', height: '320px' }}>
		      		<h1 style={{fontSize: "40px"}} className="mdl-card__title-text">{this.props.title}</h1>
			    </div>
			    <div className="mdl-card__supporting-text">
		          { this.renderThings() }
			    </div>
			    <div className="mdl-card__actions mdl-card--border">
			    	<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
			            <div style={{width: "89%"}} className="mdl-textfield mdl-js-textfield">
						    <input className="mdl-textfield__input" type="text" id="thingText" ref="textInput"/>
						    <label className="mdl-textfield__label" htmlFor="thingText">{this.props.placeholder}</label>
					  	</div>
			      		<label style={{marginTop: "20px", color: "rgb(233,30,99)"}} onClick={this.handleSubmit.bind(this)} className="mdl-button mdl-js-button mdl-button--icon">
				      		<i className="material-icons">send</i>
				    	</label>
		            </form>
			    </div>
			  </div>
			)
	}
}