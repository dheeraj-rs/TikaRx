import "./Background.css"
function Background() {
    return (
        <section className="w-full h-full absolute top-0 left-0 overflow-hidden -z-10">
            <div className="bg-left-design  bg-[#276A8C]  w-[500px] h-[500px]  absolute -left-[300px] -top-[150px] rotate-45 rounded-[80px] lg:w-[800px] lg:h-[800px] lg:-top-[10px] lg:-left-[410px] lg:rounded-[150px]"></div>
            <div className="bg-right-design  bg-[#276A8C] w-[500px] h-[500px] absolute -right-[300px] -bottom-[150px] -rotate-45 rounded-[80px] lg:w-[800px] lg:h-[800px] lg:bottom-[10px] lg:-right-[410px] lg:rounded-[150px]"></div>
        </section>
    )
}

export default Background