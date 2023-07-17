const Card = () => (
        <div className="card">
          <h3>Name: {name} </h3>
          <p>Email: {email} </p>
          <p>About: {about} </p>
        </div>
      );
let name;
let email;
let about;


let x=(event)=>{
name=event.target.value;
 rootElement.render(<App />);
}

const y=(event)=>{
email=event.target.value;
 rootElement.render(<App />);
}

const z=(event)=>{
about=event.target.value;
 rootElement.render(<App />);
}

      const App = () => (
      <>

<Card/>
        <div className="App">
          <div className="inputs">
          
            <input placeholder="Name" onChange={x}/>
            <input type="email" placeholder="Email" onChange={y}/>
            <textarea placeholder="About" onChange={z}></textarea>
          </div>
        </div>
        </>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
