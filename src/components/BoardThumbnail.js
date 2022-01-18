import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 40px;
  width: 200px;
  background: black;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
