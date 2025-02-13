import "./style1.css";
import Navigation2 from "../../components/navigation/component2";
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
const Match_flow2 = () => {
  const navigate = useNavigate();

  const handleSyncProfile = () => {
    navigate("/run-flow");
  };
  
    const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visibleExample, setVisibleExample] = useState(null);

  const toggleExampleData = (id) => {
    setVisibleExample(visibleExample === id ? null : id);
  };
  return (
    <div >
       <header className="top-bar">
        <div className="logo">
          <svg
            width="140"
            height="32"
            viewBox="0 0 92 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.184 3.8H61.512V5.608H56.936L56.36 6.2V8.424H59.736V10.232H56.36V15H54.424V5.592L56.184 3.8ZM63.5218 3.8H65.4578V12.472L65.9538 13.192H69.3298V12.024H71.2658V15H64.9778L63.5218 12.792V3.8ZM74.6195 3.8H79.4355L80.8435 5.944V13.464L79.3875 15H74.5875L73.1315 12.856V5.336L74.6195 3.8ZM75.0675 12.504L75.5315 13.192H78.6035L78.9075 12.872V6.296L78.4435 5.608H75.3555L75.0675 5.928V12.504ZM82.3893 3.8H84.3253V11.608L85.0773 12.728H85.1573L85.6053 12.296V8.04H87.5413V11.832L88.0853 12.744H88.1493L88.8213 12.008V3.8H90.7573V12.856L88.6773 15H87.1733L86.6453 14.088L85.7973 15H84.3093L82.3893 12.152V3.8Z"
              fill="white"
            />
            <path
              d="M6.72 3.8H8.656V11.176L5.008 15H3.584L0.944 11.096V3.8H2.88V10.728L4.416 13.016L6.72 10.6V3.8ZM11.8498 3.8H18.0898V5.608H12.5858L12.2978 5.928V8.44H15.9938V10.248H12.2978V12.488L12.7618 13.192H18.0898V15H11.8018L10.3618 12.856V5.32L11.8498 3.8ZM20.1155 3.8H25.9875L27.8595 6.536V8.408L26.3875 9.928L27.8595 12.088V15H25.9235V12.424L24.4675 10.296H22.8995L22.0515 9.768V15H20.1155V3.8ZM22.0515 5.608V8.488H25.2995L25.9235 7.848V6.92L25.0115 5.608H22.0515ZM29.4053 3.8H37.7573V5.608H33.5013L34.5573 6.552V15H32.6213V7L32.1573 5.608H29.4053V3.8ZM44.791 3.8H46.727V7.208L45.207 8.76L46.727 10.984V15H44.791V11.352L43.975 10.216H43.239L41.559 11.976V15H39.623V11.368L41.143 9.816L39.623 7.592V3.8H41.559V7.224L42.343 8.408H43.111L44.791 6.648V3.8Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="header-right">
          <button className="profile-button">Profile</button>
        </div>
      </header>
      <Navigation2 />
      
        <main className="main-content">

        <div>
          <div className="form-container">
            <div>
              <h1 className="page-title">Founder profile details</h1>
              <p className="description">Complete missing fields manually.</p>
            </div>
            <div className="form-fields-container">
              <div className="placeholder-space"></div>
              <form>
                <div className="form-group">
                  <label className="form-label">Choose your target countries to secure your investment</label>
                  <select className="select-input">
                    <option value="">Select your target countries...</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('countries')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'countries' ? 'visible' : ''}`} id="countries-example">
                    <p>Example: United States, Canada, Germany</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Current traction</label>
                  <select className="select-input">
                    <option value="">Pre-Product Launch</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('traction')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'traction' ? 'visible' : ''}`} id="traction-example">
                    <p>Example: Pre-Product Launch, Post-Product Launch, Scaling</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Required funding</label>
                  <select className="select-input">
                    <option value="">&lt;$100K</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('funding')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'funding' ? 'visible' : ''}`} id="funding-example">
                    <p>Example: &lt;$100K, $100K-$500K, $500K-$1M</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Previous funding</label>
                  <select className="select-input">
                    <option value="">Angel Investment</option>
                  </select>
                  <span className="toggle-icon" onClick={() => toggleExampleData('previous-funding')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                  <div className={`example-data ${visibleExample === 'previous-funding' ? 'visible' : ''}`} id="previous-funding-example">
                    <p>Example: Angel Investment, Seed Funding, Series A</p>
                  </div>
                </div>

                <button onClick={handleSyncProfile} type="submit" className="run-flow-button">Run flow</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Match_flow2
