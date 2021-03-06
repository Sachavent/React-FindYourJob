import React from 'react';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row`}>
          <h1 className={`mdl-layout-title ${s.title}`} >
            FIND YOUR JOB
          </h1>
        </div>
      </header>
    );
  }

}

export default Header;
