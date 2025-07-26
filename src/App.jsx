import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {FaHistory , FaLightbulb , FaMicrochip , FaTools} from 'react-icons/fa'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className="">
      <section className="bg-[#48BEFF] min-h-[50px] flex flex-col justify-center font-roboto">
        <nav className=" border-black hidden md:flex">
          <ul className="uppercase  flex w-[85%] m-auto justify-between font-bold text-white">
          <li className="">Home</li>
          <li className="">About Us</li>
          <li className="">Our Courses</li>
          <li className="">Shop</li>
          <li className="">Executives</li>
          </ul>
        </nav>
      </section>
      <section className="">
        <div className="flex flex-col  border-red-500 p-4">
        <div className="my-2">
          <img src="undraw_education.svg" alt="Hero Illustration" className=" left-0 w-[70%] max-w-md" />
          </div>
          <div className="m-auto  border-green-500 my-2">
            <h3 className=" text-[1.8rem] font-bold my-2">Welcome To Our Departmental Community</h3>
            <p className="text-[#929292] text-[0.8rem] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid quia. Ad distinctio dicta veniam, delectus reprehenderit cumque rem pariatur, assumenda magnam sunt animi. Quod.</p>
            <div className="grid grid-cols-2 gap-2">
            <div className="flex">
              <div className="p-2 bg-[#48BEFF] text-white mr-2"><FaHistory /></div>
              <p className="font-semibold">History</p>
              </div>
            <div className="flex">
              <div className="p-2 bg-[#48BEFF] text-white mr-2"><FaLightbulb /></div>
              <p className="font-semibold">Innovation</p>
            </div>
            <div className="flex">
              <div className="p-2 bg-[#48BEFF] text-white mr-2"><FaMicrochip /></div>
              <p className="font-semibold">Technology</p>
            </div>  
            <div className="flex">
              <div className="p-2 bg-[#48BEFF] text-white mr-2"><FaTools /></div>
              <p className="font-semibold">Resources</p>
            </div>
              
            </div>
          </div>
          
        </div>
      </section>
      <section className="">
      <div class="relative w-full h-[450px]">
    <img src="vision.jpeg" class="w-full h-full object-cover" alt="Background" />
    <div class="absolute inset-0 bg-[#48BEFF] bg-opacity-50"></div>
    <div class="absolute inset-0 flex items-center   border-black flex-col text-white">
    <div className="  text-center">
    <h2 class="text-2xl font-semibold ">Our Vision & Mission</h2>
    <p className="text-[white] text-[0.65rem] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid quia. Ad distinctio dicta veniam, delectus reprehenderit cumque rem pariatur, assumenda magnam sunt animi. Quod.</p>
    </div>
    <div className=" border-red-500 flex flex-col p-2 w-full">
      <div className="rounded-lg bg-white min-h-[150px] my-2 w-[95%] m-auto p-2 border-2 border-[#48BEFF] border-dotted shadow-xl">
        <h3 className="text-white font-semibold bg-[#48BEFF] w-[35%] p-1 rounded-md flex justify-center items-center">Our Vision</h3>
        <p className="text-black text-[0.65rem] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione possimus sapiente a eligendi. Repellat aliquid aliquam voluptatum. Sequi accusamus dolor temporibus ipsum id error!</p>
      </div>
      <div className="rounded-lg bg-white min-h-[150px] my-2 w-full p-2 border-2 border-[#48BEFF] border-dotted w-[95%] m-auto shadow-xl">
        <h3 className="text-white font-semibold bg-[#48BEFF] w-[35%] p-1 rounded-md flex justify-center items-center">Our Mission</h3>
        <p className="text-[0.65rem] my-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, odit eligendi praesentium consequuntur voluptatum fuga hic eum tempore unde repellendus vel, illum nesciunt nostrum laudantium perspiciatis ad dolor repudiandae?</p>
      </div>
    </div>
  </div>
</div>

      </section>
      <section className="my-2">
        <div className="grid grid-cols-1">
        <div className="border-black w-[85%] m-auto my-2 shadow-sm">
          <h3 className="uppercase px-4 py-2 border-l-4 border-[#48BEFF] text-[1.2rem] font-semibold">Community</h3>
          <div className="h-[150px]">
          <img src="image1.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="border p-2">
          <h4 className="font-semibold text-[1.2rem]">Community Building</h4>
          <p className="text-[0.65rem] my-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, odit eligendi praesentium consequuntur voluptatum fuga hic eum tempore unde repellendus vel, illum nesciunt nostrum laudantium perspiciatis ad dolor repudiandae?</p>
          <a href="" className="uppercase text-[#48BEFF] font-bold">Read more</a>
          </div>
        </div>
        <div className="border-black w-[85%] m-auto my-2 shadow-sm">
          <h3 className="uppercase px-4 py-2 border-l-4 border-[#48BEFF] text-[1.2rem] font-semibold">Learning</h3>
          <div className="h-[150px]">
          <img src="image2.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="border p-2">
          <h4 className="font-semibold text-[1.2rem]">Active Learning</h4>
          <p className="text-[0.65rem] my-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, odit eligendi praesentium consequuntur voluptatum fuga hic eum tempore unde repellendus vel, illum nesciunt nostrum laudantium perspiciatis ad dolor repudiandae?</p>
          <a href="" className="uppercase text-[#48BEFF] font-bold">Read more</a>
          </div>
        </div>
        <div className="border-black w-[85%] m-auto my-2 shadow-sm">
          <h3 className="uppercase px-4 py-2 border-l-4 border-[#48BEFF] text-[1.2rem] font-semibold">Growth</h3>
          <div className="h-[150px]">
          <img src="image3.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="border p-2">
          <h4 className="font-semibold text-[1.2rem]">Collaborative Growth</h4>
          <p className="text-[0.65rem] my-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, odit eligendi praesentium consequuntur voluptatum fuga hic eum tempore unde repellendus vel, illum nesciunt nostrum laudantium perspiciatis ad dolor repudiandae?</p>
          <a href="" className="uppercase text-[#48BEFF] font-bold">Read more</a>
          </div>
        </div>
        </div>
      </section>
    </div>
    // 48BEFF
  )
}

export default App
