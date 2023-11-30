import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { MdRestaurant,MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Phần bên trái */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
         DBCO <span className='font-bold'>Restaurant</span>
        </h1>
      </div>
      <p>Home</p>
      <p>Menu</p>
      <p>Liên hệ</p>
      {/* Ô tìm kiếm */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Tìm kiếm đồ ăn'
        />
      </div>
      {/* Nút giỏ hàng */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <MdRestaurant size={20} className='mr-2' /> Đặt Bàn
      </button>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Giỏ hàng
      </button>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
      <MdLogin size={20} className='mr-2' /> Login
      </button>

      {/* Menu bên trái */}
      <div className='fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'>
        <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' />
        <nav>
          {/* Add your menu items here */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
