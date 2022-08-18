import { NewProductForm } from '../../components/NewProductForm'

export const HomePage = ({ defaultValues, onSubmit }) => {
  return (
    <>
      <h1>Homepage</h1>
      <NewProductForm defaultValues={defaultValues} onSubmit={onSubmit} />
    </>
  )
}
