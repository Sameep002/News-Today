import React from 'react'

const Aboutus = () => {
    return (
        <>
            <div class="relative flex flex-col justify-center overflow-hidden bg-white">
                <div class="mx-auto bg-[#092540] p-20 text-center h-[700px]">
                    <h2 class="text-5xl font-bold leading-tight text-white">NewsApp | News at one place</h2>
                    <p class="mt-5 text-xl leading-8 text-white">This website uses News API  to search through every article published by over 80,000 news sources and blogs in the last 4 years. Think of us as Google News that you can interact with programmatically!</p>
                    <p class="mt-5 text-xl leading-8 text-white">We got news with categories like:</p>
                    <ul class="mt-5 text-xl leading-8 text-white">
                        <li>Business</li>
                        <li>Entertainment</li>
                        <li>Sports</li>
                        <li>Health</li>
                        <li>Science</li>
                        <li>Technology</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Aboutus