import { ArrowUpRight, Play } from "lucide-react";
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";


function Home() {

    const skills = [
        { name: "React.js", icon: <FaReact fill="#09e5f4" size={40} />, color: "#09e5f4" },
        { name: "Next.js", icon: <SiNextdotjs fill="black" size={40} />, color: "#2c3951", bgColor:"#fff" },
        { name: "JavaScript", icon: <FaJs fill="#f4d02a" size={40} />, color: "#f4d02a" },
        { name: "TypeScript", icon: <SiTypescript fill="#0773ce" size={40} />, color: "#0773ce" },
        { name: "HTML5", icon: <FaHtml5 fill="#eb5523" size={40} />, color: "#eb5523" },
        { name: "CSS3", icon: <FaCss3Alt fill="#eb5523" size={40} />, color: "#eb5523" },
        { name: "Tailwind CSS", icon: <SiTailwindcss fill="#1ad0e8" size={40} />, color: "#1ad0e8" },
        { name: "Bootstrap", icon: <FaBootstrap fill="#7d54fc" size={40} />, color: "#7d54fc" },
        { name: "Git", icon: <FaGitAlt fill="#fa4529" size={40} />, color: "#fa4529" },
        { name: "REST API", icon: "🔗", color: "#16c0ad" },
    ];
    const projects = [
        {
            title: "ArtFungible",
            image: "/images/project/artfungible.png",
            description: "NFT Marketplace Platform",
            tech: ["React", "Web3", "Bootstrap"],
            live: "https://artfungible.io/",
        },
        {
            title: "Property Nu",
            image: "/images/project/propertynu.png",
            description: "Real Estate Platform",
            tech: ["React", "Tailwind"],
            live: "https://www.propertynu.com/",
        },
        {
            title: "Purple Swap",
            image: "/images/project/purpleswap.png",
            description: "Crypto Exchange Platform",
            tech: ["React", "Web3"],
            live: "https://purpleswap.io/",
        },
        {
            title: "ArtFungible",
            image: "/images/project/artfungible.png",
            description: "NFT Marketplace Platform",
            tech: ["React", "Web3", "Bootstrap"],
            live: "https://artfungible.io/",
        },
        {
            title: "Property Nu",
            image: "/images/project/propertynu.png",
            description: "Real Estate Platform",
            tech: ["React", "Tailwind"],
            live: "https://www.propertynu.com/",
        },
        {
            title: "Purple Swap",
            image: "/images/project/purpleswap.png",
            description: "Crypto Exchange Platform",
            tech: ["React", "Web3"],
            live: "https://purpleswap.io/",
        },
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

    const counters = [
        {
            number: "7+",
            label: "Years Experience",
        },
        {
            number: "100+",
            label: "Projects Completed",
        },
        {
            number: "50+",
            label: "Happy Clients",
        },
        {
            number: "10+",
            label: "Technologies",
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">

                    {/* Logo */}
                    <div className="brand">
                        <img
                            src="/images/logo/p.png"
                            width="60px"
                            alt="Logo"
                        />
                    </div>

                    {/* Center Menu */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm lg:text-base">
                        <a href="#home" className="hover:text-cyan-400 duration-300">
                            Home
                        </a>
                        <a href="#about" className="hover:text-cyan-400 duration-300">
                            About
                        </a>
                        <a href="#skills" className="hover:text-cyan-400 duration-300">
                            Skills
                        </a>
                        <a href="#contact" className="hover:text-cyan-400 duration-300">
                            Contact
                        </a>
                    </nav>

                    {/* Right Contact Button */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center px-5 py-2 rounded-full 
                       border border-cyan-400 text-cyan-400 
                       hover:bg-cyan-400 hover:text-slate-900 
                       transition-all duration-300"
                    >
                        Contact Me
                    </a>

                </div>
            </header>

            {/* Hero */}
            <section
                id="home"
                className="px-6 py-[250px] bg-[url('../images/banner/banner.jpg')] bg-cover bg-center bg-no-repeat min-h-[830px]"
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
                            src="images/profile/p.png"
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
                <div className="about-area about-area-primery">

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="about-img">
                            <div className="about-shape">
                                <div className="about-img-section text-center h-[480px] w-[420px] bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage:
                                            'url("images/product_working.png")',
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
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                            style={{
                                background: "#11192a",
                                borderTop: `3px solid ${skill.color}`,
                                boxShadow: `
      10px 10px 20px rgba(0,0,0,0.6),
      -5px -5px 12px rgba(255,255,255,0.04)
    `,
                            }}
                        >
                            <div
                                className="flex justify-center mb-4"
                            >
                                <div style={{
                                    backgroundColor:`${skill.bgColor}`,
                                    padding:`0.8px`,
                                    borderRadius:"20px"
                            }}>
                                {skill.icon}
                                </div>
                            </div>

                            <h3 className="text-white font-medium">{skill.name}</h3>
                        </div>
                    ))}

                </div>
            </section>
            <section id="counter" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {counters.map((counter, index) => (
                            <div
                                key={index}
                                className="bg-[#11192a] rounded-xl p-8 text-center"
                                style={{
                                    borderTop: `3px solid ${counter.color}`,
                                    boxShadow: `0 0 20px ${counter.color}20`,
                                }}
                            >
                                <h3
                                    className="text-3xl font-bold"
                                    style={{ color: counter.color }}
                                >
                                    {counter.number}
                                </h3>

                                <p className="mt-2 text-gray-300">
                                    {counter.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            {/* Project */}
            <section id="project" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        My Projects
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-[#11192a] rounded-xl overflow-hidden
        transition-all duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-contain"
                                />

                                <div className="p-5">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="inline-block bg-cyan-500 px-3 py-1 rounded-lg text-sm"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="max-w-6xl mx-auto px-6 py-20 text-center bg-[url('images/map-1.png')] bg-cover bg-center bg-no-repeat"
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