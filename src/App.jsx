import { useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

const CORRECT_BIRTHDAY = "A Birthday"; // <-- CHANGE THIS to your shared birthday.

const birthdayOptions = [
  "A Birthday",
  "Fav Food",
  "Fav Color",
  "Same Hobby",
];

function PageShell({ children, step, eyebrow }) {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />

      <header className="topbar">
        <div className="brand-mark">
          <span>for</span> you <b>♡</b>
        </div>
        <div className="progress">
          <span className={step >= 1 ? "active" : ""}>01</span>
          <i />
          <span className={step >= 2 ? "active" : ""}>02</span>
          <i />
          <span className={step >= 3 ? "active" : ""}>03</span>
          <i />
          <span className={step >= 4 ? "active" : ""}>04</span>
        </div>
      </header>

      <section className="content">{children}</section>

      <footer className="footer">
        <span>{eyebrow}</span>
        <span>made with intention ♡</span>
      </footer>
    </main>
  );
}

function Protected({ children }) {
  const unlocked = sessionStorage.getItem("letterUnlocked") === "true";
  return unlocked ? children : <Navigate to="/" replace />;
}

function AuthPage() {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const unlock = () => {
    if (!selected) {
      setError("Choose one first. You know this one. ♡");
      return;
    }
    if (selected !== CORRECT_BIRTHDAY) {
      setError("Hmm… not that one. Think of that one thing we share.");
      return;
    }
    sessionStorage.setItem("letterUnlocked", "true");
    navigate("/letter");
  };

  return (
    <PageShell step={1} eyebrow="a tiny question before the letter">
      <div className="auth-layout">
        <div className="intro-copy">
          <p className="kicker">A LITTLE MEMORY</p>
          <h1>
            Before you read
            <em>what I wrote…</em>
          </h1>
          <p className="lede">
            There is one little thing only the two of us should know.
            What do we have in common??.
          </p>
          <div className="tiny-note">
            <span>✦</span> no pressure. just a memory.
          </div>
        </div>

        <div className="glass-card auth-card">
          <div className="card-icon">♡</div>
          <p className="card-label">OUR LITTLE PASSWORD</p>
          <h2>What Do We Have In Common???</h2>
          <p className="muted">Choose one of the dates below.</p>

          <div className="birthday-grid">
            {birthdayOptions.map((date) => (
              <button
                key={date}
                className={`choice ${selected === date ? "selected" : ""}`}
                onClick={() => {
                  setSelected(date);
                  setError("");
                }}
              >
                <span>{date.split(" ")[0]}</span>
                <strong>{date.split(" ")[1]}</strong>
              </button>
            ))}
          </div>

          {error && <p className="error">{error}</p>}

          <button className="primary-button" onClick={unlock}>
            Open what I wrote <span>→</span>
          </button>
        </div>
      </div>
    </PageShell>
  );
}

function LetterPage() {
  const navigate = useNavigate();

  return (
    <Protected>
      <PageShell step={2} eyebrow="page two · something I needed you to know">
        <article className="letter-page">
          <p className="kicker centered"></p>
          <h1 className="display-title">
            There is something
            <br />
            I need you to know<span>.</span>
          </h1>

          <div className="letter-card">
            <div className="letter-top">
              <span>DEAR YOU,</span>
              <span>♡</span>
            </div>

            <div className="letter-body">
              <p>
                I don't think words will ever be enough to completely explain
                how much I care about you.
              </p>
              <p>
                You became such a beautiful and important part of my life,
                and every moment I got to spend talking to you, laughing with
                you, and simply knowing you was something I genuinely
                treasured.
              </p>
              <p>
                I loved the little things. Your smile. Your heart. The way
                ordinary moments somehow felt different when you were part of
                them.
              </p>
              <p>
                And even though life has taken us in different directions,
                none of that makes what you meant to me any less real.
              </p>
              <p className="signature-line">
                I just wanted you to know that.
              </p>
            </div>

            <div className="letter-signature">
              <span>always wishing you well,</span>
              <strong>me ♡</strong>
            </div>
          </div>

          <button className="text-button" onClick={() => navigate("/strength")}>
            There is more I want you to hear <span>↓(click)</span>
          </button>
        </article>
      </PageShell>
    </Protected>
  );
}

function StrengthPage() {
  const navigate = useNavigate();

  return (
    <Protected>
      <PageShell step={3} eyebrow="page three · remember who you are">
        <article className="center-page">
          <div className="number">03</div>
          <p className="kicker centered">IN CASE NO ONE HAS TOLD YOU TODAY...</p>
          <h1 className="display-title">
            You are <em>stronger</em>
            <br />
            than you realise.
          </h1>

          <div className="message-grid">
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <p>
                I hope you never forget how much strength, warmth and beauty
                you carry with you.
              </p>
            </div>

            <div className="message-copy">
              <p>
                I have seen enough of your heart to know that you are not an
                ordinary woman. You have a strength in you that deserves to be
                recognised — especially on the days when you don't recognise
                it yourself.
              </p>
              <p>
                You deserve to be loved gently. You deserve to be listened to.
                You deserve people who see your worth without making you prove
                it first.
              </p>
              <p>
                And whether I get to stand close to you or simply wish the
                best for you from somewhere else, I will always care deeply
                about the person you are becoming.
              </p>
            </div>
          </div>

          <div className="love-statement">
            <span>♡</span>
            <p>You are loved. You matter. You are enough.</p>
            <span>♡</span>
          </div>

          <button className="primary-button compact" onClick={() => navigate("/miss-you")}>
            One last thing… <span>→</span>
          </button>
        </article>
      </PageShell>
    </Protected>
  );
}

function MissYouPage() {
  const navigate = useNavigate();

  return (
    <Protected>
      <PageShell step={4} eyebrow="page four · the part I found hardest to say">
        <article className="miss-page">
          <div className="miss-orbit">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="heart-orbit">♡</div>
          </div>

          <p className="kicker centered">AND IF I'M BEING HONEST…</p>
          <h1 className="display-title">
            I <em>miss</em> you.
          </h1>

          <div className="miss-card">
            <p>
              I miss the conversations. I miss having someone whose presence
              could change the mood of an ordinary day.
            </p>
            <p>
              I miss the little things I probably never told you I noticed.
              The moments that seemed small at the time but somehow stayed
              with me.
            </p>
            <p>
              Maybe that's the simplest way I can say it:
              <strong> I miss you, and I care about you more than I ever
              managed to put into words.</strong>
            </p>
          </div>

          <p className="closing">
            No expectation. No pressure.
            <br />
            Just something true I wanted you to know.
          </p>

          <button
            className="ghost-button"
            onClick={() => {
              sessionStorage.removeItem("letterUnlocked");
              navigate("/");
            }}
          >
            Read it again
          </button>
        </article>
      </PageShell>
    </Protected>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/letter" element={<LetterPage />} />
      <Route path="/strength" element={<StrengthPage />} />
      <Route path="/miss-you" element={<MissYouPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;