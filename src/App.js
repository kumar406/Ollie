import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from "./Button.js";
import {Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function signout() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    signOut(auth).then(() => {
      alert("Signed out successfully.");
    }).catch((error) => {
      alert(error);
    });
  } else {
    alert("No account is currently signed in.");
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Ollie </h1>
        </p>
        <Link to="/login"><button>
          Login
          </button>
          <button onClick={signout}>Sign-out</button> 
          </Link>
          <Link to="/signup"><button>
          Sign-up
          </button>
          </Link>
        <Link to="/CreateStory"><button>
          Create Story
          </button>
          <br></br>
          <br></br>
          </Link>
          <button>
            Delete Story
          </button>
          <br></br>
          <Link to="/Board"><button>
          View Board
          </button> 
          <br></br>
          <br></br>
          </Link>
          <Link to="/Settings"><button>
          Settings
          </button>
          <br></br>
          <br></br> 
          </Link>
          <Link to="/Profile"><button>
          Profile
          </button> 
          <br></br>
          <br></br>
          </Link>
          <Link to="/Sidebar"><button>
          Sidebar
          </button>
          
          <br></br>
          <br></br>
          </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
