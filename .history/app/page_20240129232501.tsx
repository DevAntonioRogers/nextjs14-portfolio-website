import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type == "project] {
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
      <Portfolio />
    </>
  );
}
