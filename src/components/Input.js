import React from "react";
import styled from "styled-components";
import {
  space,
  borderRadius,
  borders,
  width,
  lineHeight,
  fontSize
} from "styled-system";

const Input = styled.input`
  //max-width: "100%";
  outline: 0;
  ${space}
  ${borderRadius}
  ${borders}
  ${width}
  ${lineHeight}
  ${fontSize}
  &:focus {
      border-color: #85b7d9;
  }
  box-sizing: border-box;
`;

export default React.forwardRef(function(
  { value, onChange, className, placeholder },
  ref
) {
  return (
    <div className={className}>
      <Input
        ref={ref}
        fontSize="14px"
        lineHeight="30px"
        placeholder={placeholder}
        borderRadius="5px"
        border="1px solid rgba(34,36,38,.15)"
        px={"15px"}
        py={"8px"}
        width="100%"
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
