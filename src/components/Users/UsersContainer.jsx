import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, toggleFollowingProgress,
    getUsers,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getStateUsers,
    getTotalUsersCount
} from '../../redux/users-selectors';
import {compose} from "redux";


class UsersAPIComponent extends React.Component {
    onPageChanged = (pageNumber) => {
        const {pageSize,getUsers} = this.props;
        getUsers(pageNumber,pageSize);
    }

    render() {
        return <div>
        {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} users={this.props.users} follow={this.props.follow}
                       unfollow={this.props.unfollow} onPageChanged={this.onPageChanged.bind(this)}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}/>}
</div>
    }
    

    componentDidMount() {
        const {pageSize,currentPage} = this.props
        this.props.getUsers(currentPage, pageSize);
    }
};

let mapStateToProps = (state) => {
    return {
        users: getStateUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow: follow, unfollow,
        setCurrentPage, getUsers, toggleFollowingProgress
    })
)(UsersAPIComponent);

