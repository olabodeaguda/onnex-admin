import { BottomNav } from "./bottom-nav"
import { TopNav } from "./top-nav"

export const AppHeader = () => {

    return <div>
        <TopNav />
        <div className="hidden md:block">
            <BottomNav />
        </div>
    </div>
}