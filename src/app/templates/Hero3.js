export default function Hero3() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-100 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hero Image" className="w-3/4 rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2 bg-white flex flex-col justify-center p-8">
                <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
                <p className="text-lg mb-8">Connect with like-minded individuals from around the world.</p>
                <button className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}