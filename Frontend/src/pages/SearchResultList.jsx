import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Newsletter from '../shared/Newsletter';
import TourCard from '../shared/TourCard';
import CommonSection from './../shared/CommonSection';

const SearchResultList = () => {

  const location = useLocation()
  const [data] = useState(location.state);

  return <>
  <CommonSection title={'Tour Search Result'} />
  <section>
    <Container>
      <Row>
        {
          data.length === 0 ? (
           <h4 className="text-center"> No tour Found </h4> 
          ):( 
            data?.map(tour=> (
            <Col lg="3" className="mb-4" key={tour._id}>
              <TourCard tour={tour} /> 
              </Col>
          ))
        )}

      </Row>

    </Container>
  </section>
  <Newsletter/>

  
  </>
}

export default SearchResultList