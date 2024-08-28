export default function Hero4() {
    return (
        <div className="relative h-screen">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
                <h1 className="text-5xl font-bold">Experience the Future</h1>
            </div>
        </div>
    );
}