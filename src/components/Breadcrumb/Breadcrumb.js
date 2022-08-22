import { Link } from 'react-router-dom'

export const Breadcrumb = ({ base, category = null, productName = null }) => {
  return (
    <section className='breadcrumb-container'>
      <Link className='breadcrumb-link' to={`/${base}`}>{base}</Link>
      {category &&
        <>
          <span className='breadcrumb-separator'>/</span>
          {productName
            ? <Link className='breadcrumb-link' to={`/${category}`}>{category}</Link>
            : <p className='breadcrumb-current'>{category}</p>}
        </>}
      {productName &&
        <>
          <span className='breadcrumb-separator'>/</span>
          <p className='breadcrumb-current'>{productName}</p>
        </>}
    </section>
  )
}
