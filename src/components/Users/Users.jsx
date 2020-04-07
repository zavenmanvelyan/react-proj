import React, { useEffect } from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({pageSize,totalUsersCount,currentPage,onPageChanged,users, ...props}) => {
    useEffect(()=>{console.log("Ufirst");
    },[])
    return <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} portionSize={10}/>
            <div>
            {
                users.map(u => {
                    return <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow}  />
                })
            }
            </div>
        </div>
}
export default Users;
