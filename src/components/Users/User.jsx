// import React from 'react';
// import { NavLink } from "react-router-dom";
// import userPhoto from '../../assets/images/user.jpg';
// import styles from './Users.module.css';

// let User = ({user,followingInProgress,unfollow,follow}) => {
//     return (
//         <div>
//             <div>
//                 <div>
//                     <NavLink to={`/profile/${user.id}`}>
//                         <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
//                     </NavLink>
//                 </div>
//                 <div>
//                     <div>{user.followed ?
//                         <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button> :
//                         <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>}
//                     </div>
//                     <div>{user.name}</div>
//                     <div>{user.status}</div>
//                     <div>user.location.country</div>
//                     <div>user.location.city</div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default User;
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>)
}

export default User;