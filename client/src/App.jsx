import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Registration Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Registration</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              className="w-full border border-blue-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-blue-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Register</button>
        </div>
      </div>

      {/* Login Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username..."
            className="w-full border border-blue-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password..."
            className="w-full border border-blue-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
