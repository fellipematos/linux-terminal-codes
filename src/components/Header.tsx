import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function Header() {
    return(
        <header className="w-full max-w-[1024px] px-4 py-4 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <ul className="flex items-center gap-6">
                        <li>Codes</li>
                        <li>+ Dicas</li>
                        <li><ThemeSwitcher /></li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    GitHub
                </div>
            </div>
        </header>
    )
}