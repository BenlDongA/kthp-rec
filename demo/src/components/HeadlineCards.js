import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Thẻ bài viết */}
      <div className='rounded-xl relative'>
        {/* Phủ định */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Các món nướng sale off</p>
          <p className='px-2'>Đến hết 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Đặt Ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://statics.vincom.com.vn/xu-huong/anh_thumbnail/cac-mon-nuong-1649930235.jpg'
          alt='/'
        />
      </div>
      {/* Thẻ bài viết */}
      <div className='rounded-xl relative'>
        {/* Phủ định */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Món Hot lẫu tokbokki</p>
          <p className='px-2'>Sale off 20%</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Đặt Ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/04/Optimized-3-Cong-thuc-nau-lau-tokbokki-ngon-kho-cuong-khong-the-bo-qua-1.jpg'
          alt='/'
        />
      </div>
      {/* Thẻ bài viết */}
      <div className='rounded-xl relative'>
        {/* Phủ định */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Chúng Tôi Giao Cảm</p>
          <p className='px-2'>Đặc Sắc Ngon</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Đặt Ngay</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
    </div>
  )
};

export default HeadlineCards;
