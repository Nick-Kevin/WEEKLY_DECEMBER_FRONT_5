function MainContent () {
    return (
        <>
            <div className="flex sm:ml-0 lg:ml-4">
                <div className="flex flex-col w-1/12">
                    <div className="mx-auto my-8 md:my-3">
                        <div class="relative inline-block z-1">
                            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-code">
                                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                            </svg>
                            <span
                                class="absolute left-0 top-0 h-full w-full circle z-0"
                                style={{backgroundColor: '#7C72FF', filter: 'blur(18px)',}}
                            >
                            </span>
                        </div>
                    </div>
                    <div
                        className="mx-auto w-[2px] md:w-[3px] h-full"
                        style={{background: 'linear-gradient(#7C72FF, #2DA44E 80%, #3FB950)'}}
                    >
                    </div>
                </div>
                <div className="w-11/12 lg:w-8/12 ml-3 sm:ml-0 md:ml-4 lg:ml-0 mona-medium">
                    <h2 className="text-white text-xl md:text-2xl mt-8 md:mt-2">Productivity</h2>
                    <h3 className="text-white text-[1.65rem] md:text-[2.5rem] lg:text-5xl leading-[1.2] md:leading-[1.05] mt-7 md:mt-4 mb-16 md:mb-24">
                        <span className="block text-accent-primary">Accelerate innovation</span>
                        Our AI-powered platform increases the pace of software development.
                    </h3>
                </div>
            </div>
        </>        
    )
}

export default MainContent