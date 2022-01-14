import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';


const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}

        />
    );
};

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        // console.log('RENDER PROFILE');
        return (
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => { 
// console.log('mapStateToProps PROFILE')
    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



