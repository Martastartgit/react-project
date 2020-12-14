import React, {Component} from 'react';


class ChosenUserInfo extends Component {
    render() {
        let {item} = this.props;

        const newStyle = {
            color: 'dimgrey',
            textAlign: 'left',
            width: '400px'
        };
        return (
            <div className="card">
                <div className="card-body" style={newStyle}>
                    <h4 className="card-title">{item.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{item.username}</h6>
                    <hr/>
                    <p className="card-text"><strong>Phone :</strong> {item.phone}</p>
                    <p className="card-text"><strong>Email:</strong> {item.email}</p>
                    <p className="card-text"><strong>Website :</strong> {item.website}</p>
                </div>
            </div>
        );
    }
}

export default ChosenUserInfo;