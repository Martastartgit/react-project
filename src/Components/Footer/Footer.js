import React, {Component} from 'react';

class Footer extends Component {
    render() {
        const myStyle = {
            textAlign :'left',
            color: 'black',
        };
        return (
            <div>
                <h2 style={myStyle}>React APP</h2>
            </div>
        );
    }
}

export default Footer;