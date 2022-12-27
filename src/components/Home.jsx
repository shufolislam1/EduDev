import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='pb-60'>
            <div className='flex justify-between grid grid-cols-2 gap-16 '>
                <div className='pt-16 text-xl font-semibold whitespace-nowrap text-left ml-12'>
                    <p className='text-2xl text-blue-600'>For Your Dream</p>
                    <p>
                        <Typewriter
                            options={{
                                strings: ['WE ARE HERE', 'WITH YOU', 'ALWAYS'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
                <div>
                    <img src="https://i.ibb.co/5XDK7m4/29493.jpg" alt="not" srcset="" />
                </div>

            </div>
        </div>
    );
};

export default Home;