import React, {Component} from 'react';
import ChosenPost from "../FullPostInfo/ChosenPost"
import API from "../Services/API";

class AllPost extends Component {

    state = {post : []};
    _isMounted = false;

    async componentDidMount(){
        let {userId} = this.props;
        this._isMounted = true;
        await API.get(`posts/?userId=${userId}`)
            .then(res => {
                if (this._isMounted) {
                    const post = res.data;
                    this.setState({ post });
                }
            })
            .catch(error => console.log(error));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        let {post} = this.state;
        return (
            <div>
                {post.map(value => <ChosenPost key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default AllPost;