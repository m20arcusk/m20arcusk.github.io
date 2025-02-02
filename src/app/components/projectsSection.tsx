import ExperienceCard from "./experience-card";
import ScrollDownButton from "./scrollButton";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen items-center py-[50px]">
            <div className="flex items-center my-8">
                <span className="mx-4 text-4xl italic text-beige"> - Projects - </span>
            </div>
            <div className="flex flex-col items-start gap-4">
                <ExperienceCard
                    image="/calhacks.png"
                    company="CalHacks 11.0"
                    date=" - Oct 2024"
                    role="SoundChain"
                    description={[
                        "Second Place winner of Sui Sponsor Prize",
                        "https://devpost.com/software/soundchain"
                    ]}
                />
                <ExperienceCard
                    image="/stormhacks.png"
                    company="Stormhacks"
                    date=" - Oct 2024"
                    role="Presentify"
                    description={["No time for slides? Generate a presentation as you're saying it","https://devpost.com/software/presentify",]}
                />
                <ExperienceCard
                    image="/nwhacks.png"
                    company="NW Hacks"
                    date=" - Jan 2024"
                    role="Time Capsules"
                    description={["Custom SMS reminders for your medication handled by Computer Vision", "https://devpost.com/software/timecapsules",]}
                />
                <ExperienceCard
                    image="/bucs.png"
                    company="BUCS Hackathon"
                    date=" - Nov 2022"
                    role="Rizzify"
                    description={["https://devpost.com/software/bucshackathon",]}
                />
            </div>
            <ScrollDownButton targetId="top" label="return" sectionId="top" className="mt-auto my-10" />
        </section>
    );
}