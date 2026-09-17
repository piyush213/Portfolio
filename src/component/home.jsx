import React, { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import {
    BriefcaseBusiness,
    FolderCheck,
    Users,
    Code2,
} from "lucide-react";

import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaWordpress,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const skills = [
        {
            name: "React.js",
            icon: <FaReact size={42} />,
            color: "#61dafb",
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs size={42} />,
            color: "#ffffff",
        },
        {
            name: "JavaScript",
            icon: <FaJs size={42} />,
            color: "#f7df1e",
        },
        {
            name: "TypeScript",
            icon: <SiTypescript size={42} />,
            color: "#3178c6",
        },
        {
            name: "HTML5",
            icon: <FaHtml5 size={42} />,
            color: "#e34f26",
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt size={42} />,
            color: "#1572b6",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={42} />,
            color: "#06b6d4",
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap size={42} />,
            color: "#7952b3",
        },
        {
            name: "Git",
            icon: <FaGitAlt size={42} />,
            color: "#f05032",
        },
        {
            name: "WordPress",
            icon: <FaWordpress size={42} />,
            color: "#21759b",
        },
    ];
    const projects = [
        {
            title: "ArtFungible",
            image: "/images/project/artfungible.png",
            description: "NFT Marketplace Platform",
            tech: ["React.js", "JavaScript", "Bootstrap", "REST API", "Responsive UI"],
            live: "https://artfungible.io/",
        },
        {
            title: "Property Nu",
            image: "/images/project/propertynu.png",
            description: "Real Estate Platform",
            tech: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Responsive UI"],
            live: "https://www.propertynu.com/",
        },
        {
            title: "Purple Swap",
            image: "/images/project/purpleswap.png",
            description: "Crypto Exchange Platform",
            tech: ["React.js", "JavaScript", "Bootstrap", "REST API", "Responsive UI"],
            live: "https://purpleswap.io/",
        },
        {
            title: "Bookkeepa",
            image: "/images/project/bookkeepa.png",
            description: "Bookkeeping & Accounting Platform",
            tech: ["React.js", "JavaScript", "Bootstrap", "REST API", "Responsive UI"],
            live: "https://bookkeepa.com/",
        },
        {
            title: "Infini Launchpad",
            image: "/images/project/infimultichain.png",
            description: "Multi-Chain Platform",
            tech: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Responsive UI"],
            live: "https://launchpad.infimultichain.com/",
        },
        {
            title: "Onchain Matrix",
            image: "/images/project/onchain.png",
            description: "Web Application",
            tech: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Responsive UI"],
            live: "https://onchainmatrix.com/",
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
            icon: BriefcaseBusiness,
            color: "#8b5cf6",
        },
        {
            number: "100+",
            label: "Projects Completed",
            icon: FolderCheck,
            color: "#06b6d4",
        },
        {
            number: "50+",
            label: "Happy Clients",
            icon: Users,
            color: "#ec4899",
        },
        {
            number: "10+",
            label: "Technologies",
            icon: Code2,
            color: "#22c55e",
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
            <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">

                    {/* Logo */}
                    <div className="brand z-[60]">
                        <img
                            src="/images/logo/p.png"
                            width="60"
                            alt="Logo"
                            className="w-[50px] sm:w-[60px]"
                        />
                    </div>

                    {/* Desktop Menu */}
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

                    {/* Desktop Contact */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center px-5 py-2 rounded-full
            border border-cyan-400/80 text-cyan-400
            hover:bg-cyan-400 hover:text-black
            hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
            transition-all duration-300"
                    >
                        Contact Me
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative z-[60]
            w-11 h-11 rounded-xl
            flex flex-col items-center justify-center
            gap-[5px]
            border border-cyan-400/30
            bg-cyan-400/5
            hover:bg-cyan-400/10
            hover:border-cyan-400/60
            transition-all duration-300"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className={`block w-5 h-[2px] rounded-full bg-cyan-400
                transition-all duration-300 ease-in-out
                ${isMenuOpen
                                    ? "rotate-45 translate-y-[7px]"
                                    : ""
                                }`}
                        />

                        <span
                            className={`block w-5 h-[2px] rounded-full bg-cyan-400
                transition-all duration-200
                ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                        />

                        <span
                            className={`block w-5 h-[2px] rounded-full bg-cyan-400
                transition-all duration-300 ease-in-out
                ${isMenuOpen
                                    ? "-rotate-45 -translate-y-[7px]"
                                    : ""
                                }`}
                        />
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden absolute left-0 right-0 top-full
            overflow-hidden
            bg-[#05090b]/95
            backdrop-blur-2xl
            border-b border-cyan-400/20
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            transition-all duration-500 ease-in-out
            ${isMenuOpen
                                ? "max-h-[380px] opacity-100 visible"
                                : "max-h-0 opacity-0 invisible"
                            }`}
                    >
                        <nav className="px-5 py-5">

                            {/* Home */}
                            <a
                                href="#home"
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-3
                    px-4 py-3.5 mb-1
                    rounded-xl
                    text-sm font-medium text-white/80
                    hover:text-cyan-400
                    hover:bg-cyan-400/10
                    transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400
                    opacity-0 group-hover:opacity-100 transition-all" />
                                Home
                            </a>

                            {/* About */}
                            <a
                                href="#about"
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-3
                    px-4 py-3.5 mb-1
                    rounded-xl
                    text-sm font-medium text-white/80
                    hover:text-cyan-400
                    hover:bg-cyan-400/10
                    transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400
                    opacity-0 group-hover:opacity-100 transition-all" />
                                About
                            </a>

                            {/* Skills */}
                            <a
                                href="#skills"
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-3
                    px-4 py-3.5 mb-1
                    rounded-xl
                    text-sm font-medium text-white/80
                    hover:text-cyan-400
                    hover:bg-cyan-400/10
                    transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400
                    opacity-0 group-hover:opacity-100 transition-all" />
                                Skills
                            </a>

                            {/* Contact */}
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-3
                    px-4 py-3.5
                    rounded-xl
                    text-sm font-medium text-white/80
                    hover:text-cyan-400
                    hover:bg-cyan-400/10
                    transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400
                    opacity-0 group-hover:opacity-100 transition-all" />
                                Contact
                            </a>

                            {/* Mobile Contact Button */}
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 flex items-center justify-center
                    w-full px-5 py-3
                    rounded-xl
                    border border-cyan-400
                    text-cyan-400
                    text-sm font-semibold
                    hover:bg-cyan-400
                    hover:text-black
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                    transition-all duration-300"
                            >
                                Contact Me
                            </a>

                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section
                id="home"
                className="relative overflow-hidden py-[150px]
    bg-center bg-no-repeat min-h-[500px]"
            >
                 <div
                    className="top-20 left-0 w-[600px] h-[600px] absolute opacity-[0.2]"
                >
                    <img src="images/banner/banner2.svg" />
                    </div>
                {/* ================= BACKGROUND ANIMATION ================= */}

                {/* Blue Glow - Top Left */}
                <div
                    className="pointer-events-none absolute -top-32 -left-32
        w-[450px] h-[450px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        animate-[floatGlow_8s_ease-in-out_infinite]"
                />

                {/* Blue Glow - Right */}
                <div
                    className="pointer-events-none absolute -right-40 top-1/4
        w-[400px] h-[400px]
        rounded-full
        bg-blue-600/10
        blur-[120px]
        animate-[floatGlow2_10s_ease-in-out_infinite]"
                />

                {/* Bottom Glow */}
                <div
                    className="pointer-events-none absolute -bottom-40 left-1/2
        -translate-x-1/2
        w-[500px] h-[300px]
        rounded-full
        bg-cyan-500/10
        blur-[130px]
        animate-pulse"
                />

                {/* Moving Light */}
                <div
                    className="pointer-events-none absolute top-0 left-0
        w-[180px] h-[2px]
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent
        opacity-60
        animate-[moveLight_7s_linear_infinite]"
                />

                {/* Small Floating Dots */}
                <span
                    className="pointer-events-none absolute top-[20%] left-[10%]
        w-1.5 h-1.5 rounded-full bg-cyan-400/60
        shadow-[0_0_15px_#22d3ee]
        animate-[floatDot_5s_ease-in-out_infinite]"
                />

                <span
                    className="pointer-events-none absolute top-[65%] right-[12%]
        w-1 h-1 rounded-full bg-blue-400/70
        shadow-[0_0_12px_#3b82f6]
        animate-[floatDot2_7s_ease-in-out_infinite]"
                />

                <span
                    className="pointer-events-none absolute bottom-[15%] left-[45%]
        w-1.5 h-1.5 rounded-full bg-cyan-400/50
        shadow-[0_0_15px_#22d3ee]
        animate-[floatDot3_6s_ease-in-out_infinite]"
                />

                {/* ================= CONTENT ================= */}

                <div className="relative z-10 max-w-6xl px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-cyan-400 mb-2">
                            Hello, I'm
                        </p>

                        <h2 className="text-5xl font-bold leading-tight">
                            Piyush
                            <span className="block text-cyan-400">
                                Frontend Developer
                            </span>
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

                    <div className="flex justify-center items-center py-10">
                        <div className="relative w-[380px] h-[380px] flex items-center justify-center">

                            {/* Outer Orbit */}
                            <div
                                className="absolute w-[380px] h-[380px]
                    rounded-full border border-cyan-400/20
                    animate-[spin_15s_linear_infinite]"
                            >
                                <span
                                    className="absolute -top-2 left-1/2
                        w-4 h-4 rounded-full bg-cyan-400
                        shadow-[0_0_20px_#22d3ee]"
                                />
                            </div>

                            {/* Second Orbit */}
                            <div
                                className="absolute w-[380px] h-[380px]
                    rounded-full border border-purple-500/20
                    rotate-45"
                            />

                            {/* Glow */}
                            <div
                                className="absolute w-70 h-70
                    rounded-full
                    bg-cyan-500/20
                    blur-[80px]"
                            />

                            {/* Circular Image */}
                            <div
                                className="relative w-70 h-70
                    rounded-full
                    p-[4px]
                    bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
                    shadow-[0_0_35px_rgba(34,211,238,0.35)]
                    transition-all duration-500"
                            >
                                <div
                                    className="w-full h-full
                        rounded-full
                        overflow-hidden
                        bg-zinc-950
                        border-4 border-zinc-950"
                                >
                                    <img
                                        src="images/profile/p.png"
                                        alt="Piyush - Frontend Developer"
                                        className="w-full h-full
                            rounded-full
                            object-cover
                            scale-105
                            transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div
                                className="absolute -right-2 top-16
                    px-4 py-2 rounded-xl
                    bg-zinc-900/90 backdrop-blur-md
                    border border-cyan-400/30
                    shadow-lg shadow-cyan-500/10"
                            >
                                <span className="text-cyan-400 font-bold text-lg">
                                    7.8+
                                </span>

                                <span className="block text-xs text-zinc-400">
                                    Years Exp.
                                </span>
                            </div>

                            {/* Available Badge */}
                            <div
                                className="absolute -left-4 bottom-16
                    flex items-center gap-2
                    px-4 py-2 rounded-xl
                    bg-zinc-900/90 backdrop-blur-md
                    border border-green-400/20"
                            >
                                <span
                                    className="w-2.5 h-2.5
                        rounded-full
                        bg-green-400
                        animate-pulse"
                                />

                                <span className="text-xs text-white">
                                    Available
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className=" px-6 py-20"
            >
                <div className="about-area about-area-primery">

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
                        <div>
                            <p className="inline-block mb-4 px-4 py-1.5 rounded-full
                border border-cyan-400/20 bg-cyan-400/5
                text-cyan-400 text-sm font-medium tracking-wide">
                                ABOUT ME
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-7">
                                Building Modern
                                <span className="block text-cyan-400">
                                    Digital Experiences
                                </span>
                            </h2>

                            <p className="text-zinc-300 leading-8">
                                I’m a Frontend & UI Developer with 7+ years of experience
                                building responsive, scalable, and high-performance web
                                applications. I specialize in React.js, Next.js, JavaScript,
                                TypeScript, Tailwind CSS, and modern UI development.
                            </p>

                            <p className="text-zinc-400 leading-8 mt-5">
                                I focus on creating clean, reusable, and user-friendly
                                interfaces with strong attention to responsive design,
                                performance, and pixel-perfect implementation. I have also
                                worked on Web3, Blockchain, NFT, Crypto, Real Estate,
                                and business platforms.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-7">

                                <span className="px-4 py-2 rounded-full
            bg-cyan-400/10
            border border-cyan-400/20
            text-cyan-400 text-sm">
                                    React.js
                                </span>

                                <span className="px-4 py-2 rounded-full
            bg-cyan-400/10
            border border-cyan-400/20
            text-cyan-400 text-sm">
                                    Next.js
                                </span>

                                <span className="px-4 py-2 rounded-full
            bg-cyan-400/10
            border border-cyan-400/20
            text-cyan-400 text-sm">
                                    UI Development
                                </span>

                                <span className="px-4 py-2 rounded-full
            bg-cyan-400/10
            border border-cyan-400/20
            text-cyan-400 text-sm">
                                    Web3
                                </span>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Skills */}
            <section
                id="skills"
                className="relative py-24 overflow-hidden"
            >
                <div className="max-w-6xl mx-auto px-6 ">
                    {/* Background Glow */}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Heading */}
                    <div className="relative text-center mb-14">
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                border border-cyan-400/20 bg-cyan-400/5
                text-cyan-400 text-sm font-medium tracking-wide">
                            My Expertise
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Technical{" "}
                            <span className="text-cyan-400">
                                Skills
                            </span>
                        </h2>

                        <p className="max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed">
                            Technologies and tools I use to build modern, responsive,
                            and high-performance web applications.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] p-6 text-center
               transition-all duration-500
               hover:border-white/20
               hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                            >
                                {/* Spotlight */}
                                <div
                                    className="pointer-events-none absolute -inset-px opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(
                180px circle at 50% 0%,
                ${skill.color}30,
                transparent 70%
            )`,
                                    }}
                                />

                                {/* Top Shine */}
                                <div
                                    className="absolute top-0 left-[-100%] w-full h-[1px]
                   group-hover:left-[100%]
                   transition-all duration-700"
                                    style={{
                                        background: `linear-gradient(
                90deg,
                transparent,
                ${skill.color},
                transparent
            )`,
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">

                                    {/* Icon */}
                                    <div
                                        className="mx-auto mb-5 w-16 h-16 flex items-center justify-center
                       rounded-2xl border
                       transition-all duration-500
                       group-hover:-translate-y-2
                       group-hover:scale-110"
                                        style={{
                                            color: skill.color,
                                            borderColor: `${skill.color}30`,
                                            backgroundColor: `${skill.color}0d`,
                                        }}
                                    >
                                        {skill.icon}
                                    </div>

                                    {/* Name */}
                                    <h3
                                        className="text-white font-semibold transition-colors duration-300"
                                    >
                                        {skill.name}
                                    </h3>

                                    {/* Hover Indicator */}
                                    <div className="mt-4 flex justify-center">
                                        <span
                                            className="w-0 h-[2px] rounded-full
                           group-hover:w-10
                           transition-all duration-500"
                                            style={{
                                                backgroundColor: skill.color,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="counter" className="py-20 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full
                border border-cyan-400/20 bg-cyan-400/5
                text-cyan-400 text-sm font-medium tracking-wide">
                            My Achievements
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                            Experience &{" "}
                            <span className="text-cyan-400">
                                Results
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                            Building modern, responsive and user-friendly web experiences
                            with a strong focus on quality and performance.
                        </p>
                    </div>

                    {/* Counters */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {counters.map((counter, index) => {
                            const Icon = counter.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 p-6 md:p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                                    style={{
                                        boxShadow: `0 10px 40px ${counter.color}12`,
                                    }}
                                >
                                    {/* Glow */}
                                    <div
                                        className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                                        style={{
                                            backgroundColor: counter.color,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border"
                                        style={{
                                            color: counter.color,
                                            borderColor: `${counter.color}40`,
                                            backgroundColor: `${counter.color}12`,
                                        }}
                                    >
                                        <Icon size={26} strokeWidth={1.8} />
                                    </div>

                                    {/* Number */}
                                    <h3
                                        className="relative text-3xl md:text-4xl font-extrabold tracking-tight"
                                        style={{ color: counter.color }}
                                    >
                                        {counter.number}
                                    </h3>

                                    {/* Label */}
                                    <p className="relative mt-2 text-sm md:text-base font-medium text-gray-400">
                                        {counter.label}
                                    </p>

                                    {/* Bottom Line */}
                                    <div
                                        className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-1/2"
                                        style={{
                                            backgroundColor: counter.color,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Project */}
            <section id="project" className="relative py-24 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 
        bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                border border-cyan-400/20 bg-cyan-400/5
                text-cyan-400 text-sm font-medium tracking-wide">
                            MY WORK
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Featured{" "}
                            <span className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-400 to-blue-500">
                                Projects
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
                            A collection of scalable, responsive and modern web applications
                            built with React.js and modern frontend technologies.
                        </p>
                    </div>


                    {/* Projects Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-[1px]
                    bg-gradient-to-br from-white/10 via-cyan-400/10 to-transparent
                    hover:from-cyan-400/50 hover:via-blue-500/30
                    transition-all duration-500"
                            >

                                {/* Card */}
                                <div className="relative h-full overflow-hidden rounded-2xl
                        bg-[#0b1220]/95 backdrop-blur-xl
                        border border-white/5
                        transition-all duration-500
                        group-hover:-translate-y-2
                        group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden bg-[#0e1728]">

                                        {/* Image overlay */}
                                        <div className="absolute inset-0 z-10 
                                bg-gradient-to-t from-[#0b1220] via-transparent to-transparent
                                opacity-80" />

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover
                                transition-transform duration-700
                                group-hover:scale-110"
                                        />

                                        {/* Project Number */}
                                        <div className="absolute top-4 left-4 z-20
                                w-9 h-9 rounded-full
                                bg-black/40 backdrop-blur-md
                                border border-white/10
                                flex items-center justify-center
                                text-xs text-gray-300">
                                            0{index + 1}
                                        </div>

                                        {/* Live Badge */}
                                        <div className="absolute top-4 right-4 z-20
                                px-3 py-1 rounded-full
                                bg-black/40 backdrop-blur-md
                                border border-cyan-400/20
                                text-cyan-400 text-xs">
                                            Live
                                        </div>
                                    </div>


                                    {/* Content */}
                                    <div className="p-6">

                                        <h3 className="text-2xl font-semibold text-white
                                group-hover:text-cyan-400
                                transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>


                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-5">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 rounded-lg
                                        text-xs font-medium
                                        text-cyan-300
                                        bg-cyan-400/5
                                        border border-cyan-400/10
                                        hover:border-cyan-400/30
                                        transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>


                                        {/* Bottom */}
                                        <div className="flex items-center justify-between
                                mt-7 pt-5 border-t border-white/5">

                                            <span className="text-xs text-gray-500">
                                                React.js • Frontend
                                            </span>

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-2
                                    px-4 py-2 rounded-lg
                                    bg-gradient-to-r from-cyan-500 to-blue-500
                                    text-white text-sm font-medium
                                    transition-all duration-300
                                    hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                                    hover:scale-105"
                                            >
                                                Live Demo

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-4 h-4
                                        transition-transform duration-300
                                        group-hover/btn:translate-x-1"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                    />
                                                </svg>
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="max-w-6xl mx-auto px-6 py-20 text-center bg-[url('../images/map-1.png')] bg-cover bg-center bg-no-repeat"
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