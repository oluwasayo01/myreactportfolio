import React from "react";
// import styled from 'styled-components'
import Text from "../text/text";
import Button, { ArrowButton } from "../button/button";
import "./card.css";

const Card = (props) => {
  return (
    <div class="card">
      <div class="item1">
        <Text heading>{props.title}</Text>
        <Text>UI/UX Designer</Text>
        <br />
        <Text>
          Next this not shot rhetoric best had well of was on facility presented
          . Groundterm, economics a get title and in he attention if one sleep
          is a self interest.
        </Text>
      </div>
      <div class="item2">
        <Text heading>Hello world</Text>
        <Text>UI/UX Designer</Text>
        <br />
        <Text>
          Next this not shut rhetoric best had well of was on facility presented
          . Groundterm, economics a get title and in he attention if one sleep
          is a self interest.
        </Text>
      </div>
      <div class="item3">
        <ArrowButton></ArrowButton>
      </div>
    </div>
  );
};

export const YellowCard = () => {
  return (
    <div class="card-2">
      <Text>Say, Hello</Text>
      <Text>oluwasayoakinkunmi@gmail.com</Text>
      <Button>Say, Hello</Button>
    </div>
  );
};
// const StyledCard = styled(Card)`
//     /* display:grid;
//     grid-template-columns: 30% 60% 10%;
//     align-items: center; */
//     background-color: red;

// `

export default Card;
