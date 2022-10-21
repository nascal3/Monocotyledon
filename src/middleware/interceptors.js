
/**
 * Add request interceptor to axios
 * @method addRequestInterceptor
 * @param  {Object} api axios base configs
 */
const addRequestInterceptor = (api) => {
  return api.interceptors.request.use((config) => {
    const sessionID = localStorage.getItem('session-id')
    if (sessionID) {
      config.headers = {
        'x-session-id': sessionID
      }
    }
    return config
  },
  (error) => Promise.reject(error)
  )
}

/**
 * Add response interceptor to axios
 * @method addResponseInterceptor
 * @param  {Object} api axios base configs
 */
const addResponseInterceptor = (api) => {
  const sessionID = localStorage.getItem('session-id')
  return api.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (sessionID && error.response && (error.response.status === 401 || error.response.status === 400)) {
      window.location.reload()
    }
    return Promise.reject(error)
  })
}

export {
  addRequestInterceptor,
  addResponseInterceptor
}
