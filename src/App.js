import {Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import {useState} from "react";
import Canvas from "./Canvas";
import sampleImage from './sample-image.jpg';
import './index.scss';

function App() {

  const [mouldingValue, setMouldingValue] = useState('frame-black');
  const [matboardValue, setMatboardValue] = useState('mat');

  const mouldingOptions = [
    { name: 'Black', value: 'frame-black' },
    { name: 'White', value: 'frame-white' },
    { name: 'Natural', value: 'frame-wood' },
  ];

  const matboardOptions = [
    { name: 'No matboard', value: 'no-mat' },
    { name: 'White matboard', value: 'mat' },
    { name: 'Black matboard', value: 'mat mat-black' },
  ];

  const draw = context => {
    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(30, 30, 50, 50);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row my-5 g-5">
          <div className="col-6">
            <div className="rounded p-5 bg-light">
              <div className="background" style={{transform: 'scale(0.7)'}}>
                <div className={`frame ${mouldingValue}`}>
                  <div className={`${matboardValue}`}>
                    <img src={sampleImage} alt="" className="image img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h5 className="">Select moulding</h5>
            <p className="text-muted">Select your style of moulding</p>

            <ButtonGroup>
              {mouldingOptions.map((radio, idx) => (
                  <ToggleButton
                      key={idx}
                      id={`moulding-${idx}`}
                      type="radio"
                      variant={'outline-primary'}
                      name="moulding"
                      value={radio.value}
                      checked={mouldingValue === radio.value}
                      onChange={(e) => setMouldingValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
              ))}
            </ButtonGroup>

            <hr />

            <h5 className="">Select matboard</h5>
            <p className="text-muted">Select your style of matboard</p>

            <ButtonGroup>
              {matboardOptions.map((radio, idx) => (
                  <ToggleButton
                      key={idx}
                      id={`matboard-${idx}`}
                      type="radio"
                      variant={'outline-primary'}
                      name="matboard"
                      value={radio.value}
                      checked={matboardValue === radio.value}
                      onChange={(e) => setMatboardValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
