

const UserApiUtil = {
  login: function(user, successCB, errorCB){
    let param = {user: user};
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: param,
      success: function(user){
        successCB(user);
      },
      error: function(error){
        errorCB(error);
      }
    })
  },

  signUp: function(user, successCB, errorCB){
    let param = {user: user};
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: param,
      success: function(user){
        successCB(user);
      },
      error: function(error){
        errorCB(error);
      }
    })
  },

  logout: function(successCB, errorCB){

  }
};


module.exports = UserApiUtil;
