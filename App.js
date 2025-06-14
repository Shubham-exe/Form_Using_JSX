import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <img
          id="logo"
          src="https://logowik.com/content/uploads/images/parul-university9542.jpg"
          alt="Parul University"
        />
        <nav>
          <ul className="navlink">
            <li><a href="#">Home</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Get Admission</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="main-left">
          <img src="Parul.jpg" className="mainImg" alt="Parul University Campus" />
        </div>
        <div className="main-right">
          <form className="form">
            <h1>College Registration Form</h1>

            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your Full Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your Email Address" required />

            <label htmlFor="phone">Contact Number</label>
            <input type="tel" id="phone" placeholder="Enter your Contact Number" required />

            <label htmlFor="course">Course</label>
            <input type="text" id="course" placeholder="Enter your Course" required />

            <div class="buttons">
   <button class="btn"><span></span><p data-start="good luck!" data-text="Register" data-title="CLick Here to"></p></button>
</div>

          </form>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Parul University • Designed by Ace</p>
      </footer>
    </>
  );
}

export default App;
