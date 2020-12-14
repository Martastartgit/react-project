import React, {Component} from 'react';

class ChosenPost extends Component {

    render() {
        let {item} = this.props;
        let newStyle = {
            color: 'dimgrey',
            textAlign: 'left'
        }

        return (
            <div className={'card-group'} style={newStyle}>
                <div className={'card'}>
                    <div className={'card-body'}>
                        <h4 className={'card-title'}>{item.id}.{item.title}</h4>
                        <p className={'card-text'}>{item.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChosenPost;