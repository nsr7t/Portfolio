import darkSassImage from "../assets/images/dark-saas-landing-page.png"
import lightSassImage from "../assets/images/light-saas-landing-page.png"
import aiStartupImage from "../assets/images/ai-startup-landing-page.png"
import CheckIcon from "../components/CheckIcon"
import ArrowUpRight from "../components/ArrowUpRight"
import grainImage from "../assets/images/grain.jpg"

const portfolioProjects = [
    {
        company: "Acme Corp",
        year: "2022",
        title: "Dark Sass Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improve site speed by 50%" },
            { title: "Increase mobile traffic by 35%" },
        ],
        link: "github.com/nsr7t",
        image: darkSassImage,
    },
    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Sass Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expand customer reach by 35%" },
            { title: "Increase brand awareness by 15%" },
        ],
        link: "github.com/nsr7t",
        image: lightSassImage,
    },
    {
        company: "Quantum Dynamics",
        year: "2021",
        title: "mixed Sass Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improve site speed by 50%" },
            { title: "Increase mobile traffic by 35%" },
        ],
        link: "github.com/nsr7t",
        image: aiStartupImage,
    },
]

function Projects() {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold tracking-widest text-transparent uppercase lg:text-xl">
                        Real-world Results
                    </p>
                </div>
                <h2 className="font-calistoga mt-6 text-center text-3xl md:text-5xl">
                    Feature Projects
                </h2>
                <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg">
                    See how I transformed concepts into engaging digital
                    experiences.
                </p>
                <div className="mt-10 flex flex-col gap-20 md:mt-20">
                    {portfolioProjects.map((project) => (
                        <div
                            key={project.title}
                            className="relative overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 outline-2 -outline-offset-2 outline-white/20 after:pointer-events-none md:px-10 md:pt-12 lg:px-20 lg:pt-16"
                        >
                            <div
                                className="absolute inset-0 -z-10 opacity-50"
                                style={{
                                    backgroundImage: `url(${grainImage})`,
                                }}
                            ></div>
                            <div className="gap-16 lg:grid lg:grid-cols-2">
                                <div className="lg:pb-16">
                                    <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-black tracking-widest text-transparent uppercase">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-calistoga mt-2 text-2xl md:mt-5 md:text-4xl">
                                        {project.title}
                                    </h3>
                                    <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                                    <ul className="mt-4 flex flex-col gap-4 lg:gap-0">
                                        {project.results.map((result) => (
                                            <li
                                                key={result.title}
                                                className="flex gap-2 text-white/50 md:mt-5 md:text-base"
                                            >
                                                <CheckIcon className="size-5 md:size-6" />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                                            <span>Visit Life Site</span>
                                            <ArrowUpRight size="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
