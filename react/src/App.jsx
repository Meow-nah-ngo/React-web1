import bgImg from "./assets/2.gif"

function App() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-sm'>Quote</h2>
        <img 
          src= {bgImg} 
          alt="" 
          className="absolute inset-0 w-full object-cover z-0 blur-sm"
          />
        <h1 className='text-9xl text-end relative z-10'>zaan</h1>
      </div>

      <div className="relative z-10">
        <p className="items-end text-right">
          <span className="text-6xl">"</span>
          <p class="text-xl mr-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, malesuada aliquet ut diam etiam faucibus, sed luctus cum
          </p>
          <p className="py-3">Name -CEO</p>
        </p>
      </div>
    </div> 
  )

}

export default App
