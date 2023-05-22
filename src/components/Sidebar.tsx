const Sidebar = () => {
    return (
      <div className="w-64 px-2 pt-4 bg-gray-100 overflow-y-scroll h-screen">
        <ul>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 transition duration-200 hover:bg-gray-200 rounded-md">
              <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </a>
          </li>
          {/* Rest of menu items */}
        </ul>
      </div>
    )
  }
  
  export default Sidebar