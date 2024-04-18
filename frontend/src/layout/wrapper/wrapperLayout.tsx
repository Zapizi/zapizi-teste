import { useState } from "react";

type Props = {
    children: React.ReactNode;
}

export default function WrapperLayout({ children }: Props){
    return (
        <>
            <title>Mock App</title>

            <div className="container mt-5">
                {children}
            </div>
                
        </>
    );
}