import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Testimonials.css';
import Rating from 'react-rating-stars-component';

const Testimonials = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three images at a time
        slidesToScroll: 1,
      };
    
      const testimonies = [
        { id: 1, name: 'John Doe', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",comment: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.', rating: 5 },
        { id: 2, name: 'Jane Smith', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', rating: 4 },
        { id: 3, name: 'Alice Johnson', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', rating: 3 },
        { id: 4, name: 'John Doe', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",comment: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.', rating: 5 },
        { id: 5, name: 'Jane Smith', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', rating: 4 },
        { id: 6, name: 'Alice Johnson', occupation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', rating: 3 },
        // Add more testimonials as needed
      ];


  return (
    <div className="image-slider-container">
      <Slider {...sliderSettings}>
        {testimonies.map((testimonial) => (
          <div key={testimonial.id} className="slider-item">
            <div className="card">
                <div className='test-content'></div>
                <div className='testers'>
                <div className='tester-details'>
                <div className='tester-image' id={"t"+testimonial.id}/>
                    <h3>{testimonial.name}</h3>
                    <Rating
                        value={testimonial.rating}
                        edit={false}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                    />
                    <p>{testimonial.occupation}</p>

                </div>
                <div className='test-comment'>
              <p>{testimonial.comment}</p>
                </div>

                </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
