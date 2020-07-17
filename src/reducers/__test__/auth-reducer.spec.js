import authReducer from '../auth-reducer';
import { 
  AUTHENTICATION_SUCCESS, 
  AUTHENTICATION_ERROR, 
  LOGOUT, 
  AUTH_ERROR_RESET 
} from '../../actions/auth-actions';

const initialState = {
  serverError:null,
  isAuthenticated:false
}

describe('Authentication reducer', () => {

  it('should update state on authentication success', () => {
    const action = {
      type:AUTHENTICATION_SUCCESS, 
      payload:{token:'abc', username:'pervez'}
    }
    
    const state = authReducer(initialState, action);

    expect(state.isAuthenticated).toBeTruthy();
    expect(state.token).toEqual('abc');
    expect(state.serverError).toBeNull();

    expect(initialState).not.toEqual(state);
  });

  it('should update state on authentication error', () => {
    const action = {
      type:AUTHENTICATION_ERROR, 
      payload:{errorMessage:"authentication failed"}
    }
    const state = authReducer(initialState, action);
    expect(state.isAuthenticated).toBe(false);
    expect(state.serverError).toEqual(action.payload);

    expect(initialState).not.toEqual(state);
  });

  it('should update state on logout', () => {
    const storeState = {
      token:'abc',
      username:'pervez',
      serverError:null,
      isAuthenticated:true
    }
    const action = { type:LOGOUT }
    const state = authReducer(storeState, action);
    expect(state.isAuthenticated).toBe(false);
    expect(state.serverError).toBeNull();

    expect(storeState).not.toEqual(state);
  });

  it('should update state on authentication error reset', () => {
    const storeState = {
      token:'abc',
      username:'pervez',
      serverError:{errorMessage:'some error'},
      isAuthenticated:true
    }
    const action = { type:AUTH_ERROR_RESET }
    const state = authReducer(storeState, action);
    expect(state.isAuthenticated).toBe(true);
    expect(state.serverError).toBeNull();

    expect(storeState).not.toEqual(state);

  });

  it('should not update state if non of the action type match', () => {
    const storeState = {
      token:'abc',
      username:'pervez',
      serverError:{errorMessage:'some error'},
      isAuthenticated:true
    }
    const action = { type:'NEW_ACTION' }
    const state = authReducer(storeState, action);
    expect(state).toEqual(storeState);
  })
})
