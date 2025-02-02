import ExperienceCard from "./experience-card";
import ScrollDownButton from "./scrollButton";

export default function Experiences() {
    return (
        <section id="experiences" className="min-h-screen py-[50px] items-center sm:pb-8">

            <div className="flex items-center my-8">
                <span className="ml-4 text-4xl italic text-beige"> - Experiences - </span>
            </div>
            <div className="flex flex-col items-start gap-4">
                <ExperienceCard
                    image="/amazon.jpeg"
                    company="Amazon"
                    date=" - May 2025 - Aug 2025"
                    role="Software Developer Engineer Intern"
                    description={[
                        "Incoming Summer 2025",
                    ]}  
                />
                <ExperienceCard
                    image="/incognito.jpg"
                    company="Incognito Software Systems"
                    date=" - Sept 2024 - April 2025"
                    role="QA Engineer Intern"
                    description={[
                        "Developed automated tests with JUnit, Selenium, and Playwright, enhancing test coverage and early bug detection.",
                        "Automated test execution using Docker and Jenkins CI/CD, improving efficiency and reducing manual effort."
                    ]}                    
                />
                <ExperienceCard
                    image="/biztech.jpeg"
                    company="UBC Biztech"
                    date=" - May 2024 - April 2025"
                    role="Software Developer"
                    description={[
                        "Integrated AWS serverless backend with DynamoDB for real-time data handling in the member portal.",
                        "Developed a live voting feature using AWS Lambda, API Gateway, and DynamoDB for real-time analysis."
                    ]}
                />
                <ExperienceCard
                    image="/launchpad.jpeg"
                    company="UBC Launchpad"
                    date=" - Sept 2023 - April 2024"
                    role="Developer"
                    description={[
                        "Implemented collaborative filtering with cosine similarity in Python for personalized restaurant recommendations.",
                        "Integrated Google Maps and Routes APIs in Node.js for dynamic restaurant navigation."
                    ]}
                />
            </div>
            <ScrollDownButton targetId="projects" label="↓ next" sectionId="projects" className="top-[190%]" />
        </section>
    );
}