import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as AuthService from '../../services/auth-service'

import {
  autoLogin,
  doAuthenticate,
  logout,
  authErrorReset,
  AUTH_ERROR_RESET,
  AUTHENTICATION_SUCCESS,
  LOGOUT,
  AUTHENTICATING,
  AUTHENTICATION_ERROR,
  SIGN_UP
} from '../auth-actions'

jest.mock('../../services/auth-service');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Authentication actions', () => {
  beforeEach(() => {
    localStorage.removeItem('token')
  })

  it('should generate reset error action', () => {
    expect(authErrorReset()).toEqual({ type: AUTH_ERROR_RESET });
  })

  it('should do auto login', async () => {
    const spy = AuthService.validateUserOnServer.mockReturnValue(Promise.resolve({ user: { success: true } }));
    const token = 'abcToken'
    localStorage.setItem('token', token)
    const expectedActions = [
      { type: AUTHENTICATION_SUCCESS, payload: { success: true } }
    ]
    const store = mockStore({ user: {} })

    await store.dispatch(autoLogin());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedActions);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(token)
  })

  it('should auto login silently fail', async () => {
    AuthService.validateUserOnServer.mockReturnValue(Promise.reject({}));
    const expectedActions = []
    const store = mockStore({ user: {} })
    await store.dispatch(autoLogin());
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  it('should initiate logout request and remove token from localStorage', () => {
    localStorage.setItem('token', 'abc123');
    const logoutAction = logout();
    expect(logoutAction).toEqual({ type: LOGOUT });
    const token = localStorage.getItem('token');
    expect(token).toBe(null);
  })

  it('should dispatch actions for user sign in successful process', async () => {
    let mockUser = {
      username: 'pervez',
      email: 'pervezalam777@gmail.com',
      token: 'abc123'
    }
    let credential = {
      email: 'pervezalam777@gmail.com',
      password: 'abcd'
    }
    const spy = AuthService.signIn.mockReturnValue(Promise.resolve({ user: mockUser }));
    const expectedActions = [
      { type: AUTHENTICATING },
      { type: AUTHENTICATION_SUCCESS, payload: mockUser }
    ]
    const store = mockStore({ user: {} })

    await store.dispatch(doAuthenticate(credential));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(credential)

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);

    const token = localStorage.getItem('token');
    expect(token).toEqual(mockUser.token);

  })

  it('should dispatch actions for user sign in unsuccessful process', async () => {
    let error = {
      errorMessage: 'bad request' 
    }
    let credential = {
      email: 'pervezalam777@gmail.com',
      password: 'abcd'
    }

    const spy = AuthService.signIn.mockReturnValue(Promise.reject(error));

    const expectedActions = [
      { type: AUTHENTICATING },
      { type: AUTHENTICATION_ERROR, payload: error }
    ]
    const store = mockStore({ user: {} })

    await store.dispatch(doAuthenticate(credential));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(credential)

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  it('should dispatch actions for user sign up successful process', async () => {
    let mockUser = {
      username: 'pervez',
      email: 'pervezalam777@gmail.com',
      token: 'abc123'
    }
    let credential = {
      username:'pervez',
      email: 'pervezalam777@gmail.com',
      password: 'abcd'
    }
    const spy = AuthService.signUp.mockReturnValue(Promise.resolve({ user: mockUser }));
    const expectedActions = [
      { type: AUTHENTICATING },
      { type: AUTHENTICATION_SUCCESS, payload: mockUser }
    ]
    const store = mockStore({ user: {} })

    await store.dispatch(doAuthenticate(credential, SIGN_UP));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(credential)

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);

    const token = localStorage.getItem('token');
    expect(token).toEqual(mockUser.token);
  })

  it('should dispatch actions for user sign up unsuccessful process', async () => {
    let error = {
      errorMessage: 'bad request' 
    }
    let credential = {
      username:'pervez',
      email: 'pervezalam777@gmail.com',
      password: 'abcd'
    }

    const spy = AuthService.signUp.mockReturnValue(Promise.reject(error));

    const expectedActions = [
      { type: AUTHENTICATING },
      { type: AUTHENTICATION_ERROR, payload: error }
    ]
    const store = mockStore({ user: {} })

    await store.dispatch(doAuthenticate(credential, SIGN_UP));

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(credential)

    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })
})