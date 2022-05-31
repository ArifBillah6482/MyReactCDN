class App extends React.Component{
    render() {
        return (
            <div id="mainDiv">
               <h1>Hello </h1>
               <h2>Arif Billah</h2>
               </div>             
        )
    }
  }
  const root = ReactDOM.createRoot( document.getElementById("root"));
  root.render(
    <React.StrictMode>
        <h1>Arif Billah</h1>
        <h1>Arif Billah</h1>
        <App />
        <App />
        <App />

    </React.StrictMode>
  )


