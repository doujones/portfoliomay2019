import React, { Component } from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import { setColor, media, setRem } from "../../styles";
export default class Rooms extends Component {
  state = {
    rooms: rooms
  };
  render() {
    return (
      <Section color={setColor.lightGrey}>
        <Title title="Project Images" center />
        <RoomsCenter>
          {this.state.rooms.map(room => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomsCenter>
      </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
  
`;
