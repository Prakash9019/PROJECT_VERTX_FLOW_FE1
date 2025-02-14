import React, { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import "./style.css";
import Navigation2 from "../../../components/navigation/component2";

const investorsData = [
  {
    name: "Trind Ventures",
    firmType: "VC Firm",
    thesis: "We invest in European software startups with a consumer or community component, such as marketplaces and platforms.",
    entryStage: "Early revenue",
    chequeRange: "$100K - $1M",
    matchScore: 95,
    isChecked: true,
  },
  {
    name: "NextSTEP",
    firmType: "VC Firm",
    thesis: "We invest in European software startups with a consumer or community component, such as marketplaces and platforms.",
    entryStage: "Early revenue",
    chequeRange: "$100K - $1M",
    matchScore: 80,
    isChecked: false,
  },
  // Add more investor data objects as needed
];

export default function Run_Flow() {
  const [investors, setInvestors] = useState(investorsData);

  const handleCheckboxChange = (index) => {
    const newInvestors = [...investors];
    newInvestors[index].isChecked = !newInvestors[index].isChecked;
    setInvestors(newInvestors);
  };

  const matchedInvestorsCount = investors.filter(investor => investor.isChecked).length;

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

      <div className="layout-container">
        <main className="main-content">
          <div className="page-header">
            <h2>Mark your preferred investors</h2>
            <p>
              Prioritize those who see potential in you.
              <br />
              Rank and select investors for targeted email outreach.
            </p>
          </div>

          <div className="matched-investors">
            <div className="matched-card">
              <h3>Investors Matched</h3>
              <p className="matched-number">{matchedInvestorsCount}</p>
            </div>
          </div>

          <div className="investors-table-container">
            <table className="investors-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Thesis</th>
                  <th>Entry Stage</th>
                  <th>Cheque range</th>
                  <th>Match Score</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {investors.map((investor, index) => (
                  <tr key={index}>
                    <td>
                      <div className="investor-name">
                        <div>{investor.name}</div>
                        <div className="firm-type">{investor.firmType}</div>
                      </div>
                    </td>
                    <td className="thesis-cell">{investor.thesis}</td>
                    <td>
                      <span className="badge">{investor.entryStage}</span>
                    </td>
                    <td>
                      <span className="badge">{investor.chequeRange}</span>
                    </td>
                    <td>
                      <span className={`score-badge score-${investor.matchScore >= 90 ? 'high' : 'medium'}`}>
                        {investor.matchScore}%
                      </span>
                    </td>
                    <td onClick={() => handleCheckboxChange(index)}>
                      {investor.isChecked ? (
                        <CheckSquare className="check-icon checked" />
                      ) : (
                        <Square className="check-icon" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="next-btn">Next</button>
        </main>
      </div>
    </div>
  );
}
