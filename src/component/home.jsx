function Home() {

    const skills = [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "REST API",
    ];
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">
                        Piyush.
                    </h1>

                    <nav className="hidden md:flex gap-8 text-sm lg:text-base">
                        <a href="#home" className="hover:text-cyan-400 duration-300">Home</a>
                        <a href="#about" className="hover:text-cyan-400 duration-300">About</a>
                        <a href="#skills" className="hover:text-cyan-400 duration-300">Skills</a>
                        <a href="#contact" className="hover:text-cyan-400 duration-300">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section
                id="home"
                className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <p className="text-cyan-400 mb-2">Hello, I'm</p>

                    <h2 className="text-5xl font-bold leading-tight">
                        Piyush
                        <span className="block text-cyan-400">Frontend Developer</span>
                    </h2>

                    <p className="text-slate-300 mt-6 leading-8">
                        I build responsive, modern and high-performance web applications
                        using React.js, Next.js and Tailwind CSS.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">
                            Hire Me
                        </button>

                        <button className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500">
                            Download CV
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43f?w=500"
                        alt="Profile"
                        className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                    />
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <h2 className="text-4xl font-bold text-center mb-10">
                    About Me
                </h2>

                <div className="bg-slate-900 rounded-xl p-8">
                    <p className="text-slate-300 leading-8">
                        I'm a Frontend Developer passionate about creating clean,
                        responsive, and user-friendly web applications. I enjoy building
                        reusable React components, integrating APIs, and delivering
                        pixel-perfect UI from Figma designs.
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section
                id="skills"
                className="max-w-6xl mx-auto px-6 py-20"
            >
                <h2 className="text-4xl font-bold text-center mb-10">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-slate-900 rounded-lg p-5 text-center hover:bg-cyan-500 transition"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="max-w-6xl mx-auto px-6 py-20 text-center"
            >
                <h2 className="text-4xl font-bold mb-5">
                    Let's Work Together
                </h2>

                <p className="text-slate-300 mb-8">
                    Available for Frontend Development opportunities.
                </p>

                <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold">
                    Contact Me
                </button>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800 py-6 text-center text-slate-400">
                © 2026 Piyush. All Rights Reserved.
            </footer>
        </div>
    );
}

export default Home;