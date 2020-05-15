import * as Message from './../constants/Message';
import * as Types from './../constants/ActionsType';

var oldState = Message.MSG_WELCOME;

const message = (state = oldState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
        return action.message
    default:
      return state;
  }
}


export default message;