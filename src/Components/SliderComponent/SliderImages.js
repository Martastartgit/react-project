import React, {Component} from 'react';
import Carousel from "react-bootstrap/cjs/Carousel";
import react_2 from '../Images/reac_2.jpg';
import react_3 from '../Images/react_3.jpg';
import react_0 from '../Images/react_0.png';


class SliderImages extends Component {
    state = { index: 0};

    handleSelect = (selectedIndex, e) => {
       this.setState({index: selectedIndex})

    }

    render() {
        let newStyle = {
            height: '800px',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }
        const{index} = this.state;

        return (
            <Carousel
                activeIndex={index}
                onSelect={this.handleSelect}
                slide={false}
                fade={false}
            >
                <Carousel.Item style={{height:"800px"}} >
                    <img
                        className="d-block w-100"
                        src={react_3}
                        alt="First slide"
                        style={newStyle}
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:"800px"}}>
                    <img
                        className="d-block w-100"
                        src={react_0}
                        alt="Third slide"
                        style={newStyle}
                    />
                </Carousel.Item>
                <Carousel.Item style={{height:"800px"}}>
                    <img
                        className="d-block w-100"
                        src={react_2}
                        alt="Third slide"
                        style={newStyle}
                    />
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default SliderImages;