const Header = () => {
  return (
    <div className="sticky top-0 z-10 border-b border-acdo-grayText bg-acdo-white py-5 px-[30px] backdrop-blur ">
      <div className="relative m-auto flex max-w-[1200px] flex-row items-center justify-end md:justify-between">
        <h1 className="text-h1 hidden md:block">Title</h1>

        <div className="flex items-center justify-end space-x-2">
          <p>Switch dark mode</p>
        </div>
      </div>
    </div>
  )
}

export default Header