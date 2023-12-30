import HeadSection from "../../utils/HeadSection"
import Content from "../../utils/Content"
import RevealOnScroll from "../../animations/RevealOnScroll"
import branchProductivity from "../../../assets/images/git-branch-productivity-c304b83d09c7.svg"
import branchSecurity from "../../../assets/images/git-branch-security-2-f6a799957581.svg"
import branchCollaboration from "../../../assets/images/git-branch-collaboration-2-e46b1fb1d363.svg"
import illuCopilot from "../../../assets/images/illu-copilot-editor-6474457a5b19.png"
import illuSecurity from "../../../assets/images/illustrations-security.png"
import illuSecuMobile from "../../../assets/images/illustration-security-mobile.png"
import illuPlan from "../../../assets/images/issues-plan-2-46d1ce1d4519.png"
import FirstCard from "../../utils/FirstCard"
import illuActions from "../../../assets/images/illu-actions-2-c5178134f381.png"
import illuCode from "../../../assets/images/illu-code-scanning-fc9dfb212aa3.png"

function MainContent () {
    const productivityOcticon = () => {
        return (
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-briefcase">
                <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
        )
    }

    const securityOcticon = () => {
        return (
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-lock">
                <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
            </svg>
        )
    }

    const collaborationOcticon = () => {
        return (
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-code-of-conduct">
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
            </svg>
        )
    }

    return (
        <>
            <HeadSection
                octicon={productivityOcticon()}
                octiconBgColor="var(--mktg-accent-primary)"
                verticalLineColor="linear-gradient(rgb(63, 185, 80), rgb(46, 160, 67), transparent)"
                colWidthOfTheSecondDiv="lg:w-8/12"
                title="Productivity"
                titleClassColor="text-accent-primary"
                description1="Accelerate innovation"
                description2="Our AI-powered platform increases the pace of software development."
            />
            <RevealOnScroll reveal="revealBottom">
                <img
                    src={illuCopilot}
                    className="w-full rounded-lg md:rounded-xl"
                    style={{border: '1px solid #FFFFFF22'}}
                    alt="copilot illustration"
                />
            </RevealOnScroll>
            <Content
                verticalLineColor="linear-gradient(transparent, rgb(63, 185, 80), rgb(63, 185, 80), transparent)"
                branchSrc={branchProductivity}
                description1="GitHub Copilot"
                description2="empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows."
                firstLink="Explore GitHub Copilot"
                secondDivClass="mt-10 lg:mt-32"
                title="22% increase"
                subtitle="in developer productivity after three years with GitHub"
                secondLink="Read the report"
                didYouKnowClass="border-primary text-accent-primary"
                textColor="text-accent-primary"
            />
            <FirstCard
                paddingClass="mt-10 md:pt-0 lg:pt-20 pb-12 sm:pb-20 md:pb-16"
                description1="GitHub Actions"
                description2="automates your build, test, and deployment workflow with simple and secure CI/CD."
                link="Discover Github Actions" 
                imgSrc={illuActions}
                imgAlt="actions illustrations"               
            />
            <HeadSection
                octicon={securityOcticon()}
                octiconBgColor="var(--mktg-accent-secondary)"
                verticalLineColor="linear-gradient(rgb(51, 179, 174) 40%, transparent)"
                colWidthOfTheSecondDiv="lg:w-7/12"
                title="Application security"
                titleClassColor="text-accent-secondary"
                description1="Empower developers"
                description2="With GitHub, you can secure code in minutes."
            />
            <RevealOnScroll reveal="revealBottom">
                <img
                    src={illuSecurity}
                    className="w-full hidden md:block"
                    alt="copilot security"
                />
                <img
                    src={illuSecuMobile}
                    className="w-full block md:hidden"
                    alt="copilot security"
                />
            </RevealOnScroll>
            <Content
                verticalLineColor="linear-gradient(transparent, rgb(51, 179, 174), rgb(51, 179, 174), transparent)"
                branchSrc={branchSecurity}
                description1="GitHub Advanced Security"
                description2="enables you to find and fix vulnerabilities with ease and ship secure code quickly."
                firstLink="Dive into GitHub Advanced Security"
                secondDivClass="mt-14 lg:mt-40"
                title="7x faster"
                subtitle="vulnerability fixes with GitHub1"
                didYouKnowClass="border-secondary text-accent-secondary"
                textColor="text-accent-secondary"
                hiddeSecondLink
            />
            <FirstCard
                paddingClass="mt-10 md:pt-0 md:w-10/12 lg:pt-5 pb-9 sm:pb-12 md:pb-16"
                description1="Code scanning"
                description2="is our code analysis tool that helps you remediate issues in your code."
                link="Download the latest SAST ebook" 
                imgSrc={illuCode}
                imgAlt="code illustrations"               
            />
            <HeadSection
                octicon={collaborationOcticon()}
                octiconBgColor="var(--mktg-accent-third)"
                verticalLineColor="linear-gradient(rgb(247, 120, 186) 40%, transparent)"
                colWidthOfTheSecondDiv="lg:w-8/12"
                title="Collaboration"
                titleClassColor="text-accent-third"
                description1="Supercharge collaboration"
                description2=" GitHub helps your teams work more efficiently together. "
            />
            <RevealOnScroll reveal="revealBottom">
                <img
                    src={illuPlan}
                    className="w-full rounded-lg md:rounded-xl"
                    style={{border: '1px solid #FFFFFF22'}}
                    alt="copilot illustration"
                />
            </RevealOnScroll>
            <Content
                verticalLineColor="linear-gradient(transparent, #F778BA, #F778BA, transparent)"
                branchSrc={branchCollaboration}
                description1="GitHub Issues and GitHub Projects"
                description2="supply project management tools that adapt to your team alongside your code."
                firstLink="Get startes with GitHub Issues"
                secondDivClass="mt-14 lg:mt-40"
                title="80x"
                subtitle="reduction in onboarding time with GitHub2"
                didYouKnowClass="border-third text-accent-third"
                textColor="text-accent-third"
                hiddeSecondLink
            />
        </>        
    )
}

export default MainContent