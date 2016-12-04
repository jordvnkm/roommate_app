

const UserApiUtil = {
  login: function(user, successCB, errorCB){
    let param = {user: user};
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: param,
      success: function(data){
        successCB(data);
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
      success: function(data){
        successCB(data);
      },
      error: function(error){
        errorCB(error);
      }
    })
  },

  logout: function(successCB, errorCB){
    $.ajax({
      url: 'api/session',
      type: "DELETE",
      success: function(data){
        console.log(data);
        successCB(data);
      },
      error: function(errors){
        errorCB(errors);
      }
    })
  }
};


module.exports = UserApiUtil;
