import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        // <div className='pb-60'>
        //     <div className='flex justify-between grid grid-cols-2 gap-16 '>
        //         <div className='pt-16 text-xl font-semibold whitespace-nowrap text-left ml-12'>
        //             <p className='text-2xl text-blue-600'>For Your Dream</p>
        //             <p>

        //             </p>
        //         </div>
        //         <div>
        //             <img src="https://i.ibb.co/5XDK7m4/29493.jpg" alt="not" srcset="" />
        //         </div>

        //     </div>
        // </div>
        <div className="flex gap-16 pb-60">
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
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/5XDK7m4/29493.jpg" className="rounded-lg" />
            </div>
        </div>
    );
};

export default Home;