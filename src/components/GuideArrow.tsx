import { useRef, type FunctionComponent } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

const GuideArrow: FunctionComponent<{ className: string }> = ( { className = "" } ) => {

    const pathOne = useRef<SVGPathElement | null>(null);
    const pathTwo = useRef<SVGPathElement | null>(null);
    const pathThree = useRef<SVGPathElement | null>(null);

    useGSAP( () => {

        if( !pathOne.current || !pathTwo.current || !pathThree.current ) return;

        gsap.fromTo( pathOne.current, { opacity: 1 }, { opacity: 0.2, repeat: -1, duration: 1, yoyo: true, ease: 'none' } )
        gsap.fromTo( pathTwo.current, { opacity: 1 }, { opacity: 0.2, repeat: -1, duration: 1, yoyo: true, ease: 'none', delay: 0.5 } )
        gsap.fromTo( pathThree.current, { opacity: 1 }, { opacity: 0.2, repeat: -1, duration: 1, yoyo: true, ease: 'none', delay: 0.75 } )

    }, [])

    const scrollTo = () => {

        window.scrollTo( {

            top: window.innerHeight,
            behavior: 'smooth'

        })

    }

    return (

        <svg width="75" height="64" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer ${className}`} onClick={scrollTo}>
            <path ref={pathOne} fillRule="evenodd" clipRule="evenodd" d="M74.5674 4.39551L37.4355 26.751L37.1514 27.2666L0 4.42676L2.42188 0.0527344L36.8965 21.2461L72.1836 0L74.5674 4.39551Z" fill="white"/>
            <path ref={pathTwo} fillRule="evenodd" clipRule="evenodd" d="M74.5674 22.3098L37.4355 44.6653L37.1514 45.1799L0 22.3411L2.42188 17.9661L36.8965 39.1604L72.1836 17.9143L74.5674 22.3098Z" fill="white"/>
            <path ref={pathThree} fillRule="evenodd" clipRule="evenodd" d="M74.5674 40.2239L37.4355 62.5793L37.1514 63.094L0 40.2551L2.42188 35.8801L36.8965 57.0745L72.1836 35.8284L74.5674 40.2239Z" fill="white"/>
        </svg>

    )

}

export default GuideArrow