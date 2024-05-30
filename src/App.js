import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const currentUrl = window.location.href;

  const title = "title for openGraph";
  const description = "Description for OpenGraph";
  const photo =
    "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

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
      {/* <Helmet>
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
      </Helmet> */}
      <Helmet htmlAttributes>
        <meta
          name="twitter:title"
          content="Error 555 | Canal Oficial FC Barcelona"
        />
        <meta
          name="twitter:card"
          content="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <title>Error 4024 | Canal Oficial FC Barcelona</title>
        <meta name="analytics:section" content="barcaacademy" />
        <meta name="twitter:site" content="@FCB" />
        <meta name="twitter:description" content="dawdawdwadawdwadawdwa" />
        <meta
          property="og:title"
          content="Error axaxaxa | Canal Oficial FC Barcelona"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://barcaacademy.fcbarcelona.com/en/club/news/3943725/pau-cubarsi-and-rafa-yuste-present-barca-academy-world-cup-trophies"
        />
        <meta
          property="og:description"
          content="The latest 1232 news from FC Barcelona — schedule, tickets, injury updates, player info, video, match stats and highlights, standings, official shop &amp; more"
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
