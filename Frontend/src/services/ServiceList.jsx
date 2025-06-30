import React from 'react';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

import customizationImg from '../assets/images/customization.png';
import guideImg from '../assets/images/guide.png';
import weatherImg from '../assets/images/weather.png';
 




const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get real-time weather updates and forecasts for your destination so you can pack and plan with confidence.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Explore like a local with our expert tour guides — discover hidden gems, cultural insights, and unforgettable experiences.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your travel experience to your style — from flexible itineraries to personalized activities, it’s your journey your way.",
  },
];


const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) =>(
        <Col lg="3" md="6" sm="12" key={index}>
          <ServiceCard item ={item} />
        </Col>
      ))}
    </>
  )
}

export default ServiceList;