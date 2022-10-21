
/**
 * Checks if the connect session exists in the local localStorage
 * @method checkConnectSession
 * @param  {Object} to target route being navigated to
 * @param  {Object} from the current route being navigated from
 * @param  {Function} next is called to resolve the hook. \
 * The action depends on the arguments provided to
 * @return {void}
 */
const checkConnectSession = (to, from, next) => {
  const sessionId = localStorage.getItem('session-id')
  if (sessionId) {
    next()
    return
  }
  next({ name: 'banks' })
}

/**
 * Checks if the user logged in
 * @method checkAuth
 * @param  {Object} to target route being navigated to
 * @param  {Object} from the current route being navigated from
 * @param  {Function} next this function is called to resolve the hook. \
 * The action depends on the arguments provided to
 * @return {void}
 */
const checkAuth = (to, from, next) => {
  const loggedInCode = localStorage.getItem('loggedInCode')
  const sessionId = localStorage.getItem('session-id')
  if (sessionId && loggedInCode) {
    next()
    return
  }
  next({ name: 'banks' })
}

export {
  checkConnectSession,
  checkAuth
}
