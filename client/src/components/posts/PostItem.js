import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from "moment";
import { connect } from 'react-redux'


const PostItem = ({auth, post: {_id, text, name, avatar, user, likes, comments, date }}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <a href="profile.html">
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date">
                    Posted on {moment(date).format('DD/MM/YYYY')}
                </p>
                <button type="button" className="btn btn-light">
                    <i className="fas fa-thumbs-up"/>{' '}
                    <span>{
                        likes.length > 0 && (
                            <span>{likes.length}</span>
                        )
                    }</span>
                </button>
                <button type="button" className="btn btn-light">
                    <i className="fas fa-thumbs-down"/>
                </button>
                <Link to={`/post/${_id}`} className="btn btn-primary">
                    Discussion {
                    comments.length > 0 && (
                        <span className='comment-count'>{comments.length}</span>
                    )
                }
                </Link>
                {!auth.loading && user === auth.user._id && (
                    <button
                        type="button"
                        className="btn btn-danger">
                        <i className="fas fa-times"/>
                    </button>
                )}
            </div>
        </div>
    )
}

PostItem.prototype = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, {})(PostItem)