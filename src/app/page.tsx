import { SearchBar } from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>Linux Terminal Codes</div>
      <div className="p-10"><SearchBar /></div>
    </main>
  );
}
