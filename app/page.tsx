import { Hero, } from "@/components/layout";
import { heroItems, infoItems } from "@/data/data";
import Image from "next/image";

export default function Home() {
    return (
        <main>
          <Hero list={heroItems}/>

          <Hero list={infoItems}/>
        </main>
    );
}
