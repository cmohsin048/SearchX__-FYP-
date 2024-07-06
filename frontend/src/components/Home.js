import React from 'react'
import Heropic from '../hero-pic.png'
// import { useSelector } from 'react-redux'

const Home = () => {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // console.log(isLoggedIn)
    return (

        <div className='home-page'>
            <div className='Hero'>
                <div className='left-side'>
                    <h5>#1 FREE PRODUCT HUNTING SOFTWARE</h5>
                    <h1>Boost your sales with our <span>product research</span> tools</h1>
                    <p>Effortlessly discover top-selling products and stock your store with winning items. Get accurate sales data for any product and identify those with immense potential for success.</p>
                </div>
                <div className='right-side'>
                    <img alt='stats' src={Heropic} />
                </div>
            </div>
            <div className="middle">
                <div className='heading'>
                    <h2> Say good-bye to manual hunting, achieve your goals faster with SearchX.</h2>
                    <p>A comprehensive product research software for businesses of all sizes. Say goodbye to manual processes and hello to a streamlined product hunting experience.</p>
                </div>
                <div className='card-list'>
                    <div className='card-wrap'>
                        <div className='card'>
                            <div className='card-icon'>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="1.2em"
                                    height="1.2em"
                                    aria-hidden="true"
                                >
                                    <g fill="none">
                                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                        <path
                                            fill="currentColor"
                                            d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3h12.12ZM15 7a1 1 0 0 0-.993.883L14 8a2 2 0 1 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 8 0a1 1 0 0 0-1-1Z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <h4>Url Search</h4>
                            <p>Get the details of the product you want by simply copy and pasting its URL</p>
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className='card'>
                            <div className='card-icon'>
                                <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" aria-hidden="true" data-v-e7f55c2a=""><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M13 3a2 2 0 0 1 1.995 1.85L15 5v16H9V5a2 2 0 0 1 1.85-1.995L11 3h2Zm7 5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3V8h3ZM7 11v10H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3Z"></path></g></svg>
                            </div>
                            <h4>Accurate Product Data</h4>
                            <p>XenonHunt offers acurate sales data with just one click, eliminating the need for guessing</p>
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className='card'>
                            <div className='card-icon'>
                                <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" aria-hidden="true" data-v-e7f55c2a=""><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586V4.5Z"></path></g></svg>
                            </div>
                            <h4>Advance Filters</h4>
                            <p>Narrow down your next winning products using  advance filtering options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home