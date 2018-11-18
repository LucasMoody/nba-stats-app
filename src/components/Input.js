import React from "react";
import styled from "styled-components";
import { space, borderRadius, borders, width } from "styled-system";

const Input = styled.input`
  //max-width: "100%";
  outline: 0;
  ${space}
  ${borderRadius}
  ${borders}
  ${width}
  &:focus {
      border-color: #85b7d9;
  }
`;

export default function({ className, placeholder }) {
  return (
    <div className={className}>
      <Input
        placeholder={placeholder}
        borderRadius="5px"
        border="1px solid rgba(34,36,38,.15)"
        px={"15px"}
        py={"8px"}
        width="100%"
      />
    </div>
  );
}
