import React, {Component} from 'react';

export class Welcome extends Component {
	render(){
		return (
			<div className="mdl-card mdl-shadow--2dp">
			    <div className="mdl-card__title" style={{background: 'url('+this.props.image+') 0 0/100% 100%', 
			    										 height: '320px', 
			    										 color: '#eeeeee',
			    										 repeat:"no-repeat" }}>
		      		<h1 style={{fontSize: "40px"}} className="mdl-card__title-text">{this.props.title}</h1>
			    </div>
			    <div className="mdl-card__supporting-text">
		          { this.props.text }
			    </div>
			</div>
		);
	}
}
