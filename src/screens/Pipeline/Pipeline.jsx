
import React, { useState } from 'react';
import './pipeline.css';
import { MoreVertical, RefreshCcw } from 'lucide-react';
import Navigation2 from '../../components/navigation/component2';

function Pipeline() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const matchedInvestors = [
    { name: 'Donald Powell', company: 'Atlas Fund', status: 'MATCHED' },
    { name: 'Tom Kenny', company: '25madison', status: 'MATCHED' },
    { name: 'Arjun Kapur', company: 'Forecast Labs', status: 'MATCHED' },
    { name: 'Arjun Kapur', company: 'Forecast Labs', status: 'MATCHED' },
    { name: 'Arjun Kapur', company: 'Forecast Labs', status: 'MATCHED' },
    { name: 'Arjun Kapur', company: 'Forecast Labs', status: 'MATCHED' },
  ];
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(matchedInvestors.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const visibleInvestors = matchedInvestors.slice(startIndex, startIndex + perPage);


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
      <main>
        <div className='pipeline'>
          <div className="pipeline-header">
            <div>
              <h1 className="page-title">Manage your pipeline</h1>
              <p className="pipeline-description">
                Organize, prioritize, and manage your pipeline efficiently to streamline your fundraising efforts.
              </p>
            </div>
            <button className="flow-settings-button">Flow Settings</button>
          </div>

          <div className="scrollable-container">
          <div className="pipeline-sections">
      <div className="pipeline-section">
        <div className="section-header">
          <div className="section-title">
            <span>Matched investors ({matchedInvestors.length})</span>
          </div>
          <div className="section-actions">
            <RefreshCcw size={16} className="refresh-icon" />
            <MoreVertical size={16} />
          </div>
        </div>
        
        <div className="cards-container" style={{ overflowY: "auto", maxHeight: "300px", scrollbarWidth: "none" }}>
          {visibleInvestors.map((investor, index) => (
            <div key={index} className="investor-card">
              <div className="card-content">
                <div className="investor-info">
                  <h3>{investor.name}</h3>
                  <p>{investor.company}</p>
                </div>
                <MoreVertical size={16} className="card-menu" />
              </div>
              <span className="status-badge">{investor.status}</span>
            </div>
          ))}
        </div>

        <div className="pagination">
          <select className="per-page-select" value={perPage} onChange={(e) => setPerPage(parseInt(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <span>per page</span>
          <div className="page-controls">
            <button className="page-arrow" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>←</button>
            <span>{currentPage}/{totalPages}</span>
            <button className="page-arrow" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>→</button>
          </div>
        </div>
              </div>

              {['Emails Scheduled (0)', 'Emails Sent (0)', 'Replied Back (0)', 'Follow up (0)'].map((title, index) => (
                <div key={index} className="pipeline-section">
                  <div className="section-header">
                    <div className="section-title">
                      <span>{title}</span>
                    </div>
                    <div className="section-actions">
                      <RefreshCcw size={16} className="refresh-icon" />
                      <MoreVertical size={16} />
                    </div>
                  </div>
                  <div className="empty-container" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pipeline;