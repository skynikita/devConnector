import React, {Fragment} from 'react'
import moment from "moment";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteEducation} from "../../actions/profile";


const Education = ({education, deleteEducation}) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <th className="hide-sm">{edu.degree}</th>
            <td>
                {moment(edu.from).format('YYYY/MM/DD')} - {''}
                {edu.to === null ? ('Now') : (
                    moment(edu.to).format('YYYY/MM/DD')
                )}
            </td>
            <td>
                <button onClick={() => deleteEducation(edu._id)} className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    ))


    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>School</th>
                    <th className="hide-sm">Degree</th>
                    <th className="hide-sm">Years</th>
                    <th/>
                </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.prototypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,

}

export default connect(null, {deleteEducation})(Education)
