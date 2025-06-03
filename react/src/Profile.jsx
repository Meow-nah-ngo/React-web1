import bgImg from "./assets/1.jpg";

function Profile() {
  return (
    <div>
      <div className="topic">
        <h1 className="text-xs">profile</h1>
        <h2 className="text-4xl font-regular my-4">
          We are more than Digital mech Agency
        </h2>
      </div>

      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-5">
          <img src={bgImg} alt="" className="w-full h-full object-cover rounded-xl m-7" />
        </div>
        <div className="col-span-2 row-span-3 col-start-4">
          <img src={bgImg} alt="" className="w-full h-full object-cover rounded-xl m-7" />
        </div>
        <div className="col-span-2 row-span-2 col-start-4 row-start-4">
          <img src={bgImg} alt="" className="w-full h-full object-cover rounded-xl m-7" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Who we are</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis officia quam placeat...
        </p>
        <h4 className="text-lg font-semibold mb-2">What we do</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus libero, asperiores...
        </p>
      </div>
    </div>
  );
}

export default Profile;
