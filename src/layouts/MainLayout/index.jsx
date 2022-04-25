import Navbar from "../Navbar"

const MainLayout = ({children}) => {
    return (
        <div className="min-h-[100vh]">
            <div className="px-5">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default MainLayout