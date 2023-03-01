import React from 'react'
import './Blog.scss'
import BlogItems from '../../assets/data/blogItems'
const Blog = () => {
    const date = new Date().toDateString();
  return (
    <div className='blog__grid'>
        {
            BlogItems.map((item, index) => (
                <div key={index} className="blog">
                   <div className="blog__top">
                   <img src={item.img} alt="" />
                   </div>

                    <div className="blog__bottom">
                        <h2>{item.title}</h2>
                        <span>{date} /</span>
                        <span>{item.category.toLocaleUpperCase()}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Blog;