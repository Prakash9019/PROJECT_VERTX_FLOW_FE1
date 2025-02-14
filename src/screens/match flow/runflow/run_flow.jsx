
import { CheckSquare, Square } from "lucide-react";
import "./style3.css";

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
