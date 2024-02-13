import { SearchBar } from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        Linux Terminal <span className="gradient-text">Codes.</span>
      </h1 >
      <h2 className="pt-4 text-1xl font-light tracking-tight">* <strong className="font-extrabold">CRTL + F</strong> para localizar o comando</h2>
    </main>
  );
}
