import { moduleConfig } from '@/common/config'
import bodyBgc from '../../../public/bodyBgc.avif'
import './index.css'
export default function IndexPageComponent() {
  return (
    <div
      className="container-box"
      style={{ backgroundImage: `url('${bodyBgc.src}')` }}
    >
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
              <div className="module purple double img">
                <h2 className="title">{moduleConfig[0].title}</h2>
                <p className="sub-heading">{moduleConfig[0].introduction}</p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[0].logo.src}
                />
              </div>
              <div className="module orange double img">
                <p className="title">{moduleConfig[1].title}</p>
                <p className="sub-heading">{moduleConfig[1].introduction}</p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[1].logo.src}
                />
              </div>
              <div className="module yellow double img">
                <p className="title">{moduleConfig[2].title}</p>
                <p className="sub-heading">{moduleConfig[2].introduction}</p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[2].logo.src}
                />
              </div>
              <div className="module red single img">
                <img className="logo-image" src={moduleConfig[3].logo.src} />
                <p className="title">{moduleConfig[3].title}</p>
              </div>
              <div className="module yellow double img">
                <p className="title">{moduleConfig[4].title}</p>
                <p className="sub-heading">{moduleConfig[4].introduction}</p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[4].logo.src}
                />
              </div>
              <div className="module darkblue single img">
                <img className="logo-image" src={moduleConfig[5].logo.src} />
                <p className="title">{moduleConfig[5].title}</p>
              </div>
              <div className="module pink double img">
                <p className="title">{moduleConfig[6].title}</p>
                <p className="sub-heading">{moduleConfig[6].introduction}</p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[6].logo.src}
                />
              </div>
              <div className="module green single img">
                <img className="logo-image" src={moduleConfig[7].logo.src} />
                <p className="title">{moduleConfig[7].title}</p>
              </div>
              <div className="module blue double img">
                <p className="title">{moduleConfig[8].title}</p>
                <p className="sub-heading">
                  <i>{moduleConfig[8].introduction}</i>
                </p>
                <img
                  className="logo-image mt-4"
                  src={moduleConfig[8].logo.src}
                />
              </div>
              <div className="module green double img">
                <p className="title">{moduleConfig[9].title}</p>
                <p className="sub-heading">{moduleConfig[9].introduction}</p>
                <img className="logo-image" src={moduleConfig[9].logo.src} />
              </div>
              <div className="module blue single img">
                <img className="logo-image" src={moduleConfig[10].logo.src} />
                <p className="title">{moduleConfig[10].title}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
