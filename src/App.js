import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const currentUrl = window.location.href;

  const title = "title for openGraph";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}&quote=${encodeURIComponent(title)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(title)}`,
  };

  return (
    <div className="App">
      <Helmet>
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="description for openGraph" />
        <meta
          property="og:image"
          content="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
        />
      </Helmet>
      <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <br />
      <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
      twitter
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
