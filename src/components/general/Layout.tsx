import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import note from "@/assets/page-pattern.jpg";
import bg from "@/assets/bg-pattern.png";

const LContainer = styled.main`
  box-shadow: inset 10000px 1000px rgba(0, 0, 0, 0.37);
  ${tw`flex justify-center items-center overflow-hidden
        w-screen h-screen  
         bg-repeat bg-contain
    `}
`;
const LNoteBook = styled.div`
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  ${tw`w-[90%] md:w-[60%] h-[80%] bg-cover
   text-black px-6 py-4 rounded-3xl 
  `}
`;

const LTitle = styled.h1`
  ${tw`font-marker text-4xl`}
`;

const NotesContainer = styled.div`
  ${tw`mt-6 md:mt-5 h-[80%] overflow-hidden`}
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <LContainer
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <LNoteBook
        style={{
          backgroundImage: `url(${note})`,
        }}
      >
        <LTitle>My Notebook</LTitle>
        <NotesContainer>{children}</NotesContainer>
      </LNoteBook>
    </LContainer>
  );
}
