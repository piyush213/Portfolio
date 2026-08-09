import { ArrowUpRight, Play } from "lucide-react";

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
    const experiences = [
        {
            year: "2022 – 2026",
            role: "FRONTEND DEVELOPER",
            company: "ESP SOFTTECH PVT. LTD.",
            description:
                "Building responsive, pixel-perfect interfaces with React.js, Next.js, TypeScript and modern CSS.",
            progress: "92%",
        },
        {
            year: "2019 – 2022",
            role: "UI DEVELOPER",
            company: "WEB DEVELOPMENT PROJECTS.",
            description:
                "Converted Figma and Photoshop designs into reusable, responsive web experiences with API integration.",
            progress: "84%",
        },
        {
            year: "2016 – 2019",
            role: "UI DESIGNER",
            company: "WEB & WORDPRESS PROJECTS.",
            description:
                "Designed and developed websites with a strong focus on usability, responsiveness and clean UI.",
            progress: "76%",
        },
    ];

    function ExperienceCard({ item, index }) {
        return (
            <div className="group relative overflow-hidden border border-white/[0.07] bg-[#0a0e0f] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e878]/40">

                {/* Number */}
                <span className="absolute right-4 top-0 font-display text-[90px] leading-none text-white/[0.025]">
                    0{index + 1}
                </span>

                <div className="relative z-10">
                    <p className="mb-4 text-[13px] font-medium text-[#00e878]">
                        {item.year}{" "}
                        <span className="text-white/70">
                            ({item.role})
                        </span>
                    </p>

                    <h3 className="font-display text-[24px] font-bold leading-tight text-white">
                        {item.company}
                    </h3>

                    <p className="mt-5 text-[15px] leading-6 text-white/70">
                        {item.description}
                    </p>

                    {/* Progress */}
                    <div className="mt-7 h-[2px] w-full bg-white/[0.08]">
                        <div
                            className="h-full bg-[#00e878] transition-all duration-700 group-hover:w-full"
                            style={{ width: item.progress }}
                        />
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 z-50 w-full backdrop-blur border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="brand">
                        <img src="/images/p.png" width={`50px`} />
                    </div>

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
                className="px-6 py-[250px] bg-[url('images/banner/banner.jpg')] bg-cover bg-center bg-no-repeat min-h-[830px]"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
                </div>

            </section>

            {/* About */}
            <section
                id="about"
                className=" px-6 py-20 bg-[#0B0D0E]"
            >
                <div className="about-area about-area-primery max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="about-img">
                            <div className="about-shape">
                                <div className="about-img-section text-center h-[480px] w-[480px] bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage:
                                            'url("https://wp.quomodosoft.com/glint/wp-content/uploads/2019/12/about1-1.png")',
                                    }}>

                                </div>

                            </div>

                        </div>
                        <div className="">
                            <h2 className="text-4xl font-bold mb-8">
                                FAILURE IS THE CONDIMENT THAT GIVES SUCCESS
                            </h2>
                            <p className="text-zinc-300 leading-8">
                                Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.
                            </p>
                        </div>

                    </div>

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