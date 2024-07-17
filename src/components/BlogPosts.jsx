import React from 'react';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
  const blogPosts = [
    {
      img: "assets/images/img/blog1.png",
      date: "14 sep",
      author: "Jacob Jones",
      comments: "09 Comments",
      title: "It is a long established fact that a reader",
      description: "Our dedicated team of experts is here to guide you through every step of the.",
      link: "blog-details.html",
    },
    {
        img: "assets/images/img/blog1.png",
        date: "14 sep",
        author: "Jacob Jones",
        comments: "09 Comments",
        title: "It is a long established fact that a reader",
        description: "Our dedicated team of experts is here to guide you through every step of the.",
        link: "blog-details.html",
      },
      {
        img: "assets/images/img/blog1.png",
        date: "14 sep",
        author: "Jacob Jones",
        comments: "09 Comments",
        title: "It is a long established fact that a reader",
        description: "Our dedicated team of experts is here to guide you through every step of the.",
        link: "blog-details.html",
      },
      {
        img: "assets/images/img/blog1.png",
        date: "14 sep",
        author: "Jacob Jones",
        comments: "09 Comments",
        title: "It is a long established fact that a reader",
        description: "Our dedicated team of experts is here to guide you through every step of the.",
        link: "blog-details.html",
      },
      {
        img: "assets/images/img/blog1.png",
        date: "14 sep",
        author: "Jacob Jones",
        comments: "09 Comments",
        title: "It is a long established fact that a reader",
        description: "Our dedicated team of experts is here to guide you through every step of the.",
        link: "blog-details.html",
      },
      {
        img: "assets/images/img/blog1.png",
        date: "14 sep",
        author: "Jacob Jones",
        comments: "09 Comments",
        title: "It is a long established fact that a reader",
        description: "Our dedicated team of experts is here to guide you through every step of the.",
        link: "blog-details.html",
      },
    // Add more blog posts as needed
  ];

  return (
    <section className="blog_section">
      <div className="container">
        <div className="blog_main">
          <div className="common_heading text-center">
            <div className="title_style">
              <span></span><h3>Blog & News</h3>
            </div>
            <h2> Stay Informed With The Newest <br /> <span> Blog Posts & News </span> </h2>
          </div>
          <div className="row gy-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog_item">
                  <div className="blog_top">
                    <img src={post.img} className="img-fluid" alt="blog" />
                    <div className="blog_top_date">
                      <h5>{post.date.split(' ')[0]} <br /> {post.date.split(' ')[1]}</h5>
                    </div>
                  </div>
                  <div className="blog_content">
                    <div className="blog_author">
                      <a href="#"><i className="ensurx-user"></i> {post.author}</a>
                      <a href="#"><i className="ensurx-comment"></i> {post.comments}</a>
                    </div>
                    <h3> <a href={post.link}>{post.title}</a> </h3>
                    <p>{post.description}</p>
                    <a href={post.link} className="blog_btn">Read More <i className="ensurx-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
