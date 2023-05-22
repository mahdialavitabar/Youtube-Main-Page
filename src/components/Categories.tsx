// @ts-ignore
//prettier-ignore
'use client';
import React, { useState } from 'react';

const categories = ['All', 'Technology', 'Business', 'Entertainment', 'Sports', 'Health', 'Science', 'Politics',  'Art', 'Music',
  'News', 'Gaming', 'Travel', 'Food', 'Finance', 'Pets', 'History', 'Autos', 'Style', 'Home', 
  'Funny', 'AskReddit', 'WorldNews', 'TodayILearned', 'Jokes', 'Music', 'Gadgets', 'Fitness', 
  'IAmA', 'LifeProTips'];
const CategoryCarousel = () => {
  const [page, setPage] = useState(0);
  const categoriesPerPage = 15; // Based on page width

  const handleNext = () => {
    if (page < Math.ceil(categories.length / categoriesPerPage) - 1) {
      setPage(page + 1);
    }
  }

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  const pageCategories = categories.slice(
    page * categoriesPerPage, 
    (page + 1) * categoriesPerPage
  );

  const style = { 
    transform: `translateX(${-page * 1}%)`
  };
  return (
    <div className="relative overflow-hidden h-20">
    <div 
      className="flex items-center absolute inset-y-0 left-0 z-10 mx-10 transition duration-700 ease-in-out"
      style={style}
    >
      {pageCategories.map(category => (
        <button className="px-3 py-2 focus:outline-none">
          {category} 
        </button>
      ))}
    </div>
    <div className='flex gap-10'>
      <button 
        onClick={handlePrev} 
        className='absolute left-5 top-7 z-50'
      >
        ◀︎
      </button>
      <button 
        onClick={handleNext} 
        className='z-50 absolute right-5 top-7 '
      >
        ▶︎
      </button>
    </div>
  </div>
  );
}

export default CategoryCarousel;