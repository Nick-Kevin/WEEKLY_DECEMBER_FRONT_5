import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="pt-10 relative"
      data-analytics-visible='{"category":"Footer","action":"visible","label":"text: Marketing footer"}'
      data-color-mode="dark"
      data-dark-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-4">
        <div className="flex flex-wrap py-5 mb-5">
          <div className="grid-cols-12 lg:grid-cols-4 w-full lg:w-4/12 mb-5">
            <a
              href="/"
              data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
              className="color-fg-default inline-block"
              aria-label="Go to GitHub homepage"
            >
              <svg
                height="30"
                aria-hidden="true"
                viewBox="0 0 45 16"
                version="1.1"
                width="84"
                data-view-component="true"
                className="octicon octicon-logo-github footer-logo-mktg width-auto d-block"
              >
                <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"></path>
              </svg>
            </a>

            <div>
              <h2
                className="h5 mt-4 text-white text-sm font-bold"
                id="subscribe-to-newsletter"
              >
                Subscribe to our developer newsletter
              </h2>
              <p className="f5 text-slate-500 mb-7 text-sm">
                Get tips, technical guides, and best practices. Once a month.
                Right in your inbox.
              </p>
              <a
                className="py-3 px-6 mb-4 text-white border-[1px] border-slate-500 hover:text-white hover:border-2 hover:border-white rounded-lg"
                data-analytics-event='{"category":"Subscribe","action":"click to Subscribe","label":"ref_cta:Subscribe;"}'
                href="https://resources.github.com/newsletter/"
              >
                Subscribe
              </a>
            </div>
          </div>
        
        <div className="grid grid-cols-2 w-full sm:w-6/12 lg:w-4/12">
          <div className="grid-cols-6 text-sm sm:grid-cols-3 lg:grid-cols-2 mb-6 md:mb-2 mt-12 lg:mt-0 pr-3 lg:pr-0  lg:pl-4">
            <h2 className="h5 mb-3 text-mono text-slate-500 text-normal">
              Product
            </h2>

            <ul className="style-none text-slate-300 f5">
              <li className="lh-condensed mb-3 ">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to features","label":"text:features"}'
                  href="/features"
                >
                  Features
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to enterprise","label":"text:enterprise"}'
                  href="/enterprise"
                >
                  Enterprise
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to copilot","label":"text:copilot"}'
                  href="/features/copilot"
                >
                  Copilot
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
                  href="/security"
                >
                  Security
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to pricing","label":"text:pricing"}'
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to team","label":"text:team"}'
                  href="/team"
                >
                  Team
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to resources","label":"text:resources"}'
                  href="https://resources.github.com"
                >
                  Resources
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to roadmap","label":"text:roadmap"}'
                  href="https://github.com/github/roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to compare github","label":"text:compare github"}'
                  href="https://resources.github.com/devops/tools/compare/"
                >
                  Compare GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm grid-cols-6 sm:grid-cols-3 lg:grid-cols-2 mt-12 lg:mt-0 mb-6 md:mb-2 pr-3 md:pr-0 md:pl-4">
            <h2 className="h5 mb-3 text-mono text-slate-500 text-normal">
              Platform
            </h2>

            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
                  href="https://docs.github.com/get-started/exploring-integrations/about-building-integrations"
                >
                  Developer API
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to partner","label":"text:partner"}'
                  href="https://partner.github.com"
                >
                  Partners
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to electron","label":"text:electron"}'
                  href="https://www.electronjs.org"
                >
                  Electron
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to desktop","label":"text:desktop"}'
                  href="https://desktop.github.com/"
                >
                  GitHub Desktop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full sm:w-6/12 lg:w-4/12 text-sm mt-5 sm:mt-12 lg:mt-0">
          <div className="grid-cols-6 sm:grid-cols-3 lg:grid-cols-2 mb-6 md:mb-2 pr-3 md:pr-0 md:pl-4">
            <h2 className="h5 mb-3 text-mono text-slate-500 text-normal">
              Support
            </h2>

            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to help","label":"text:Docs"}'
                  href="https://docs.github.com"
                >
                  Docs
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to community","label":"text:community"}'
                  href="https://github.community"
                >
                  Community Forum
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to professional services","label":"text:professional services"}'
                  href="https://services.github.com/"
                >
                  Professional Services
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to premium support","label":"text:premium support"}'
                  href="/premium-support"
                >
                  Premium Support
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to skills","label":"text:skills"}'
                  href="https://skills.github.com/"
                >
                  Skills
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
                  href="https://www.githubstatus.com/"
                >
                  Status
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
                  href="https://support.github.com?tags=dotcom-footer"
                >
                  Contact GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="grid-cols-6 sm:grid-cols-3 lg:grid-cols-2 mb-6 md:mb-2 pr-3 md:pr-0 md:pl-4">
            <h2 className="h5 mb-3 text-mono text-slate-500 text-normal">
              Company
            </h2>

            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to about","label":"text:about"}'
                  href="https://github.com/about"
                >
                  About
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to customer stories","label":"text:customer stories"}'
                  href="/customer-stories?type=enterprise"
                >
                  Customer stories
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
                  href="https://github.blog"
                >
                  Blog
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to the readme project","label":"text:the readme project"}'
                  href="/readme"
                >
                  The ReadME Project
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to careers","label":"text:careers"}'
                  href="/about/careers"
                >
                  Careers
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to press","label":"text:press"}'
                  href="/about/press"
                >
                  Press
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to diversity","label":"text:Inclusion"}'
                  href="/about/diversity"
                >
                  Inclusion
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to social impact","label":"text:social impact"}'
                  href="https://socialimpact.github.com/"
                >
                  Social Impact
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to shop","label":"text:shop"}'
                  href="https://shop.github.com"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="bg-subtle text-xs px-4 sm:px-8 lg:px-0">
        <div className="max-w-7xl mx-auto p-responsive f6 py-6 sm:flex justify-between flex-row-reverse items-center">
          <ul className="style-none flex items-center lg:gap-x-1 lg:mr-5 mb-3 sm:mb-0 lh-condensed-ultra">
            <li className="mr-3">
              <a
                href="https://x.com/github"
                data-analytics-event='{"category":"Footer","action":"go to X","label":"text:x"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/x-023c3ca5e173.svg"
                  height="16"
                  width="16"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="X icon"
                />
                <span className="sr-only">GitHub on X</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.facebook.com/GitHub"
                data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:facebook"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/facebook-de85282d23e6.svg"
                  width="18"
                  height="18"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="Facebook icon"
                />
                <span className="sr-only">GitHub on Facebook</span>
              </a>
            </li>
            <li className="mr-3 flex self-start">
              <a
                href="https://www.linkedin.com/company/github"
                data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/linkedin-3c0ace8edb5f.svg"
                  width="19"
                  height="18"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="Linkedin icon"
                />
                <span className="sr-only">GitHub on LinkedIn</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.youtube.com/github"
                data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:youtube"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg"
                  width="23"
                  height="16"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="YouTube icon"
                />
                <span className="sr-only">GitHub on YouTube</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.twitch.tv/github"
                data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:twitch"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/twitch-e576606a89a7.svg"
                  width="18"
                  height="18"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitch icon"
                />
                <span className="sr-only">GitHub on Twitch</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.tiktok.com/@github"
                data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:tiktok"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/tiktok-5d12d948d920.svg"
                  width="18"
                  height="18"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="TikTok icon"
                />
                <span className="sr-only">GitHub on TikTok</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/github"
                data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
                className="color-fg-subtle"
              >
                <img
                  src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg"
                  width="20"
                  height="20"
                  className="block"
                  loading="lazy"
                  decoding="async"
                  alt="GitHub mark"
                />
                <span className="sr-only">GitHub’s organization on GitHub</span>
              </a>
            </li>
          </ul>

          <ul className="list-none flex flex-wrap text-slate-500 mt-5 sm:mt-0 gap-y-1 lg:gap-y-0">
            <li className="mx-2">© 2023 GitHub, Inc.</li>

            <li className="mx-2">
              <a
                href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
                data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
                className="Link--secondary"
              >
                Terms
              </a>
            </li>

            <li className="mx-2">
              <a
                href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
                className="Link--secondary"
              >
                Privacy
              </a>
              (
              <a
                href="https://github.com/github/site-policy/pull/582"
                className="Link--secondary"
              >
                Updated 08/2022
              </a>
              )
            </li>

            <li className="mx-2">
              <a
                className="Link--secondary"
                data-analytics-event='{"category":"Footer","action":"go to sitemap","label":"text:sitemap"}'
                href="/sitemap"
              >
                Sitemap
              </a>
            </li>

            <li className="mx-2">
              <a
                className="Link--secondary"
                data-analytics-event='{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?"}'
                href="/git-guides"
              >
                What is Git?
              </a>
            </li>

            <li className="mx-2">
              <cookie-consent-link data-catalyst="">
                <button
                  type="button"
                  className="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                  data-action="click:cookie-consent-link#showConsentManagement"
                >
                  Manage cookies
                </button>
              </cookie-consent-link>
            </li>

            <li className="mx-2">
              <cookie-consent-link data-catalyst="">
                <button
                  type="button"
                  className="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                  data-action="click:cookie-consent-link#showConsentManagement"
                >
                  Do not share my personal information
                </button>
              </cookie-consent-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
