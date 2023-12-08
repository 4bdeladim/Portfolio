import { contact } from "@/utils/contact";

export default function Contact() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-8 py-12">
                <div className="mx-auto max-w-xl">
                    <div className="text-sm font-light">
                        <p className="text-black font-medium dark:text-white">
                            Contact
                        </p>
                        <div className="grid gap-6 mt-3">
                            {contact.map((template, index) => (
                                    <div key={index} className="text-neutral-500  items-start grid grid-cols-1 md:grid-cols-3">
                                        <div>
                                            <p className="text-neutral-400 dark:text-neutral-400">
                                                {template.type}
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 w-full">
                                            <p className="text-black dark:text-white">
                                                <a
                                                    href={template.link}
                                                    title={template.type}
                                                    className="underline hover:no-underline duration-200 after:content-['_↗']"
                                                >
                                                    {template.title}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
