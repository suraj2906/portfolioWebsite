import React, {ReactNode, useState, useEffect} from "react";


interface GradientDivProps{
    children:ReactNode
    className:string
}
const GradientDiv:React.FC<GradientDivProps> = ({children,className}) =>{
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const GradientPosition = () => {
        return {
            x: mousePosition.x + scrollPosition.x,
            y: mousePosition.y + scrollPosition.y,
        };
        };
    
        useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        const handleScroll = () => {
            setScrollPosition({ x: window.scrollX, y: window.scrollY });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
    
        // // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);

    return(
        <div 
        style={{
            backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${GradientPosition().y}px, #333333, black 20%)`
        }}
        className={className}>
            {children}
        </div>
    )
}

export default GradientDiv