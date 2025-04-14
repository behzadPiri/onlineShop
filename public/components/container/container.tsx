import {ReactNode} from "react";

interface IContainer {
    children: ReactNode;
}


const Container = ({children}: IContainer) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
};
export default Container
