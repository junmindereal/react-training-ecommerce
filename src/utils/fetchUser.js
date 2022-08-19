export const fetchUser = async (login, apiLogin, setUser, setHasError, setIsloading) => {
  try {
    const res = await apiLogin(login)
    setUser(res)
  } catch (error) {
    setHasError(error)
  } finally {
    setIsloading(false)
  }
}
