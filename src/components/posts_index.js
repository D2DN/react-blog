import React from 'react';
import _ from "lodash";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
           return(
                <li className='list-group-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
           );
        });
    }

    render() {
        return (
            <div>
                <div className='title-index-post'>
                    <h3>Posts</h3>
                    <Link to='/posts/new' className='btn btn-primary'>Add post</Link>
                </div>

                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
