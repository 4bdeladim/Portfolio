import { skills } from "@/utils/skills";

export default function Skills() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-8 py-12">
                <div className="mx-auto max-w-xl">
                    <div className="grid gap-12 md:gap-24">
                        <div className="text-sm font-light">
                            <p className="text-black font-medium dark:text-white">
                                Skills & Languages:
                            </p>
                            <div className="grid gap-6 mt-3">
                                {skills.map((template, index) => (
                                                                          <div key={index} className="text-neutral-500  items-start grid grid-cols-1 md:grid-cols-3">
                                            <div className="md:col-span-1 w-full">
                                                <p className="text-black dark:text-white">
                                                    {template.title}
                                                </p>
                                            </div>
                                            <div className="md:col-span-2 w-full">
                                                <p className="text-neutral-400 dark:text-neutral-400">
                                                    {template.description}
                                                </p>
                                            </div>
                                        </div>
                                   
                                ))}
                            </div>
                            <p className="text-neutral-500 dark:text-neutral-400 space-y-3 mt-4">
                                My skill set is centered around modern web
                                development, with a strong focus on both
                                front-end and back-end technologies. I excel in
                                creating dynamic and responsive user interfaces
                                using leading JavaScript frameworks and
                                libraries. My backend development skills are
                                demonstrated through my proficiency in Laravel,
                                enabling me to construct robust APIs.
                                Additionally, my experience with WordPress
                                showcases my versatility in working with popular
                                content management systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
