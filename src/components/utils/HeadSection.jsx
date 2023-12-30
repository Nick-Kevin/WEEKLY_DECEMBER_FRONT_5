function HeadSection (props) {
    return (
        <div className="flex sm:ml-0 lg:ml-4">
            <div className="flex flex-col w-1/12">
                <div className="mx-auto my-8 md:my-3">
                    <div class="relative inline-block z-1">
                        {props.octicon}
                        <span
                            class="absolute left-0 top-0 h-full w-full circle z-0"
                            style={{backgroundColor: `${props.octiconBgColor}`, filter: 'blur(18px)',}}
                        >
                        </span>
                    </div>
                </div>
                <div
                    className="mx-auto w-[2px] md:w-[3px] h-full"
                    style={{background: `${props.verticalLineColor}`}}
                >
                </div>
            </div>
            <div className="w-11/12 lg:w-8/12 ml-3 sm:ml-0 md:ml-4 lg:ml-0 mona-medium">
                <h2 className="text-white text-xl md:text-2xl mt-8 md:mt-2">{props.title}</h2>
                <h3 className="text-white text-[1.65rem] md:text-[2.5rem] lg:text-5xl leading-[1.2] md:leading-[1.05] mt-7 md:mt-4 mb-16 md:mb-24">
                    <span className="block text-accent-primary">{props.description1}</span>
                    {props.description2}
                </h3>
            </div>
        </div>
    )
}

export default HeadSection