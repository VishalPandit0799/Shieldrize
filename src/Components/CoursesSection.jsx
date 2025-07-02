import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Cybersecurity Essentials',
      description: 'Learn the fundamentals of securing networks, systems, and data.',
      image: 'https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity-1024x631.jpg',
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Master front-end and back-end technologies to build dynamic websites.',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg',
    },
    {
      title: 'Data Science with Python',
      description: 'Analyze data and build machine learning models using Python.',
      image: 'https://sun.edu.ng/wp-content/uploads/maxresdefault-1024x576.webp',
    },
    {
      title: 'Ethical Hacking Masterclass',
      description: 'Learn to ethically hack systems and find security vulnerabilities.',
      image: 'https://virtu.net/wp-content/uploads/2023/07/29.jpg',
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Design beautiful and user-friendly web and mobile interfaces.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQHjMDvCmU8X0A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711109035426?e=2147483647&v=beta&t=PGqVAK3juhLwsN_JhDg9oNhrqwOKvGlZmvn8-vqWiW8',
    },
    {
      title: 'Cloud Security Fundamentals',
      description: 'Understand how to secure cloud-based environments like AWS and Azure.',
      image: 'https://www.csoonline.com/wp-content/uploads/2025/05/2505185-0-23123100-1747376615-iStock-1724735466_b8d7de.jpg?quality=50&strip=all&w=1024',
    },
  ];

  return (
    <section className="py-5 bg-dark text-light" id="courses">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Top Courses</h2>
        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 bg-dark text-light">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <p className="card-text text-light">{course.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="#" className="btn btn-outline-primary w-100 rounded-pill">
                    View Course
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
