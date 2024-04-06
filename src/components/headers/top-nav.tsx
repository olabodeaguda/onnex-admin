import { Typography } from "@material-tailwind/react"
import { ProfileHeader } from "./profile-header"
import { MobileMenu } from "./mobile-menu"

export const TopNav = () => {
    return <div className="global-content bg-deep-blue">
        <div className="main-content  justify-between text-white py-1"
        >
            <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-medium">
                Onnex admin
            </Typography>
            <div className="hidden md:block">
                <ProfileHeader />
            </div>
            <div className="md:hidden block">
                <MobileMenu />
            </div>
        </div>
    </div>
}