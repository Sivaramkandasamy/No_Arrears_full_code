import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import img1 from "./Assets/img1.jpg";
import pic1 from "./Assets/pic1.jpg";
import img2 from "./Assets/img2 (2).jpg";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import {
  MdPermMedia,
  MdOutlineEventAvailable,
  MdArticle,
} from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { BiLike, BiRepost } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page-cards">
        {/* First Column */}
        <div className="home-page-col-one">
          <div className="col-card-one-home">
            <div className="col-card-one-img1">
              <img src={pic1} alt="" />
            </div>
            <div className="col-card-one-img2">
              <img src={img1} alt="" />
            </div>
            <div className="conatiner-home-page-name">
              <h5>Pavan Kumar S M</h5>
            </div>
            <div className="conatiner-home-page-about">
              <p>
                Student at GM Institute of Technology <br /> also working in
                LDAPP Solutions
              </p>
            </div>
            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>
            <div className="whoViewUrProfileSec">
              <div className="whoViewCol-one">
                <span>who viwed your profile</span>
                <span className="view1">40</span>
              </div>
              <div className="whoViewCol-two">
                <span>views of your post</span>
                <span className="view1">70</span>
              </div>
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>
            <div className="exclusive-content-home">
              <p>Access exclusive tools & insights</p>
              <p>
                <div style={{ marginRight: "10px" }}>
                  <TbAlignBoxCenterMiddleFilled size={25} />
                </div>{" "}
                Try Premium free for 1 Month
              </p>
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>
            <div className="exclusive-content-home">
              <p style={{ marginTop: "10px" }}>
                {" "}
                <div style={{ marginRight: "10px" }}>
                  <FaBookmark size={25} />
                </div>
                Save Items
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="home-page-col-two">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid rgba(128, 128, 128, 0.251)",
            }}
          >
            <div className="second-col-search-section-home">
              <img src={img1} alt="" />
              <input type="text" placeholder="Start a post" />
            </div>

            <div className="page-home-uploads-section">
              <ul>
                <li>
                  {" "}
                  <span className="lines">
                    <MdPermMedia /> Media
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="lines">
                    {" "}
                    <MdOutlineEventAvailable /> Event
                  </span>
                </li>
                <li>
                  {" "}
                  <span className="lines">
                    <MdArticle /> Write Article
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {[..."123456910"].map(() => {
            return (
              <div className="postContainer">
                <div className="whoViewedPost">
                  <span className="whoViewedPostName">
                    {" "}
                    <span>LinkedIn</span> commented on this
                  </span>
                  <span className="whoViewedPost-dots">...</span>
                </div>
                <div
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                  className="app-hr-line"
                ></div>
                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={img1} alt="" />
                  </div>
                  <div className="userPostMainDetails">
                    <span className="userDetailsNamePost">
                      Pavan Kumar S M{" "}
                    </span>
                    <span className="userDetails-about">
                      {" "}
                      MERN Stack Developer
                    </span>
                  </div>
                </div>
                <div className="mainFeedPost">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem voluptate assumenda in est, unde sint praesentium
                    aliquid dolorem facilis nulla illo rerum delectus nam, fugit
                    consequatur quisquam porro maxime labore?
                  </p>
                  <img src={img2} alt="" />
                  <div
                    style={{ marginTop: "20px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>
                  <div className="postAction">
                    <ul>
                      <li>
                        <BiLike size={20} /> Like
                      </li>
                      <li>
                        <FaRegCommentDots size={20} /> Comment
                      </li>
                      <li>
                        <BiRepost size={23} /> Repost
                      </li>
                      <li>
                        <IoIosSend size={20} /> Send
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Column */}
        <div className="home-page-col-three">
          <div className="topCoursesCol3">
            <div className="topCHeader">
              <p>LinkedIn News</p>
              <AiFillNotification size={20} />
            </div>
            <p className="stories">Top Stories</p>

            <div className="newsList">
              <div className="newsListMain">
                <div className="newsListCol1"></div>
                <div className="newsListCol2">
                  <span>Smaller Cities Turns into Hub</span>{" "}
                  <span>2d ago. 2,559 Readers</span>
                </div>
              </div>
              <div className="newsListMain">
                <div className="newsListCol1"></div>
                <div className="newsListCol2">
                  <span>BoardRoom get Younger</span>{" "}
                  <span>3d ago. 3,040 Readers</span>
                </div>
              </div>
              <div className="newsListMain">
                <div className="newsListCol1"></div>
                <div className="newsListCol2">
                  <span>Global IT outage hits Business</span>{" "}
                  <span>2d ago. 16,906 Readers</span>
                </div>
              </div>
              <div className="newsListMain">
                <div className="newsListCol1"></div>
                <div className="newsListCol2">
                  <span>Firms on Tech hiring spree</span>{" "}
                  <span>4d ago. 1,906 Readers</span>
                </div>
              </div>
              <div className="newsListMain">
                <div className="newsListCol1"></div>
                <div className="newsListCol2">
                  <span>Aviation jobs are take off </span>{" "}
                  <span>3d ago. 1,391 Readers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
