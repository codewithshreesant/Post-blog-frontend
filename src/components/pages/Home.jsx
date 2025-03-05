
import React from 'react'
import Button from '../Button/Button'
import Recommended from '../Recommended_Blogs/Recommended'

function Home() {
    return (
        <div>
            <div className='h-[60vh] flex justify-around items-center'>
                <div className='w-[40vw] flex flex-col gap-[1.5rem]'>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-center text-purple-600 mt-6 mb-4 shadow-lg">
                        Shrisant_Academy
                    </h1>
                    <p className='text-justify' >
                        your ultimate destination for all things coding! Whether you're a novice eager to learn or a seasoned developer looking to sharpen your skills, our articles, tutorials, and expert insights will guide you through the fascinating world of programming languages. From Python to JavaScript, C++ to Rust, we've got you covered. Dive in, and let's unlock the power of code together!
                    </p>
                    <div className='flex gap-[1rem]'>
                        <Button name='Explore Now' path='/blogs'/>
                        <Button name='Learn More' path='/blogs'/>
                    </div>
                </div>
                <div>
                    <img src="images/hero_section.png" alt="hero section" className='h-[50vh] w-[30vw]' />
                </div>
            </div>
            <Recommended />
        </div>
    )
}

export default Home