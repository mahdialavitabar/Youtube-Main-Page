const Videos = () => {
    return (
      <div className="px-4 py-3 flex flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="w-1/3 p-2"
            style={{ minWidth: '220px' }}
          >
            <img src={`/video-${n}.jpg`} alt={`Video ${n}`} />
            <div className="pt-2">
              <p className="text-sm font-medium">Video Title {n}</p>
              <p className="text-xs text-gray-500">123K views • 1 day ago</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default Videos