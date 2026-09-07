import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = name.trim().toLowerCase();

    if (enteredName === "emmanuel") {
      setError("");
      setPage(2);
    } else {
      setError("Hmmmm... that's not the person I'm looking for 👀❤️");
    }
  };

  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <main className="app">
      {/* PAGE 1 */}
      {page === 1 && (
        <section className="page welcome-page">
          <div className="heart-container">
            <div className="heart">♥</div>
          </div>

          <p className="small-text">Dami co co, small thing for you...</p>

          <h1>
            But first...
            <br />
            what's your baby's name??? 👀
          </h1>

          <form onSubmit={handleSubmit} className="name-form">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type in my name..."
              autoComplete="off"
            />

            <button type="submit">
              Continue ❤️
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          <p className="hint">Psst... you already know the answer 😉</p>
        </section>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <section className="page love-page">
          <div className="floating-hearts">
            ❤️ 💕 ❤️ 💗 ❤️
          </div>

          <div className="love-illustration">
            <div className="big-heart">♥</div>
          </div>

          <p className="eyebrow">Asa'n nwa, Oyo yo'm,</p>

          <h1>There is something I need you to know...</h1>

          <div className="message-card">
            <p>
              I don't think words will ever be enough to completely explain
              how much I love you.
            </p>

            <p>
              You have become such a beautiful and important part of my life,
              and every moment I get to spend with you is something I treasure.
            </p>

            <p>
              I love your smile. I love your heart. I love the way you make
              ordinary moments feel special.
            </p>

            <p>
              Most importantly, I love <strong>you</strong> — exactly as you
              are.
            </p>

            <p className="signature">
              Always remember that you have someone who loves you deeply,
              completely, and genuinely. ❤️
            </p>
          </div>

          <button className="next-button" onClick={nextPage}>
            Click next to see what else i have to say to you →
          </button>
        </section>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <section className="page encouragement-page">
          <div className="sun">☀️</div>

          <p className="eyebrow">My princess...</p>

          <h1>
            I know today
            <br />
            was stressful.
          </h1>

          <div className="message-card">
            <p>
              I just want you to remember something:
              <strong> you are amazing.</strong>
            </p>

            <p>
              You are stronger than you sometimes realize, smarter than you
              sometimes give yourself credit for, and capable of achieving
              every single thing you've set your heart on.
            </p>

            <p>
              Please don't ever allow one stressful day to make you question
              everything, i could sense how tired you were through your voice notes.
            </p>

            <p>
              I believe in you and i believe soooo much  in the
              woman you're becoming.
            </p>

            <p>
              And I know that someday you're going to look back at everything
              you're working through right now and realize that you made it.
            </p>

            <p>
              You are going to achieve everything you've set out to achieve.
              <strong> I know you will.</strong>
            </p>

            <div className="care-message">
              <p>
                And honestly...
              </p>

              <p>
                I really wish I could be there with you right now.
              </p>

              <p>
                I'd give you the biggest hug, let you forget about everything
                for a while, give you a very nice  massage, with small bad thing after, make sure
                you've eaten, make you comfortable, and just take care of you.
                ❤️
              </p>

              <p>
                You deserve to rest.
                
  
                <br />
                You deserve to be taken care of.
              </p>
            </div>
          </div>

          <button className="next-button" onClick={nextPage}>
            There's one last thing I need to tell you... ❤️
          </button>
        </section>
      )}

      {/* PAGE 4 */}
      {page === 4 && (
        <section className="page final-page">
          <div className="final-hearts">
            ❤️ ❤️ ❤️
          </div>

          <div className="giant-heart">
            ♥
          </div>

          <h1 className="final-love">
            I looooooooooooooooovvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu Damisi
          </h1>

          <p className="final-subtitle">
            More than these words could ever explain. ❤️, If you haven't laughed today,check the videos i sent you on tiktok
          </p>

          <div className="heart-row">
            💗 💕 💞 💓 💖 💘 💝
          </div>
        </section>
      )}
    </main>
  );
}

export default App;