import { Hero, Info, Bubbles} from "@/components/layout";
import { heroItems, infoItems } from "@/data/data";

export default function Home() {
    return (
        <main>
            <Bubbles/>
            <Hero list={heroItems} className="bg-brand-pink"/>
            <Info list={infoItems}/>
        </main>
    );
}
