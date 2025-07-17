function Footer(){
return(
<section className="left-0 absolute w-full lg:mt-1100 md:mt-1350 mt-1300 flex flex-col lg:flex-row justify-center gap-30 lg:gap-90 p-20" style={{ background: '#1E3240' }}>

     <div className="leading-loose">
            <h1 className="text-white font-bold text-xl">LUGAR</h1>
        
           <p className="text-gray-400 font-semibold"> 🚂 2118 Thornridge Cir, Dubai, UAE 35625</p>
           <p className="text-gray-400 font-semibold">📲 +33 415 65356-9</p>
           <p className="text-gray-400 font-semibold">📩 contact@Lugar.com</p>
           <p className="text-gray-400 font-semibold lg:mt-30">Copyright&copy;Lugarinc.</p>
        </div>

    <div className="grid grid-cols-1 lg:grid-cols-3  gap-20 lg:gap-60">
        <div  className="leading-loose flex flex-col">
            <h1 className="text-white font-bold text-xl">QUICK LINKS</h1>
            <a href="#" className="text-gray-400 font-semibold">Home</a>
            <a href="#" className="text-gray-400 font-semibold">About</a>
            <a href="#" className="text-gray-400 font-semibold">Project</a>
            <a href="#" className="text-gray-400 font-semibold">Contact</a>
            
        </div>

         <div  className="leading-loose flex flex-colflex flex-col">
            <h1 className="text-white font-bold text-xl">LEGAL LINKS</h1>
            <a href="#" className="text-gray-400 font-semibold">Terms</a>
            <a href="#" className="text-gray-400 font-semibold">Condition</a>
            <a href="#" className="text-gray-400 font-semibold">Policy</a>
        </div>

         <div  className="leading-loose flex flex-col">
            <h1 className="text-white font-bold text-xl">SOCIAL MEDIA</h1>
            <a href="#" className="text-gray-400 font-semibold">Facebook</a>
            <a href="#" className="text-gray-400 font-semibold">Twitter</a>
            <a href="#" className="text-gray-400 font-semibold">Youtube</a>
            <a href="#" className="text-gray-400 font-semibold">Linkdln</a>
        </div>
    </div>
</section>
)

}
export default Footer