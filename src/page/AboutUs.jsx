import React from 'react';

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div
  className="hero min-h-screen "
  style={{
    backgroundImage:
      "url(https://i.ibb.co/MkL70W0h/photo-1608958435020-e8a7109ba809.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Travel Mania</h1>
      <p className="mb-5">
       Your adventure starts here.
      </p>
    </div>
  </div>
</div>
          <div className='mt-10'>
            <h1 className='font-bold text-4xl text-center'>Introduction</h1>

            <p className='font-medium text-center text-2xl mt-8'>
              "At Travel Mania, we believe that every journey should be unforgettable. We’re passionate about helping travelers explore new places, cultures, and experiences with ease and excitement. Whether you’re planning a beach holiday, a mountain trek, or a city escape, we’re here to make your travel dreams come true."
            </p>
            </div>  
          <div className='mt-10'>
            <h1 className='font-bold text-4xl text-center'>Our Story</h1>

            <p className='font-medium text-center text-2xl mt-8'>
              "Travel Mania was founded by a group of travel enthusiasts who wanted to make exploring the world simple and accessible for everyone. Frustrated by the complicated booking systems and lack of real guidance, we created a platform that puts travelers first—with clear packages, reliable service, and 24/7 support."
            </p>
            </div>  
          <div className='mt-10'>
            <h1 className='font-bold text-4xl text-center'>What We Offer</h1>

            <div className=''> 
                <div className="chat  chat-start">
  <div className="chat-bubble chat-bubble-primary">Custom travel packages</div>
</div>
                <div className="chat  chat-start">
  <div className="chat-bubble chat-bubble-primary">Affordable deals</div>
</div>
                <div className="chat  chat-start">
  <div className="chat-bubble chat-bubble-primary">Fast and friendly customer service
</div>
</div>
                <div className="chat  chat-start">
  <div className="chat-bubble chat-bubble-primary">Group and solo travel options</div>
</div>
                
            </div>
            </div>  
        </div>
    );
};

export default AboutUs;