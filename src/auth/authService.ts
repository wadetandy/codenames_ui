export type User = {
  id: string,
  name: string
}

export class AuthService {
  private _currentUser: User | null = null
  private _redirectPath: string | null = null

  isAuthenticated() {
    return !!this._currentUser
  }

  set currentUser(user: User | null) {
    this._currentUser = user
  }

  get currentUser() {
    return this._currentUser
  }

  logout() {
    this._currentUser = null
  }

  set redirect(path: string | null) {
    this._redirectPath = path
  }

  get redirect() {
    return this._redirectPath
  }
}

export default new AuthService()