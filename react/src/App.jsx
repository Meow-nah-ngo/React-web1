import bgImg from "./assets/2.gif";
import "./App.css"; // make sure this is imported

function App() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background image */}
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Fullscreen blur with capsule cutout */}
      <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-sm mask-hole"></div>

      {/* Optional: content appears above everything */}
      <div className="relative z-20 p-8">
        <div className="flex justify-between">
          <h2 className="text-sm">Quote</h2>
          <h1 className="text-9xl text-end">zaan</h1>
        </div>

        <div className="text-right mt-8">
          <span className="text-6xl">"</span>
          <p className="text-xl mr-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, malesuada
            <br />aliquet ut diam etiam faucibus, sed luctus cum
          </p>
          <p className="py-3">Name - CEO</p>
        </div>
      </div>
    </div>
  );
}

export default App;
