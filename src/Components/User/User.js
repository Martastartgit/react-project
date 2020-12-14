import React, {Component} from 'react';
import './User.css'
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {match : {url},item} = this.props;

        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th scope="row" className={'table-th'}>{item.id}</th>
                        <td className={'table-td'}>
                            {item.name}
                            <div>
                                <Link to={`${url}/${item.id}/info`} className ={'btn btn-info'}>Info</Link>
                                <Link to={`${url}/${item.id}/post`} className ={'btn btn-info'} style ={{background:'green'}}>Post</Link>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default withRouter(User);