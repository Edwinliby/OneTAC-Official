function Cube({ Color }) {
    return (
        <div className="group cursor-pointer active:-translate-y-3 hover:-translate-y-2 transition duration-300">
            <div className="w-8 h-8 perspective-[500px]">
                <div className="w-full h-full relative transform-style-preserve-3d">

                    {/* Front Face */}
                    <div className="absolute w-full h-full border border-white"
                        style={{ backgroundColor: Color }}></div>

                    {/* Side Face */}
                    <div className="absolute w-[30%] h-full border border-white 
                                    translate-x-[32px] translate-y-[-3px] rotate-y-[10deg] skew-y-[-40deg]"
                        style={{ backgroundColor: Color, opacity: 0.7 }}></div>

                    {/* Top Face */}
                    <div className="absolute w-full h-[30%] border border-white 
                                    translate-x-[6px] translate-y-[-10px] skew-x-[-50deg]"
                        style={{ backgroundColor: Color, opacity: .8 }}></div>
                </div>
            </div>
        </div>
    );
};

export default function Cubes({ Color }) {
    return (
        <div className='flex'>
            <Cube Color={Color} />
            <Cube Color={Color} />
            <Cube Color={Color} />
        </div>
    );
}