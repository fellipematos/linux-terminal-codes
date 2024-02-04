import { SearchBar } from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-48">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Linux Terminal <span className="gradient-text">Codes.</span>
        </h1>
      </div>
      <div className="p-14"><SearchBar /></div>
    </main>
  );
}
