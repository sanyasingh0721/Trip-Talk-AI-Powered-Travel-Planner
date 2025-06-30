
import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                    breakpoint : 992,
                    settings : {
                        slidesToShow: 2,
                        slideToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slideToScroll: 1,
                        slidesToShow:1,
                    },
                },
            
        ]
        

    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p> Booking through Trip Talk was the best decision we made! 
            Every detail of our trip to Bali was perfectly planned. It truly felt like a dream come true.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6>Amit Bhatt</h6>
                <p>Customer</p>
            </div>
        </div>

    </div>
    <div className="testimonial py-4 px-3">
        <p> Planning a trip with kids isn’t easy, but Trip Talk made it simple and stress-free. We loved the family-friendly recommendations and safe accommodations.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6>Sanya Singh</h6>
                <p>Customer</p>
            </div>
        </div>

    </div>
    <div className="testimonial py-4 px-3">
        <p> I've booked three trips through Trip Talk, and every single one went off without a hitch. It’s my go-to for travel planning now.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6>Sagar Bhatt</h6>
                <p>Customer</p>
            </div>
        </div>

    </div>
    <div className="testimonial py-4 px-3">
        <p> As a solo traveler, I’m always cautious. This site not only helped me find safe destinations but also connect with local tours and other travelers. Incredible experience!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6>Shivam </h6>
                <p>Customer</p>
            </div>
        </div>

    </div>
  </Slider>
}

export default Testimonials