import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import a from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile,status,updateStatus}) => {
    if(profile == null || profile == undefined){
        return <Preloader />
    }
    else {
        return <div>
            <div>
                {/*<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
            </div>
            <div className={a.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                ava + description
            </div>
        </div>
    }
}

export default ProfileInfo;