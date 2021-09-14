import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup, 
  CardSubtitle, CardBody
} from 'reactstrap';
import { FooterContainer } from "../containers/footer";

// const data = [
//   {
//     title: 'Basic',
//     content: [
//       {
//         price: '£29.99',
//         space: '1 GB of space',
//         user: '1 user',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   },
//   {
//     title: 'Premium',
//     content: [
//       {
//         price: '£59.99',
//         space: '5 GB of space',
//         user: '5 users',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   },
//   {
//     title: 'Enterprise',
//     content: [
//       {
//         price: '£99.99',
//         space: 'Unlimited space',
//         user: '15 users',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   }
// ];

const Design=(props) => {
  return (
<>
      <h1 className="design">Pricing</h1>

      <CardGroup className="price-card">
      <Card className="card-img">
        {/* <CardImg className="img3" top  src="/assets/home.jpg" /> */}
        <CardBody className="card-body">
          <CardTitle tag="h3">Basic</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">$29.99</CardSubtitle>
          <CardText>1 GB of space</CardText>
          <CardText>1 user</CardText>
          <CardText>24/7 support</CardText>
          <CardText>Safe, reliable backup</CardText>
          
          <Button>Access from anywhere</Button>
        </CardBody>
      </Card>
      <Card className="card-img">
        {/* <CardImg className="img3" top   src="/assets/count.png"  /> */}
        <CardBody className="card-body">
          <CardTitle tag="h3">Person</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">£100</CardSubtitle>
          <CardText>5 GB of space</CardText>
          <CardText>5 users</CardText>
          <CardText>24/7 support</CardText>
         
          <CardText>Safe, reliable backup</CardText>
          <Button>Access from anywhere</Button>
        </CardBody>
      </Card>
      <Card className="card-img">
        {/* <CardImg className="img3" top src="/assets/mn.jpg"  /> */}
        <CardBody className="card-body">
          <CardTitle tag="h3">Home</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">$200</CardSubtitle>
          <CardText>Unlimited space</CardText>
          <CardText>15 users</CardText>
          <CardText>24/7 support</CardText>
          <CardText>Safe, reliable backup</CardText>
          
      
          <Button>Access from anywhere</Button>
        </CardBody>
      </Card>
    </CardGroup>
    <FooterContainer />
    </>
  );
}

export default Design;
