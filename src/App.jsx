import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>MyTunes</h1>
      </div>
      <div className='music-container'>
        <img src="/Gorillaz-0.png" className='img'/>
        <div>
          <h2>Gorillaz's Albums</h2>
          <details>
            <summary>Gorillaz</summary>
            <ol type="1">
              <li>Re-Hash</li>
              <li>5/4</li>
              <li>Tomorrow Comes Today</li>
              <li>New Genious (Brother)</li>
              <li>Clint Eastwood</li>
              <li>Man Research (Clapper)</li>
              <li>Punk</li>
              <li>Sound Check (Gravity)</li>
              <li>Double Bass</li>
              <li>Rock the House</li>
              <li>19-2000</li>
              <li>Latin Simone (¿Qué Pasa Contigo?)</li>
              <li>Starshine</li>
              <li>Slow Country</li>
              <li>M1 A1</li>
            </ol>
          </details>
          <details>
            <summary>Demon Days</summary>
            <li>Intro</li>
            <li>Last Living Souls</li>
            <li>Kids with Guns</li>
            <li>O Green World</li>
            <li>Dirty Harry</li>
            <li>Feel Good Inc.</li>
            <li>El Mañana</li>
            <li>Every Planet We Reach Is Dead</li>
            <li>November Has Come</li>
            <li>All Alone</li>
            <li>White Light</li>
            <li>Dare</li>
            <li>Fire Coming Out of the Monkey's Head</li>
            <li>Don't Get Lost in Heaven</li>
            <li>Demon Days</li>
          </details>
          <details>
            <summary>Plastic Beach</summary>
            <li>Orchestral Intro</li>
            <li>Welcome to the World of the Plastic Beach</li>
            <li>White Flag</li>
            <li>Rhinestone Eyes</li>
            <li>Stylo</li>
            <li>Superfast Jellyfish</li>
            <li>Empire Ants</li>
            <li>Glitter Freeze</li>
            <li>Some Kind of Nature</li>
            <li>On Melancholy Hill</li>
            <li>Broken</li>
            <li>Sweepstakes</li>
            <li>Plastic Beach</li>
            <li>To Binge</li>
            <li>Cloud of Unknowing</li>
            <li>Pirate Jet</li>
          </details>
        </div>
      </div>
    </>
  )
}

export default App
