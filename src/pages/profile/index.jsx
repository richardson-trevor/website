import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              alt="jaxx2104"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/IntelXDesign"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @IntelXDesign
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKILLS</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="C++"
                >
                  <i
                    className="devicon-cplusplus-plain"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Postgresql"
                >
                  <i
                    className="devicon-postgresql-plain"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="AWS"
                >
                  <i
                    className="devicon-amazonwebservices-plain-wordmark"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Vim"
                >
                  <i className="devicon-vim-plain" data-wow-duration="2.0s" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {
            //        <section id="features" className="text-center">
            //          <div className="container">
            //            <div className="row">
            //              <div className="col-lg-12">
            //                <h2 className="section-heading">Features</h2>
            //                <hr className="border-primary" />
            //              </div>
            //            </div>
            //          </div>
            //          <div className="container">
            //            <div className="row justify-content-md-center">
            //              <div className="col-lg-8">
            //                <p>
            //                  学生時代のバイトでWEBエンジニアになりました。<br />
            //                  主にフロントエンドを仕事にしていますが、バックエンドの開発もやってます。
            //                  趣味はNode.jsを使ったIoTとアプリの開発です。
            //                </p>
            //              </div>
            //            </div>
            //          </div>
            //        </section>
        }
        <section className="text-center" id="concept" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">WORK</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 wow slideInLeft"
                data-wow-duration="1.0s"
              >
                <img
                  src={pathPrefix + '/img/work1.png'}
                  alt="work1"
                  className="rounded-circle mx-auto"
                />
                <p>Yomu</p>
              </div>
              <div
                className="col-md-6 wow slideInRight"
                data-wow-duration="1.0s"
              >
                <img
                  src={pathPrefix + '/img/work2.png'}
                  alt="work2"
                  className="rounded-circle mx-auto"
                />
                <p>Detector</p>
              </div>
            </div>
          </div>
        </section>

        <section id="repos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Repositories</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  <a href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                    gatstrap
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/gulp-sample">
                    gulp-sample
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/irm">irm</a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/mt-dataapi-php">
                    mt-dataapi-php
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={pathPrefix + '/img/work3.png'}
                  className="img-rounded img-responsive"
                  title=""
                  alt=""
                />
              </div>
              <div className="col-md-6 text-center align-middle">
                <h2 className="section-heading">Education</h2>
                <p>
                    Add something here!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
