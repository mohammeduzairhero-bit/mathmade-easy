/* ================= RESET ================= */
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comic Neue', 'Segoe UI', Arial, sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(180deg, #f9fbff, #eef4ff);
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}

/* ================= NAVBAR ================= */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  background: linear-gradient(90deg, #1f4fd8, #4facfe);
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: navbarGlow 6s infinite alternate;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  animation: pulseLogo 3s infinite ease-in-out;
  display: inline-block;
}

.nav-links {
  display: flex;
  gap: 18px;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 3px;
  left: 0;
  bottom: -5px;
  background: #ffcc00;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  animation: wiggle 0.5s ease;
}

/* ================= BUTTONS ================= */
.btn {
  background: #ffcc00;
  border: none;
  padding: 10px 18px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: rainbowGlow 5s linear infinite;
}

.btn:hover {
  transform: scale(1.08) rotate(-1deg);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.btn:active {
  transform: scale(0.95);
}

.big {
  padding: 14px 32px;
  font-size: 18px;
}

/* ================= HERO ================= */
.hero {
  text-align: center;
  padding: 75px 20px;
  position: relative;
  background: linear-gradient(135deg, #0f3d91, #1f4fd8, #4facfe);
  background-size: 400% 400%;
  color: white;
  animation: shimmer 12s ease infinite;
  overflow: hidden;
}

.hero h1 {
  font-size: 42px;
  color: white;
  margin: 0 auto 15px auto;
  display: table; /* Keeps typing centered */
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #ffcc00;
  animation: typing 4s steps(30) 1s forwards, blink 0.8s infinite;
}

.hero p {
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
}

/* Bouncing Math Emojis */
.hero::after {
  content: "➕ ➖ ✖️ ➗ 📐";
  display: block;
  font-size: 32px;
  margin-top: 20px;
  animation: bounceEmoji 1.8s infinite alternate;
}

/* ================= SECTIONS ================= */
.section {
  padding: 60px 20px;
  text-align: center;
  max-width: 1200px;
  margin: auto;
}

.gray {
  background: #f0f5ff;
}

.section h2 {
  font-size: 30px;
  margin-bottom: 15px;
}

/* ================= CARDS ================= */
.cards {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.card {
  background: white;
  width: 250px;
  padding: 30px 20px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  animation: floatCard 6s ease-in-out infinite alternate;
}

/* Sticker emoji */
.card::before {
  content: "⭐";
  position: absolute;
  top: -14px;
  right: -14px;
  font-size: 26px;
  animation: spinEmoji 4s linear infinite;
}

.card:hover {
  transform: translateY(-10px) rotate(-1deg);
  box-shadow: 0 16px 35px rgba(0,0,0,0.18);
}

.card small {
  display: block;
  margin-top: 10px;
  color: #555;
}

/* ================= PROGRESS BARS ================= */
.progress {
  background: #e0e7ff;
  border-radius: 20px;
  height: 14px;
  margin-top: 12px;
  overflow: hidden;
}

.progress span {
  display: block;
  height: 100%;
  width: 85%;
  background: linear-gradient(90deg, #ffcc00, #ff8c00);
  position: relative;
  overflow: hidden;
  animation: growBar 1.5s ease;
}

.progress span::after {
  content: "";
  position: absolute;
  top: 0; left: -40%;
  width: 40%;
  height: 100%;
  background: rgba(255,255,255,0.5);
  animation: shimmerBar 2s infinite;
}

/* ================= POPUP ================= */
.popup {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1000;
}

.popup-content {
  background: white;
  max-width: 420px;
  margin: 80px auto;
  padding: 25px;
  border-radius: 20px;
  animation: bouncePopup 1s ease;
}

.popup-content input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.close {
  float: right;
  cursor: pointer;
  font-size: 22px;
}

/* ================= CURSOR LIGHT ================= */
body::before {
  content: "";
  position: fixed;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(255,204,0,0.35), transparent 70%);
  /* If JS isn't setting --x and --y, this stays hidden or at 0,0 */
  left: var(--x, -100px);
  top: var(--y, -100px);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  animation: pulseLight 3s infinite alternate;
}

/* ================= FLOATING TOOLS ================= */
.float-tool {
  position: fixed;
  width: 80px;
  height: 80px;
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* Combined animations */
  animation: floatMove 10s linear infinite alternate, spinTool 20s linear infinite;
}

.ruler {
  background-image: url("https://www.svgrepo.com/show/25852/ruler.svg");
  top: 10%;
  left: 5%;
  animation-duration: 25s, 15s;
}

.compass {
  background-image: url("https://cdn-icons-png.flaticon.com/512/3061/3061033.png"); /* Updated to a cleaner PNG */
  top: 60%;
  left: 70%;
  animation-duration: 30s, 20s;
}

.protractor {
  background-image: url("https://cdn-icons-png.flaticon.com/512/124/124721.png");
  top: 30%;
  left: 40%;
  animation-duration: 20s, 25s;
}

/* ================= KEYFRAMES ================= */
@keyframes navbarGlow {
  0% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
  50% { box-shadow: 0 0 25px rgba(255,255,255,0.6); }
  100% { box-shadow: 0 0 40px rgba(255,255,255,0.9); }
}

@keyframes pulseLogo {
  0%, 100% { transform: scale(1); color: #fff; }
  50% { transform: scale(1.1); color: #ffcc00; }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

@keyframes rainbowGlow {
  0%, 100% { box-shadow: 0 0 10px #ffcc00; }
  25% { box-shadow: 0 0 20px #ff8c00; }
  50% { box-shadow: 0 0 20px #1f4fd8; }
  75% { box-shadow: 0 0 20px #4facfe; }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #ffcc00; }
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes floatCard {
  0% { transform: translateY(0); }
  100% { transform: translateY(-15px); }
}

@keyframes spinEmoji {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes growBar {
  from { width: 0; }
  to { width: 85%; }
}

@keyframes shimmerBar {
  0% { left: -40%; }
  100% { left: 100%; }
}

@keyframes bouncePopup {
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounceEmoji {
  from { transform: translateY(0); }
  to { transform: translateY(-15px); }
}

@keyframes floatMove {
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, 50px); }
  50% { transform: translate(-50px, 100px); }
  75% { transform: translate(100px, -50px); }
  100% { transform: translate(0, 0); }
}

@keyframes spinTool {
  from { rotate: 0deg; }
  to { rotate: 360deg; }
}

@keyframes pulseLight {
  from { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  to { opacity: 0.6; transform: translate(-50%, -50%) scale(1.4); }
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero h1 {
    font-size: 28px;
    white-space: normal; /* Allow wrap on mobile */
    border: none;
    animation: none;
    display: block;
  }
  .card {
    width: 90%;
  }
}
