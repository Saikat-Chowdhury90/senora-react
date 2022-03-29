import React from "react";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="posts-container">
      <div className="parent">
        <div className="posts-content">
          <div className="work-exp">
            <div className="work-timeline">
              <div className="education">
                <h1>Education</h1>
                <div class="timeline-divider">
                  <div class="timeline-icon">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                  </div>
                </div>
                <div className="content content-1">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="content content-2">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="content content-3">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="work-experience">
                <h1>Work Experience</h1>
                <div class="timeline-divider-right ">
                  <div class="timeline-icon">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                  </div>
                </div>
                <div className="content">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="content content-2">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="content content-3">
                  <h5>ABC</h5>
                  <p>YYYY-MM_DD</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="started">
              <div className="b-card">
                <div className="b-card-content">
                <h4>Let's Get Started</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis quis quidem laudantium id error. Fugiat hic
                  dignissimos porro. Recusandae, nobis.
                </p>
                </div>
                <div className="button-content">
                <button>Drop me Mail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-posts">
            <div className="posts-heading">
              <h1>Latest Posts</h1>
            </div>
            <div className="card-contents">
              <div className="card card-1">
                <img src="https://picsum.photos/id/404/367/267" alt="lorem" />
                <h3>Lorem ipsum</h3>
                <div className="focus-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="https://picsum.photos/id/404/367/267" alt="lorem" />
                <h3>Lorem ipsum</h3>
                <div className="focus-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="https://picsum.photos/id/404/367/267" alt="lorem" />
                <h3>Lorem ipsum</h3>
                <div className="focus-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="para">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                natus debitis voluptate voluptatum fuga itaque dolore neque
                sequi nihil vitae dignissimos laudantium unde, aliquid cum
                laboriosam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
