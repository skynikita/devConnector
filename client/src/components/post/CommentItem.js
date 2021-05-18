import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteComment} from "../../actions/post";
import {Link} from "react-router-dom";
import moment from "moment";

const CommentItem = ({
                         auth,
                         postId,
                         deleteComment,
                         comment: {_id, text, name, avatar, user, date},

                     }) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date">
                    Posted on {moment(date).format('DD/MM/YYYY')}
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={e => deleteComment(postId, _id)} type="button" className="btn btn-danger">
                        <i className="fas fa-times" />
                    </button>
                )}
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, {deleteComment})(CommentItem)
