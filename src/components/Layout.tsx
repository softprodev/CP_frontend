import React, { useEffect, useRef, ReactNode } from 'react'
// import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";


import styled from "@emotion/styled";

const StyledIdenticon1 = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
  color: white;
`;


type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <section>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="gray.800"
      >
        {children}
      </Flex>
    </section>

  );
}

