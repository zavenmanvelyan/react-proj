import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0`,
    headers:{
        "API-KEY":"37698fbe-f00c-48a8-baca-115b7a8d7156"
    }
});

export let usersApi = {
    getUsers(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        return instance.post(`/follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`);
    },
    getProfile(userId){
        console.warn('Obsolete method.Please use profileApi');
        return instance.get(`/profile/${userId}`);
    }
}

export let profileApi = {
    getProfile(userId){
        return instance.get(`/profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`/profile/status`,{status:status});
    }
}

export let authApi = {
    me() {
        return instance.get("/auth/me");
    },
    login(email,password,rememberMe){
      return instance.post("/auth/login",{email,password,rememberMe});
    },
    logout(){
        return instance.delete("/auth/login");
    }
}