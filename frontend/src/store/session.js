import { fetch } from './csrf.js';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

export const login = ({ credential, password }) => async (dispatch) => {
  const res = await fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });
  dispatch(setUser(res.data.user));
  return res;
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch('/api/session');
  dispatch(setUser(res.data.user));
  return res;
};

export const signup = (user) => async (dispatch) => {
  const { profileImageUrl, profileImageUrls, name, username, email, password } = user;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("username", username);
  formData.append("email", email)
  formData.append("password", password)

  // for multiple files
  if (profileImageUrls && profileImageUrls.length !== 0) {
    for (let i = 0; i < profileImageUrls.length; i++) {
      formData.append("profileImageUrls", profileImageUrls[i]);
    }
  }

  // for single file
  if (profileImageUrl) formData.append("profileImageUrl", profileImageUrl);

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  dispatch(setUser(response.data.user));
  return response;
};

// Update user
export const updateUser = ({ userId, name, username, email, bio, profileImageUrl }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("name", name)
  formData.append("username", username)
  formData.append("email", email)
  formData.append("bio", bio)

  if (profileImageUrl) {
    formData.append("profileImageUrl", profileImageUrl)
  }

  const response = await fetch(`/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  })

  dispatch(setUser(response.data.user))
}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
