import React from 'react';
import CountUp from 'react-countup';

const Section2 = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
           <section className="p-6 my-6">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex shadow-lg p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
				<img className='w-10 h-10' src="/assets/willing-travel_15190431.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"><CountUp  end={500} enableScrollSpy> </CountUp>+</p>
				<p className="capitalize">Tours Completed</p>
			</div>
		</div>
		<div className="flex shadow-lg p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
				<img className='w-10 h-10' src="/assets/adventurer_4125850.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"><CountUp  end={9000} enableScrollSpy> </CountUp>+</p>
				<p className="capitalize">Happy Travelers</p>
			</div>
		</div>
		<div className="flex shadow-lg p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
				<img className='w-10 h-10' src="/assets/feedback_15201968.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"><CountUp  end={5} enableScrollSpy> </CountUp>%</p>
				<p className="capitalize">Positive Reviews</p>
			</div>
		</div>
		<div className="flex shadow-lg p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
				<img className='w-10 h-10' src="/assets/winning_4677726.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"><CountUp  end={15} enableScrollSpy> </CountUp>+</p>
				<p className="capitalize">Award Winning</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Section2;