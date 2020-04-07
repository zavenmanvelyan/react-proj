import profileReducer, { addPostActionCreator,deletePost } from "./profile-reducer";

it ('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra");
    let initialState = {
        posts: [
            { id: 1, message: 'Hi,how are you?', likescount: '23' },
            { id: 2, message: 'It\'s my first post', likescount: '12' }
        ],
    }
    let newState = profileReducer(initialState, action);
    expect(newState.posts[2].message).toBe("it-kamasutra");
})
it ('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra");
    let initialState = {
        posts: [
            { id: 1, message: 'Hi,how are you?', likescount: '23' },
            { id: 2, message: 'It\'s my first post', likescount: '12' }
        ]
    }
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
});
it('length of messages should be decremented', () => {
    let action = deletePost(1);
    
    let initialState = {
        posts: [
            { id: 1, message: 'Hi,how are you?', likescount: '23' },
            { id: 2, message: 'It\'s my first post', likescount: '12' }
        ],
    }

    let newState = profileReducer(initialState,action);
    expect(newState.posts.length).toBe(1);
  });
  