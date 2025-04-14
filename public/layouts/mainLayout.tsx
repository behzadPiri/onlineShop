import {ReactNode} from "react";
import {Navbar} from "@/public/components";

interface IMainLayout {
    children: ReactNode;
}

const MainLayout = ({children}:IMainLayout) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};
export default MainLayout
