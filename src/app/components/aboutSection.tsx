import ScrollDownButton from "./scrollButton";

export default function About() {
    return (
        <>
            <section id="about" className="min-h-screen py-[100px] sm:pb-8 flex flex-col">
                <div className="mb-8">
                    <span className="text-4xl italic text-beige text-center block">- About Me -</span>
                </div>
                <p className="text-lg sm:text-2xl text-beige font-light font-raleway font-domine font-montserrat font-outfit 
                          max-w-4xl text-center">
                    Hey there 👋👦🏻, thanks for coming by! I&apos;m currently a third-year student at the University of British Columbia
                    doing a Combined Major in Computer Science and Business. I have a strong passion for innovation using technology, especially
                    when it&apos;s used to solve real-world problems. When I&apos;m not studying or developing a new project, you can find me
                    playing sports (⚽️, 🏀, 🏐), playing music (🎸, 🎹, 🎤), or learning new languages.
                </p>
                <ScrollDownButton targetId="experiences" label="↓ next" sectionId="experiences" className="mt-10" />
            </section>
        </>

    );
}
