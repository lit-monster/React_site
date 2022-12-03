import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Product extends React.Component {
    render() {
        return(
            <React.StrictMode>
                <LIST>
                    <Link to={'/product/' + this.props.id} style={{textDecoration: 'none'}}>
                        <img src = {this.props.image} alt="" />
                        <p>{this.props.name}</p>
                        <p>{this.props.price}</p>
                    </Link>
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
        color: #333;       
    }
`;



export default Product;