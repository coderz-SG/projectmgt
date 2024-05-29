import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      companyName: 'ABC Corporation',
      contractOwner: 'John Doe',
      milestone: 'Milestone 1',
      startdate: '2023-04-30',
      due: '2023-04-30',
      remarks: '',
      selected: false
    },
    {
      id: 2,
      companyName: 'XYZ Inc.',
      contractOwner: 'Jane Smith',
      milestone: 'Milestone 2',
      startdate: '2023-04-30',
      due: '2023-05-15',
      remarks: '',
      selected: false
    },
    {
      id: 3,
      companyName: 'Acme Co.',
      contractOwner: 'Bob Johnson',
      milestone: 'Milestone 3',
      startdate: '2023-04-30',
      due: '2023-06-01',
      remarks: '',
      selected: false
    }
  ]);

  const [milestones] = useState([
    'Milestone 0',
    'Milestone 1',
    'Milestone 2',
    'Milestone 3',
    'Milestone 4',
    'Milestone 5'
  ]);

  const handleDashboardClick = () => {
    navigate('/home');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleAnalyticsClick = () => {
    navigate('/analysis');
  };

  const handleInputChange = (e, index, key) => {
    const updatedData = [...data];
    if (key === 'selected') {
      updatedData[index][key] = e.target.checked;
    } else {
      updatedData[index][key] = e.target.value;
    }
    setData(updatedData);
  };

  const addRow = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        companyName: '',
        contractOwner: '',
        milestone: '',
        startdate: '',
        due: '',
        remarks: '',
        selected: false
      }
    ]);
  };

  const removeRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className="container-fluid vh-100 bg-white">
      <div className="row">
        <div className="col-2 text-light py-4 d-flex flex-column justify-content-start" style={{ backgroundColor: '#f8f7ff', minHeight: '100vh' }}>
          {/* Logo Section */}
          <img src={require('./images/iDEX-Final-Logo-03 (1).jpg')} alt="Logo" style={{ width: '232px', height: '70px' }} />
          <ul className="list-unstyled d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
            <li className="mb-2">
              <button
                className="btn btn-light text-primary px-4 py-2 rounded-3 border border-dark"
                style={{ width: '150px' }}
                onClick={handleDashboardClick}
              >
                Dashboard
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-light text-primary px-4 py-2 rounded-3 border border-dark" style={{ width: '150px' }}
              onClick={handleAnalyticsClick}
              >
                Analytics
              </button>
            </li>
            <li className="mb-2">
              <button
                className="btn btn-light text-primary px-4 py-2 rounded-3 border border-dark"
                style={{ width: '150px' }}
                onClick={handleSettingsClick}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div className="col-10 bg-dark text-light py-4" style={{ minHeight: '100vh' }}>
          <h1 className="display-3 bg-dark text-light" style={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            DASHBOARD
          </h1>
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table table-striped table-bordered table-hover table-sm">
              <thead style={{ backgroundColor: '#f8f9fa', color: '#343a40' }}>
                <tr>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>S.No</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Name of the Company</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Contract Owner</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Milestone</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Start Date</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Due</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Select</th>
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Remarks</th>
                  {/* Add more columns here as needed */}
                  <th style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} style={{ backgroundColor: 'blue' }}>
                    <td>{index + 1}</td>
                    <td><input type="text" value={item.companyName} onChange={(e) => handleInputChange(e, index, 'companyName')} /></td>
                    <td><input type="text" value={item.contractOwner} onChange={(e) => handleInputChange(e, index, 'contractOwner')} /></td>
                    <td>
                      <select value={item.milestone} onChange={(e) => handleInputChange(e, index, 'milestone')}>
                        {milestones.map((milestone) => (
                          <option key={milestone} value={milestone}>{milestone}</option>
                        ))}
                      </select>
                    </td>
                    <td><input type="date" value={item.startdate} onChange={(e) => handleInputChange(e, index, 'startdate')} /></td>
                    <td><input type="date" value={item.due} onChange={(e) => handleInputChange(e, index, 'due')} /></td>
                    <td><input type="checkbox" checked={item.selected} onChange={(e) => handleInputChange(e, index, 'selected')} /></td>
                    <td><textarea value={item.remarks} onChange={(e) => handleInputChange(e, index, 'remarks')} /></td>
                    {/* Add more columns here as needed */}
                    <td>
                      <button onClick={() => removeRow(index)} className="btn btn-danger">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={addRow} className="btn btn-primary">Add Row</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
