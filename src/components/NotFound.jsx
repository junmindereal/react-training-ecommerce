import { Link } from 'react-router-dom'

export function NotFound ({ notFound }) {
  function ErrorMessage ({ errorMessage }) {
    return (
      <>
        <p> {errorMessage} </p>
        <Link to='/products'>Click here to see other products</Link>
      </>
    )
  }

  return (
    <>
      <h1>Page Not Found</h1>
      {notFound
        ? <ErrorMessage errorMessage={notFound.errorMessage} />
        : null}
    </>
  )
}
