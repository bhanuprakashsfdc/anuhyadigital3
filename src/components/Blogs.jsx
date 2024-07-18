import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://learn.anuhyadigital.com/wp-json/wp/v2/posts?per_page=12&_embed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the blog posts:', error);
      });
  }, []);

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
            {posts.map(post => (
              <div key={post.id} className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog_item">
                  <div className="blog_top">
                    {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url && (
                      <img src={post._embedded['wp:featuredmedia'][0].source_url} className="img-fluid" alt="blog" />
                    )}
                    <div className="blog_top_date">
                      <h5>{new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</h5>
                    </div>
                  </div>
                  <div className="blog_content">
                    <div className="blog_author">
                      <a href="#"><i className="ensurx-user"></i> {post._embedded.author[0].name}</a>
                      <a href="#"><i className="ensurx-comment"></i> {post._embedded.replies ? post._embedded.replies.length : 0}</a>
                    </div>
                    <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title.rendered}</a></h3>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                    <a href={post.link} className="blog_btn" target="_blank" rel="noopener noreferrer">Read More <i className="ensurx-arrow-right"></i></a>
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

export default Blogs;
