import React, {Component} from 'react';
import SliderImages from "../SliderComponent/SliderImages";


class HomePage extends Component {

    render() {
        return (
            <div>
                <h1 className={'title'}>React</h1>
                <div>
                    <SliderImages/>
                </div>

            </div>
        );
    }
}

export default HomePage;