import './index.css'
export default function GamesPage() {
  return (
    <div className="wrapper">
      <h2>
        <strong>
          All Games<span>( 4 )</span>
        </strong>
      </h2>

      <div className="cards">
        <figure className="card">
          <img src="https://www.linkpicture.com/q/1_1484.jpg" />

          <figcaption>Dota 2</figcaption>
        </figure>

        <figure className="card">
          <img src="https://www.linkpicture.com/q/2_965.jpg" />

          <figcaption>Stick Fight</figcaption>
        </figure>

        <figure className="card">
          <img src="https://www.linkpicture.com/q/3_695.jpg" />

          <figcaption>Minion Masters</figcaption>
        </figure>

        <figure className="card">
          <img src="https://www.linkpicture.com/q/4_543.jpg" />

          <figcaption>KoseBoz!</figcaption>
        </figure>
      </div>
    </div>
  )
}
