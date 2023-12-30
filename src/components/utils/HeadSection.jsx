import SetElementOnScroll from '../animations/SetElementOnScroll'
import { Fade } from 'react-reveal'
import RevealOnScroll from '../animations/RevealOnScroll'

function HeadSection (props) {
    return (
        <div className="flex sm:ml-0 lg:ml-4">
            <div className="flex flex-col w-1/12">
                {
                    props.hiddeFirstVerticalLine ?
                        ''
                    :
                        (
                            <div
                                className="mx-auto w-[2px] md:w-[3px] h-80"
                                style={{background: `${props.firstVerticalLineColor}`}}
                            >
                            </div>
                        )
                }
                <div className="mx-auto my-8  md:my-3">
                    <div class="relative inline-block z-1">
                        <RevealOnScroll>
                            {props.octicon}
                            <span
                                class="absolute left-0 top-0 h-full w-full circle z-0"
                                style={{backgroundColor: `${props.octiconBgColor}`, filter: 'blur(18px)',}}
                            >
                            </span>
                        </RevealOnScroll>
                    </div>
                </div>
                <div
                    className="mx-auto w-[2px] md:w-[3px] h-full"
                    style={{background: `${props.verticalLineColor}`}}
                >
                </div>
            </div>
            <div className={`${props.colWidthOfTheSecondDiv} h-[336px] sm:h-[208px] ${ props.hiddeFirstVerticalLine ? 'lg:h-[328px] md:h-[304px]' : 'pt-[8.7rem] md:pt-[10.5rem] lg:pt-[11rem] md:h-[450px] lg:h-[480px]' } w-11/12 ml-3 sm:ml-0 md:ml-4 lg:ml-0 mona-medium`}>
                        <h2 className="text-white text-xl md:text-2xl mt-8 md:mt-2">
                            <SetElementOnScroll>
                                <Fade left>
                                    {props.title}
                                </Fade>
                            </SetElementOnScroll>
                        </h2>
                        <h3 className="text-white text-[1.65rem] md:text-[2.5rem] lg:text-5xl leading-[1.2] md:leading-[1.05] mt-7 md:mt-4 mb-16 md:mb-24">
                            <span className={`${props.titleClassColor} block`}>
                                <SetElementOnScroll>
                                    <Fade left>
                                        {props.description1}
                                    </Fade>
                                </SetElementOnScroll>
                            </span>
                            <SetElementOnScroll>
                                <Fade left>
                                    {props.description2}
                                </Fade>
                            </SetElementOnScroll>
                        </h3>
            </div>
        </div>
    )
}

export default HeadSection