function FirstCard (props) {
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
        <div className={`${props.flexDirection} flex flex-col md:justify-between bg-subtle rounded-xl border-[1px] border-slate-800`}>
            <div className={`${ props.paddingClass } flex flex-col justify-between px-8 md:px-9 lg:px-14 lg:pb-20`}>
                <h2 className='text-xl lg:text-[1.6rem] md:leading-snug text-mona mb-6 text-slate-500'>
                    <span className='text-white'>{props.description1} </span>
                    {props.description2}
                </h2>
                <a href="/" className='text-white mona-medium text-base lg:text-xl hover:underline hover:text-white'>
                    {props.link}
                    {arrowRight("18")}
                </a>
            </div>
            <div>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </div>
    )
}

export default FirstCard