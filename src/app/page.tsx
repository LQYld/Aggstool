'use client'
import './index.css'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="loading">
          <span>A</span>
          <span>g</span>
          <span>g</span>
          <span>s</span>
          <span>t</span>
          <span>o</span>
          <span>o</span>
          <span>l</span>
        </div>
        <div className="slider">
          <ul className="screen">
            <li>
              <div className="module purple double img w">
                <h2 className="title">Home</h2>
                <p className="sub-heading">Welcome to the New Windows 8 UI</p>
              </div>
              <div className="module orange double img bing">
                <p className="title">Search</p>
              </div>
              <div className="module yellow double img not">
                <p className="title">Notifications</p>
                <div className="img msg">
                  <p className="sub-heading">View your notifications (3)</p>
                </div>
              </div>
              <div className="module red single img youtube">
                <p className="title">Video</p>
              </div>
              <div className="module yellow double img market">
                <p className="title">Market</p>
                <p className="sub-heading">
                  Download the latest apps for Windows 8 and Windows Phone
                </p>
              </div>
              <div className="module darkblue single img intel">
                <p className="title">Partners</p>
              </div>
              <div className="module pink double img mail">
                <p className="title">Mail</p>
                <p className="sub-heading">You have no new Mail</p>
                <p className="third-heading">:-(</p>
              </div>
              <div className="module green single img xbox">
                <p className="title">Xbox</p>
              </div>
              <div className="module blue double img twitter">
                <p className="title">Social</p>
                <p className="sub-heading">
                  <i>Just bought a new Surface #microsoft #happy</i>
                </p>
              </div>
              <div className="module green double img excel">
                <p className="title">Products</p>
                <p className="sub-heading">
                  Office Excel 2013 coming soon to Windows
                </p>
              </div>
              <div className="module blue single img net">
                <p className="title">Internet</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
