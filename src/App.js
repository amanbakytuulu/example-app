import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const currentUrl = window.location.href;

  const title = "title for openGraph";
  const description = "Description for OpenGraph";
  const photo = "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

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
        <title>example App </title>
        <meta name="description" content="Web site for examples" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={photo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={photo} />
      </Helmet>
      <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <br />
      <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
        twitter
      </a>
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
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
