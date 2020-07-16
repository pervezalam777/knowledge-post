import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as AuthService from '../../services/auth-service'

import {
  autoLogin,
  doAuthenticate,
  logout,
  authErrorReset,
  AUTH_ERROR_RESET,
  AUTHENTICATION_SUCCESS
} from '../auth-actions'

jest.mock('../../services/auth-service');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Authentication actions', ()=> {
  beforeEach(() => {
    localStorage.removeItem('token')
  })

  it('should generate reset error action', () => {
    expect(authErrorReset()).toEqual({type:AUTH_ERROR_RESET});
  })

  it('should do auto login', async () => {
    const spy = AuthService.validateUserOnServer.mockReturnValue(Promise.resolve({user:{success:true}}));
    const token = 'abcToken'
    localStorage.setItem('token', token)
    const expectedActions = [
      { type: AUTHENTICATION_SUCCESS, payload:{success:true}}
    ]
    const store = mockStore({ user:{} })

    await store.dispatch(autoLogin());
    const storeActions = store.getActions();
    
    expect(storeActions).toEqual(expectedActions);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(token)
  })

  it('should auto login silently fail', async () => {
    AuthService.validateUserOnServer.mockReturnValue(Promise.reject({}));
    const expectedActions = []
    const store = mockStore({ user:{} })
    await store.dispatch(autoLogin());
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  
})