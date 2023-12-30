import Globe from "react-globe.gl"
import globeImg from "../../../assets/images/new-globe.png"
import cat from '../../../assets/images/footer-mona-d1c861cd8018.png'
import head from "../../../assets/images/footer-copilot-54114bfd1d20.png"
import diamond from "../../../assets/images/footer-diamond-ed642fc95144.png"
import blur from "../../../assets/images/footer-blur-8bc8e1f23df6.png"
import orba from "../../../assets/images/footer-orb-a0438104a7a2.png"
import star from "../../../assets/images/footer-star-36e5b5724973.png"

function MyGlobe () {
    const N = 20
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]],
    }))
    return (
        <div className="relative">
            <Globe
                globeImageUrl={globeImg}
                backgroundColor="#0d1117"
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
            />
            <img src={cat} className="absolute hidden lg:block z-100 top-96 right-80 w-48" alt="cat" />
            <img src={head} className="absolute hidden w-40 lg:block top-40 left-56" alt="head" />
            <img src={star} className="absolute hidden w-10 lg:block" style={{top: '380px', left: '200px'}} alt="star" />
            <img src={diamond} className="absolute hidden lg:block top-28 right-80 w-12" alt="diamond" />
            <img src={orba} className="absolute hidden lg:block top-40 right-40 w-20" alt="orba" />
        </div>
    )
}

export default MyGlobe