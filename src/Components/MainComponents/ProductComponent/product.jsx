import React from 'react';
import styled from 'styled-components';
import image from './Images/item1.jpg';


class Product extends React.Component {
    render() {
        return(
            <React.StrictMode>
                <LIST>
                    <img src = {image} alt="" />
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </LIST>
            </React.StrictMode>
        );
    }
}

const LIST = styled.li`
    width: 23%;
    margin-bottom: 40px;
    font-size: 12px;
    img {
        width: 100%;
        margin-bottom: 5px;
    }
    p {
        margin-bottom: 5px;
    }
`;



export default Product;