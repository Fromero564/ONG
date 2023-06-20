import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/PanelStyle.css';

class Panel extends Component {
render(){
    const panelStyle = {
        backgroundColor: this.props.color,
      };

    return(
        <div className="panel" style={panelStyle}>
        <h2>Total de {this.props.name}</h2>
        <div className='icon'>
        <FontAwesomeIcon icon={this.props.icon}  />
        </div>
        <div className='text'>
        <h1>{this.props.total}</h1>
        </div>
        </div>
    )
}
}

export default Panel;