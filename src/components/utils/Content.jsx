import RevealOnScroll from '../animations/RevealOnScroll'
import SetElementOnScroll from '../animations/SetElementOnScroll'
import { Fade } from 'react-reveal'

function Content (props) {
    const arrowRight = (size) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                class="octicon ml-2 arrow-symbol-mktg" width={size} height={size} viewBox="0 0 16 16" fill="none">
                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round">
                </path>
            </svg>
        )
    }
    
    return (
        <div className="flex sm:ml-0 lg:ml-4 h-[609px] sm:h-[613px] md:h-[697px] lg:h-[737px]">
            <div className="w-1/12 relative">
                <div
                    className="mx-auto w-[2px] md:w-[3px] h-full"
                    style={{background: `${props.verticalLineColor}`}}
                >
                </div>
                <img
                    src={props.branchSrc}
                    className='absolute bottom-4 hidden md:block'
                    style={{left: 'calc(50% - 2px)'}}
                    alt=""
                />
            </div>
            <div className='w-11/12 ml-2 md:ml-6'>
                <div className='w-full sm:w-10/12 md:w-6/12 py-3 px-4'>
                    <RevealOnScroll reveal="revealRight">
                            <div className='md:pr-4 my-5 sm:my-7 md:my-8 '>
                                <h2 className='text-xl lg:text-[1.6rem] text-mona mb-6 text-slate-500'>
                                    <span className='text-white'>{props.description1} </span>
                                    {props.description2}
                                </h2>
                                <a href="/" className='text-white mona-medium text-base lg:text-xl hover:underline hover:text-white'>
                                    {props.firstLink}
                                    {arrowRight("24")}
                                </a>
                            </div>
                    </RevealOnScroll>
                </div>
                <div className={`${ props.secondDivClass} sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 py-3 px-4 md:mt-40`}>
                    <SetElementOnScroll>
                        <Fade bottom>
                            <div>
                                <span className={`${props.didYouKnowClass} mona-semibold text-xs py-1 px-2 rounded-xl`}>
                                    Did you know ?
                                </span>
                            </div>
                            <h3 className={`${props.textColor} mona-medium text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] leading-tight mt-4 lg:mt-6`}>
                                {props.title}
                            </h3>
                            <p className='text-white mona-medium text-xl lg:text-2xl mt-2 md:mt-6 mb-5 md:mb-6'>
                                {props.subtitle}
                            </p>
                            {
                                props.hiddeSecondLink ?
                                    ''
                                :
                                    (
                                        <a href="/" className='text-white mona-medium text-base md:text-xl hover:underline hover:text-white'>
                                            {props.secondLink}
                                            {arrowRight("16")}
                                        </a>
                                    )
                            }
                        </Fade>
                    </SetElementOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Content