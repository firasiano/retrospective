import React, { Component, PropTypes } from 'react';
 
// Thing component - represents a single Thing
export default class Thing extends Component {
 
  deleteThisThing() {
    this.props.things.remove(this.props.thing._id);
  }

  toggleDone(){
  	this.props.things.update(this.props.thing._id ,{
  		$set: {done: !this.props.thing.done}
  	});
  }
 
  render() { 
  	var textDoneStyle = {
  		textDecoration: this.props.thing.done ? 'line-through' : 'none'
  	};

    return (
	<li className="mdl-list__item">
	  	<span className="mdl-list__item-primary-content">
	      	<strong style={{marginRight: "4px"}}>{this.props.thing.username}</strong>
	      	<span style={textDoneStyle}>{this.props.thing.text}</span>
		</span>
		{this.props.thing.owner === Meteor.userId() || Meteor.user().username === 'Firas' ?
			<span className="mdl-list__item-secondary-action">
	      		<label onClick={this.deleteThisThing.bind(this)} className="mdl-button mdl-js-button mdl-button--icon">
		      		<i className="material-icons">delete</i>
		    	</label>
		    </span> : ''}
		   	<span className="mdl-list__item-secondary-action">
	      		<label onClick={this.toggleDone.bind(this)} className="mdl-button mdl-js-button mdl-button--icon">
		      		<i className="material-icons">check</i>
		    	</label>
		    </span>
      </li>
      );
  }
}
 
Thing.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  thing: PropTypes.object.isRequired,
  things: PropTypes.object.isRequired
};