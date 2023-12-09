"use client"
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {
		useEffect(() => {
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		})
    return (
        <main className="dark:bg-[#09090b]">
					<About />
					<Projects />
					<Skills />
					<Work />
					<Contact />
        </main>
    );
}
