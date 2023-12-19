export default function Navbar() {
    return (
        <nav className='bg-Midnight-Blue text-white'>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <a href="#" class="text-white text-lg font-bold">Aminoor</a>

                    <div class="hidden sm:flex space-x-7">
                        <a href="#" class="text-white">Home</a>
                        <a href="#" class="text-white">About Me</a>
                        <a href="#" class="text-white">Skills</a>
                        <a href="#" class="text-white">Projects</a>
                        <a href="#" class="text-white">Contact</a>
                    </div>

                    <div class="sm:hidden">
                        <button class="text-white focus:outline-none">
                            &#9776;
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
