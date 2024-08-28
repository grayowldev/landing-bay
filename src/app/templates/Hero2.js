export default function Hero2() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1821349/pexels-photo-1821349.jpeg?auto=compress&cs=tinysrgb&w=800)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Discover Your Next Adventure</h1>
            </div>
        </div>
    );
}