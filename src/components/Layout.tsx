const Layout = ({ children }:any) => {
    return (
      <div className="h-screen flex flex-col">
        <header className="bg-youtube-red p-4 flex items-center">
          <div className="flex-1">
            <img src="/youtube-logo.png" alt="YouTube" />
          </div>
          <div className="flex space-x-3 items-center">
            <button className="border border-gray-300 px-3 py-1 rounded-md">
              Sign In
            </button>
            <button className="bg-youtube-red text-white px-3 py-1 rounded-md">
              Sign Up
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-scroll">{children}</main>
      </div>
    )
  }
  
  export default Layout