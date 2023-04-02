import { Outlet } from "react-router-dom"
import Header from "./Header"

const Container = () => {
  return (
    <div className="w-screen min-h-screen bg-acdo-background dark:bg-acdo-secondaryDark">
      <Header />
      <div className="p-[30px]">
        <div className="m-auto max-w-[1200px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Container