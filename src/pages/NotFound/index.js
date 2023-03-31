import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-acdo-background'>
      <h1 className='text-[100px] leading-[100px] font-medium'>404</h1>
      <h3 className='uppercase my-5'>Page Not Found</h3>
      <p className='max-w-[450px] text-center my-[14px]'>
        The page you are trying to access was deleted or never existed. Sorry for the inconvenience!
      </p>
      <button onClick={navigateHome} className='mt-5'>
        Home
      </button>
    </div>
  )
}

export default PageNotFound
