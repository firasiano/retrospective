import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Goods, Bads } from '../api/things.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
 
import TheGood from './TheGood.jsx';
import { Welcome } from './Welcome.jsx';
 
// App component - represents the whole app
class App extends Component {

  renderTheGood() {
    return <TheGood things={this.props.goods} 
      image="/images/hope.jpg"
      title="Hopes"
      placeholder="I hope to..." />;
  }
  renderTheBad() {
    return <TheGood things={this.props.bads} 
      image="/images/concern.jpg"
      title="Concerns"
      placeholder="I'm concerned that..." />;
  }
  renderThanks(){
    return <Welcome title="Thanks Michael" text="Thanks Michael for visiting us in Chicago"
      image="http://www.chicagocvb.com/home_main_small_winter05.gif" />
  }
  renderWelcome(){
    return <Welcome title="Welcome Aarti" text="Aarti, Welcome to GSO team" 
      image="http://www.gso.uri.edu/wp-content/uploads/2015/06/GSO-Logo-500.png" />
  }

  componentDidMount() {
    setTimeout(function(){
      componentHandler.upgradeDom()
    }, 2000);
  }
 
  render() {
    return (
      <div className="container mdl-layout mdl-js-layout">
      <header className="mdl-layout__header mdl-layout__header--transparent" style={{background: 'rgb(233,30,99)'}}>
        <div className="mdl-layout__header-row">
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link"><AccountsUIWrapper /></a>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <span className="mdl-layout-title">We will make EPC great again</span>
        </div>
      </header>

      <div className="mdl-layout__content ">
        <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col">
            { !this.props.currentUser ? this.renderThanks() : '' }
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            { !this.props.currentUser ? this.renderWelcome() : '' }
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            { this.props.currentUser ? this.renderTheGood() : '' }
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            { this.props.currentUser ? this.renderTheBad() : '' }
          </div>
        </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  goods: PropTypes.object.isRequired,
  bads: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
  return {
    goods1: Goods.find({}, { sort: { createdAt: -1 } }).fetch(),
    bads1: Bads.find({}, { sort: { createdAt: -1 } }).fetch(),
    goods: Goods,
    bads: Bads,
    currentUser: Meteor.user(),
  };
}, App);
