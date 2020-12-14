import React, {Component} from 'react';
import User from "../User/User";
import FullUserInfo from "../FullInfoUser/FullUserInfo";
import AllPost from "../All-post/AllPost";
import './AllUsers.css';
import API from '../Services/API';
import {Route, withRouter} from "react-router-dom";


class AllUsers extends Component {
    state = {user: []};

    async componentDidMount() {
        await API.get(`users`)
            .then(res => {
                const user = res.data;
                this.setState({user});
            })
            .catch(error => console.log(error));
    }

    render() {
        let {user} = this.state;
        let {match: {url}} = this.props;

        return (
            <div className={'container-fluid '}>
                <h1 className={'title'}>Users</h1>
                <div className={'wrap'}>
                    <div className={'d-flex justify-content-between'}>
                        <div>
                            {user.map(value => <User key={value.id} item={value}/>)}
                        </div>
                        <div>
                            <Route path={`${url}/:id/info`} render={(props) => {
                                const {match: {params: {id}}} = props;
                                return <FullUserInfo key={id}/>
                            }}/>
                        </div>
                    </div>
                    <div>
                        <Route path={`${url}/:id/post`} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <AllPost key={id} userId={id}/>
                        }}/>

                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(AllUsers);