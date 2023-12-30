import threeM from '../../../assets/images/3m-0151c2fda0ce.svg'
import kpmg from '../../../assets/images/kpmg-c249f20c5173.svg'
import mercedes from '../../../assets/images/mercedes-fcf97d2d6ec4.svg'
import sap from '../../../assets/images/sap-96248a56d312.svg'
import pAndG from '../../../assets/images/pg-f1f19955c4e4.svg'
import telus from '../../../assets/images/telus-df0c2109df99.svg'

function BuildFromHere () {
    return (
        <div className="flex relative z-20 mt-12 sm:mt-20 lg:mt-[8.2rem] sm:ml-0 lg:ml-4">
            <div className="flex flex-col mt-32 sm:mt-0 w-1/12">
                <div className="mx-auto p-1 rounded-xl border-2 border-slate-500"></div>
                <div
                    className="mx-auto w-[2px] md:w-[3px] h-full"
                    style={{background: 'linear-gradient(transparent, #7C72FF 30%)'}}
                >
                </div>
                <div className="mx-auto my-3">
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
            <div className="mt-24 w-full sm:mt-0 ml-3 sm:ml-0 md:ml-4 lg:ml-0">
                <h1 className="text-white text-6xl md:text-8xl mb-2 font-semibold">
                    <span>
                        Let's build from here
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mona-regular text-slate-500 second-font mb-4 md:mb-24">
                    The world’s leading AI-powered developer platform.
                </p>
                <div className="flex flex-col md:flex-row mb-14 md:mb-24">
                    <div className="flex flex-col md:flex-row gap-y-4 md:w-7/12 lg:w-5/12">
                        <input
                            placeholder="Email adress"
                            type="email"
                            className="w-full p-3 rounded-md md:rounded-tr-none md:rounded-br-none"
                        />
                        <button className="home-campaign-signup-button py-3 rounded-md md:rounded-tl-none md:rounded-bl-none text-white font-semibold w-full md:w-80">
                            Sign up for Github
                        </button>
                    </div>
                    <div className="mx-0 md:mx-4 my-4 md:my-0 border-b-[1px] border-b-slate-700 md:border-b-none md:border-l-[1px] md:border-l-slate-700"></div>
                    <button className="bg-transparent text-white border-[1px] border-blue-400 py-3 rounded-md w-full md:w-[18rem] font-semibold">
                        Start a free entreprise trial
                        <svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon ml-2 rotate-[-90deg] octicon-chevron-down HeaderMenu-icon ml-1">
                            <path stroke="white" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-slate-500 mona-regular text-base mb-6 w-10/12 md:w-full md:text-xl">
                    Trusted by the world’s leading organizations ↘︎
                </p>
                <div className='flex flex-wrap justify-center gap-x-[15%] sm:gap-x-[8%] md:gap-x-0 gap-y-7 md:justify-between items-center w-full lg:w-11/12 mb-28'>
                    <img src={threeM} alt="3M" />
                    <img src={kpmg} alt="KPMG" />
                    <img src={mercedes} className='w-40 h-10' alt="Mercedes Benz" />
                    <img src={sap} alt="SAP" />
                    <img src={pAndG} alt="p&g" />
                    <img src={telus} alt="telus" />
                </div>
            </div>
        </div>
    )
}

export default BuildFromHere