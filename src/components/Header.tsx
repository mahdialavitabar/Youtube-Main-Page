const Header = () => {
    return (
      <div className="flex justify-between px-4 py-3">
        <div className="flex space-x-2">
          <button className="border border-gray-300 px-3 py-1 rounded-md">
            Home
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-md">
            Trending
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-md">
            Subscription
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300"
          />
          <button className="border border-gray-300 px-3 py-1 rounded-md">
            Rewind 2018
          </button>
        </div>
      </div>
    )
  }
  export default Header