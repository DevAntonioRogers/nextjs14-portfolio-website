import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "project"] {
    name,
    image,
    url,
    category
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const projects = await getData();
  return (
    <>
      <Hero />
      <Portfolio projects={projects} />
      <Skills />
      <Testimonial />
      <Contact />
    </>
  );
}
