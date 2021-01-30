import axios from "axios"

const apiFunction = method => {
  return async (url, { body = {}, token = "", loading = true } = {}) => {
    try {
      const result = await axios({
        method: method,
        url: url,
        data: body,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(result)
      return result
    } catch (err) {
      if (err.response) {
        console.log(err.response.data)
        if (err.response.status === 400) {
          return false
        } else if (err.response.status === 403) {
          return false
        } else if (err.response.status === 401) {
          return { data: { status: false, data: "error" } }
        }
      }
    } finally {
    }
  }
}

const api = {
  post: apiFunction("POST"),
  get: apiFunction("GET"),
  delete: apiFunction("DELETE"),
  patch: apiFunction("PATCH"),
}

export default api
