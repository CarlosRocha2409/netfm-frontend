import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import note from "@/assets/page-pattern.jpg";
import bg from "@/assets/bg-pattern.png";
import NewButton from "./NewButton";

const LayoutContainer = styled.main`
  box-shadow: inset 10000px 1000px rgba(0, 0, 0, 0.37);
  ${tw`flex justify-center items-center overflow-hidden
        w-screen h-screen  
         bg-repeat bg-contain
    `}
`;
const LayoutNoteBook = styled.div`
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  ${tw`w-[90%] md:w-[60%] h-[80%] bg-cover
   text-black px-6 py-4 rounded-3xl 
  `}
`;

const LayoutTitle = styled.h1`
  ${tw`font-marker text-2xl md:text-4xl`}
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
    <LayoutContainer
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <LayoutNoteBook
        style={{
          backgroundImage: `url(${note})`,
        }}
      >
        <LayoutTitle>
          My Notebook <NewButton />
        </LayoutTitle>
        <NotesContainer>{children}</NotesContainer>
      </LayoutNoteBook>
    </LayoutContainer>
  );
}
