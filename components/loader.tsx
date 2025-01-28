
export default function LoadingPage() {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
  
        {/* Loading Spinner and Text */}
        <div className="flex flex-col items-center justify-center space-y-4 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }
  