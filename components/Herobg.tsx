'use client'

const Herobg = (props:any) => {
    return ( 
        <video autoPlay={true} muted={true} loop playsInline
            className="w-full h-full absolute">
            <source src='vidoes/gas.mp4' type="video/mp4" />
        </video>
     );
}
 
export default Herobg;