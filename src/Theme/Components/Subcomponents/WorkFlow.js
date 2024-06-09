import React from 'react';

const WorkFlow = () => {
  return (
    <div className="container workflow-container">
      <h2 className="text-center my-4">DESIGN</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img src="https://images.shiksha.com/mediadata/images/articles/1699364788phpcNh6vA.jpeg" className="workflow-icon" alt="Concept" />
              <h5 className="card-title">CONCEPT</h5>
              <p className="card-text">(Sketching Ideas)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img src="https://t3.ftcdn.net/jpg/02/54/48/76/360_F_254487671_VPZBe0HZWXoz2T4Np2hcDSyUE0OTJq2e.jpg" className="workflow-icon" alt="Design" />
              <h5 className="card-title">DESIGN</h5>
              <p className="card-text">(3D CAD Design)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img src="https://superco-engineering.com/Images/Mechanical.png?template=generic" className="workflow-icon" alt="Prototype" />
              <h5 className="card-title">PROTOTYPE</h5>
              <p className="card-text">(Testing)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img src="https://www.deskera.com/blog/content/images/2021/06/feedback-mindmap-760.jpg" className="workflow-icon" alt="Customer Feedback" />
              <h5 className="card-title">CUSTOMER FEEDBACK</h5>
              <p className="card-text">(After Prototype Testing)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hVvfTdsdWpwoc9YiYtuqRo61lqs_Ft17hw&s" className="workflow-icon" alt="Scope" />
              <h5 className="card-title">SCOPE</h5>
              <p className="card-text">(Requirements)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
