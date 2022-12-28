import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="flex gap-16">
            <div className="w-1/2 p-4 text-left pt-8 ml-12">
            <p className='text-2xl text-blue-600 font-bold'>For Your Dream</p>
                <p className="text-xl font-bold">
                    <Typewriter
                        options={{
                            strings: ['WE ARE HERE', 'WITH YOU', 'ALWAYS'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident rerum nisi obcaecati. Nostrum voluptas recusandae, modi culpa neque laudantium sunt qui fugit facilis mollitia maiores facere iure. Natus, assumenda rem!</p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Explore More</button>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/5XDK7m4/29493.jpg" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Home;