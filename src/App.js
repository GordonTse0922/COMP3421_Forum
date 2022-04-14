import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand logo" href="#">iDiscuss</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mx-auto ">
            <li class="nav-item active">
              <a class="nav-link cool-link" href="index.php">Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Top Category
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">

             </div>
            </li>
            <li class="nav-item">

            <a class="nav-link cool-link" href="about.php">About</a>
          </li>
            <li class="nav-item">
              <a class="nav-link cool-link" href="contact.php"  >Contact</a>
            </li>
          </ul>
        </div>
          <form class="form-inline my-2 my-lg-0 " method="GET">
            <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </nav>
  );
}

export default App;
