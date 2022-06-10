import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50
  const link = "www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>

        <p>{ 10 }</p>
        <p>"hello, ninjas"</p>
       <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
