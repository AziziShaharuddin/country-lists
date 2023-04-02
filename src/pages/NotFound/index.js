import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-acdo-background dark:bg-acdo-primaryDark'>
      <h1 className='text-[100px] leading-[100px] font-medium dark:text-acdo-white'>404</h1>
      <h3 className='uppercase my-5 dark:text-acdo-grayText'>Page Not Found</h3>
      <p className='max-w-[450px] text-center my-[14px] dark:text-acdo-grayText'>
        The page you are trying to access was deleted or never existed. Sorry for the inconvenience!
      </p>
      <button onClick={navigateHome} className='mt-5 rounded-[4.5px] py-2  px-4 dark:bg-acdo-grayLine dark:text-acdo-secondary dark:border dark:border-acdo-secondary'>
        Home
      </button>
    </div>
  )
}

export default PageNotFound
