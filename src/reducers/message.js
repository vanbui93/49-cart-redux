import * as Message from './../constants/Message';

var oldState = Message.MSG_WELCOME;

const message = (state = oldState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


export default message;