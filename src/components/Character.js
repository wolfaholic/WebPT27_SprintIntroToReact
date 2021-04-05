import React from 'react';
import "../App.css";
import styled from 'styled-components';

const Wrapper = styled.div
` 
margin: 0 auto;
font-family: san-serif;
display: flex;
flex-direction: column;
align-items: center;
`;

const CardTitle = styled.h1
`
padding: 10px;
font-size: 1.5em;
`;

const CardText = styled.p
`
padding: 5px;
`;

const CardBody = styled.div
`margin: 20px;
 padding:10px; 
 color:#fff; 
 background-color: #333; 
 border: 3px solid #000;
 width: 60%; 
 borderColor: #333;
 display: flex
 justify-content: center;
 align-items: center;
 `;
 
const CharacterCard = star => {
    return (
        <Wrapper>
           <CardBody>

                <CardTitle>
                    {star.name}
                </CardTitle>
                        
                <CardText>
                    Height: {star.height} 
                </CardText>

                <CardText>
                    Mass: {star.mass}
                </CardText>

                <CardText>
                    Eye Color: {star.eye_color}
                </CardText>
            </CardBody>
        </Wrapper>
    )


}
export default CharacterCard;