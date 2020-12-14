import React, {Component} from 'react';
import ChosenUserInfo from "../ChosenUserInfo/ChosenUserInfo";
import API from "../Service/API";
import {withRouter} from 'react-router-dom';

class FullUserInfo extends Component {
    state = { chosenUser :null};

    async componentDidMount() {
        let {match:{params: {id}}}= this.props;
        await API.get(`users/${id}`)
            .then(res => {
                const chosenUser = res.data;
                this.setState({ chosenUser });
            })
            .catch(error => console.log(error));
    }

    render() {
        let {chosenUser} = this.state;
        return (
            <div>
                {chosenUser &&
                    <ChosenUserInfo item={chosenUser}/>
                }
            </div>
        );
    }
}

export default withRouter (FullUserInfo);