import { projects } from "@/utils/projects";

export default function Projects() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-8 py-12">
                <div className="mx-auto max-w-xl">
                    <div className="grid gap-12 md:gap-24">
                        <div className="font-light text-sm">
                            <p className="text-black font-medium dark:text-white">
                              Projects
                            </p>

                            <div className="grid gap-6 mt-3">
                                {projects.map((template, index) => (
                                        <div key={index} className="text-neutral-500  items-start grid grid-cols-1 md:grid-cols-3">
                                            <div className="md:col-span-2 w-full">
																								<p>
                                                  {template.title}
                                                </p>
                                                <p className="text-black dark:text-white flex gap-4 mt-2">
                                                    <a
                                                        href={template.code}
                                                        className="underline hover:no-underline duration-200 after:content-['_↗'] text-sm"
                                                        target="_blank"
                                                    >
                                                        Code
                                                    </a>
																										<a
                                                        href={template.demo}
                                                        className="underline hover:no-underline duration-200 after:content-['_↗'] text-sm"
                                                        target="_blank"
                                                    >
                                                        Demo
                                                    </a>
                                                </p>
                                                
                                            </div>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}
