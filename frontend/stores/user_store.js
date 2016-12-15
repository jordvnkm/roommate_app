const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");

let UserStore = new Store(AppDispatcher);

let _currentUser = null;


UserStore.__onDispatch = function(payload){
  switch (payload.actionType){
    case UserConstants.LOGIN:
      loginUser(payload.user);
      console.log('store');
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT:
      logoutUser();
      UserStore.__emitChange();
      break;
    case UserConstants.REMOVE_USER:
      logoutUser();
      UserStore.__emitChange();
      break;
  }
}


const loginUser = function(user){
  _currentUser = user;
  // console.log(_currentUser);
}

const logoutUser = function(){
  _currentUser = null;
}

UserStore.currentUser = function(){
  if (_currentUser){
    return Object.assign({}, _currentUser);
  }
  return null;
}

module.exports = UserStore;
