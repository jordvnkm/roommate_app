const UserApiUtil = require('../utils/user_api_util');
const AppDispatcher = require("../dispatcher/dispatcher");
const UserConstants = require("../constants/user_constants");
const ErrorConstants = require("../constants/error_constants");

const UserActions = {
  login: function(user){
    UserApiUtil.login(user, UserActions.receiveCurrentUser, UserActions.receiveError);
  },

  signUp: function(user){
    UserApiUtil.signUp(user, UserActions.receiveCurrentUser, UserActions.receiveError);
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};


module.exports = UserActions;
