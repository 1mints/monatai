'use client'
import Image from "next/image";
import background from "/public/abstract.jpg"
import logo from "/public/Untitled-223.png"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import circle from "/public/circle.png"
import circle2 from "/public/circleblue.png"
import main from "/public/logo.png"




export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between bg-white">
      

  

    


    <div className="relative w-full h-screen">
    <div className="flex flex-row w-3/5 mx-auto p-2 border-b-[1px] border-b-black h-12 items-center text-sm">
    <Image alt="Logo" src={main} width={50}
      height={50} className="mx-5"></Image>
      <div className="max-h-fit max-w-fit text-black cursor-pointer">Documentation</div>
      <div className="max-h-fit max-w-fit mx-10 text-black cursor-pointer">Vision</div>
      <div className="max-h-fit max-w-fit text-black cursor-pointer">Tokenomics</div>
    </div>

    <div className="absolute w-full">
    <MouseParallaxContainer className="blur-lg" globalFactorX={0.1} globalFactorY={0.1}>
    <MouseParallaxChild>
      <img src='circle.png' alt='gsdf'></img>
    </MouseParallaxChild>
  </MouseParallaxContainer>
  <MouseParallaxContainer className="absolute blur-lg overflow-y-visible" globalFactorX={0.1} globalFactorY={0.1}>
    <MouseParallaxChild className='ml-[75%]'>
      <img src='circleblue.png' alt='gsdf' className='w-36'></img>
    </MouseParallaxChild>
  </MouseParallaxContainer>
  </div>
      <div className="relative l-[50%] flex-col top-[25%]">
        <div className="max-w-fit mx-auto text-black text-6xl">Monat</div>
        <div className="max-w-fit mx-auto text-black m-5">Welcome to Monat, your web3 AI assistant.</div>
        <div className="max-w-fit cursor-pointer rounded-2xl mx-auto m-16 p-[3px] text-black bg-gradient-to-r from-blue-500 via-red-500 to-red-800 hover:animate-pulse border-white"><div className="p-2 bg-white rounded-xl">START EXPLORING</div></div>
        
      </div>
    </div>
    </main>
  );
}
