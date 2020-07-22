import React, {useState, useEffect} from 'react';
import eq from './svg/coulomb.svg';
import f from './svg/f.svg';
import k from './svg/k.svg';
import q1q2 from './svg/q1q2.svg';
import r from './svg/r.svg';
import './App.css';

function precise(x) {
  return Number.parseFloat(x).toPrecision(15);
}

function App() {
  const [answer, setAnswer] = useState(0);
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [rad, setRad] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (q1 && q2 && rad) setShow(true);
  }, [q1, q2, rad]);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    setAnswer((9000000000 * q1 * q2) / (rad * rad));
    console.log(precise(answer));
  }

  const handleQ1Change = (event) => {
    setQ1(event.target.value);
  }

  const handleQ2Change = (event) => {
    setQ2(event.target.value);
  }

  const handleRadChange = (event) => {
    setRad(event.target.value);
  }

  return (
    <div className="App">
      <h1>Coulomb's Law Calculator</h1>
      <br />
      <p>
        Opposite charges attract and like charges repel. This is because all charged particles exert forces on each other.
      </p>
      <br />
      <p>
        A man named Charles Coulomb discovered this in the eighteenth century. His law states that the electrostatic force exerted between charged particles is <i>directly</i> related to the amount of charge of each particle and is <i>inversely</i> related to the distance between them squared.
      </p>
      <br />
      <p>
        This law is very similar to the Law of Universal Gravitation which was described by Newton, and the formula is very similar to the gravitational force between two objects of mass.
      </p>
      <br />
      <div className="equation">
        <h2 style={{padding: '12px'}}>
          Coulomb's Law is given by:
        </h2>
        <img src={eq} alt="Coulomb's Law" />
      </div>
      <p><img src={f} alt="F" /> = electrostatic force (N)</p>
      <p><img src={k} alt="K" /> = Coulomb's Constant (8.99 x 10^9 Nm^2/C^2)</p>
      <p><img src={q1q2} alt="Q1Q2" /> = charges (C)</p>
      <p><img src={r} alt="R" /> = distance of separation (m)</p>

      <br/>
      <br/>

      <h2 style={{textDecoration: 'underline'}}>Calculator</h2>

      <form className='myForm' onSubmit={mySubmitHandler}>
        <div className="formSection">
          <p>q1:</p>
          <input
            type='text'
            onChange={handleQ1Change}
          />
        </div>
        <div className="formSection">
          <p>q2:</p>
          <input
            type='text'
            onChange={handleQ2Change}
          />
        </div>
        <div className="formSection">
          <p>r:</p>
          <input
            type='text'
            onChange={handleRadChange}
          />
        </div>

        {show && <input style={{width: '75px', height: '50px'}} type="submit" title="Calculate"/> }
        {!show && <p>Please fill in all fields.</p>}
  
      </form>
      
      <br />
      <br />

      <p style={{marginBottom: '100px'}}>F = {answer}</p>
    </div>
  );
}

export default App;
