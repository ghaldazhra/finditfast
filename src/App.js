//import logo from './logo.svg';
import './App.css'; 
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const history = useHistory();
  const handleclick1 = () => {
    history.push("/ReportItem");
    console.log("Button Clicked")
};
const handleclick2 = () => {
    history.push("/ViewsItem");
    console.log("Button Clicked")
};
const handleclick3 = () => {
    history.push("/admin/login");
    console.log("Button Clicked")
};

  return (
    <div className="App">
      <header className="App-header">
        <span>
          FandItFast
          <Box sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              <Button variant="contained" onClick={handleclick1}>Report Item</Button>
              <Button variant="contained" onClick={handleclick2}>View Items</Button>
              <Button variant="contained" onClick={handleclick3}>Admin Portal</Button>
            </Box>
        </span>
        <section>
          <div>
            <h1>Lost & Found <br/>
            Management System</h1>
            <p>Report, track, and claim lost items quickly and efficiently. Your one-stop <br/>
            solution for reuniting with your belongings.</p>
            <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <Button variant="contained">Report Lost Item</Button>
              <Button variant="contained">View Lost Items</Button>
            </Box>
          </div>
          <h2>How It Works</h2>
          <p>A simple three-step process to report and recover lost items.</p>
           <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center'
              }}
            >
              <Card variant="outlined" sx={{ padding: 2 }}>
                <div>
                  <h3>Step 1</h3>
                  <div>Report</div>
                  <p>Fill out a simple form <br/>
                   to report your <br/>
                   lost item.</p>
                </div>
              </Card>

              <Card variant="outlined" sx={{ padding: 2 }}>
                <div>
                  <h3>Step 2</h3>
                  <div>Verify</div>
                  <p>Our Team verifies the <br/>
                   report and updates the <br/>
                   item's status.</p>
                </div>
              </Card>

              <Card variant="outlined" sx={{ padding: 2 }}>
                <div>
                  <h3>Step 3</h3>
                  <div>Claim</div>
                  <p>Once found you'll be <br/>
                   notified and can claim<br/>
                   your item.</p>
                </div>
              </Card>
            </Box>
        </section>
      </header>
    </div>
  );
}

export default App;