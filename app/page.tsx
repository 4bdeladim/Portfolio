import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main>
					<About />
					<Projects />
					<Skills />
					<Work />
					<Contact />
        </main>
    );
}
