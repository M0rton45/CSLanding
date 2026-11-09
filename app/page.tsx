import { Hero, } from "@/components/layout";
import { heroItems, infoItems } from "@/data/data";

export default function Home() {
    return (
        <main>
          <Hero list={heroItems} className="bg-brand-pink"/>
          <Hero list={infoItems}/>
        </main>
    );
}
