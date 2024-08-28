export default function Hero8() {
    return (
        <div className="relative h-screen bg-gray-900">
            <img src="https://images.pexels.com/photos/13813610/pexels-photo-13813610.png?auto=compress&cs=tinysrgb&w=800" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold">Adventure Awaits</h1>
                <p className="text-xl mt-4">Embark on your next journey with us.</p>
            </div>
        </div>
    );
}