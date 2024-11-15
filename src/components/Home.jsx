import Coding from "../assets/coding.jpg"
const Home = () => {
  return (
    <div className="">
        <div className="mt-3 border-b-2 pb-5">
            <div className="max-w-5xl mx-auto flex justify-between">
      <h1 className="text-3xl font-bold">Abilita<span className="text-blue-500">Edge</span></h1>
      <input type="text" placeholder="Type to Search" className="border-2 w-[400px] px-2 rounded-lg"/>
      <button className="text-blue-500">Learning</button>
      </div>
      </div>
      <div className="flex space-x-6 mt-3 max-w-5xl mx-auto">
        <h1>Home</h1>
        <p>{">"}</p>
        <h1>MERN Full Stack Website Development</h1>
      </div>
      <div className="mt-5 max-w-5xl mx-auto flex space-x-40">
        <div>
        <h1 className="text-3xl font-bold">MERN Full Stack Website Development</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <ul className="mt-10">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        <button className="bg-blue-500 text-white p-3 rounded-md mt-5">Download Brochure</button>
        </div>
        <div>
            <img src={Coding} alt="coding" className="h-[200px] rounded-lg"/>
        </div>
      </div>
      <div className="mt-10 max-w-5xl mx-auto flex space-x-10 mb-10">
        <div>
        <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipidjd.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum repellendus sed voluptates. Tempora, laboriosam animi.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur velit corporis unde. Reprehenderit dignissimos dolor cum. Alias, hic enim voluptatum necessitatibus ad, quod quibusdam earum pariatur iusto corrupti qui!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur velit corporis unde. Reprehenderit dignissimos dolor cum. Alias, hic enim voluptatum necessitatibus ad, quod quibusdam earum pariatur iusto corrupti qui!
        </p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum repellendus sed voluptates. Tempora, laboriosam animi.</p>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur velit corporis unde. Reprehenderit dignissimos dolor cum. Alias, hic enim voluptatum necessitatibus ad, quod quibusdam earum pariatur iusto corrupti qui!
        </p><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum repellendus sed voluptates. Tempora, laboriosam animi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veniam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur velit corporis unde. Reprehenderit dignissimos dolor cum. Alias, hic enim voluptatum necessitatibus ad, quod quibusdam earum pariatur iusto corrupti qui!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur velit corporis unde. Reprehenderit dignissimos dolor cum. Alias, hic enim voluptatum necessitatibus ad, quod quibusdam earum pariatur iusto corrupti qui!
        </p>
        </div>
        <div className="p-5 space-y-4 flex-col border-[2px] shadow-lg h-full">
            <h1 className="text-blue-500 font-bold">Book a Live Class, For Free!</h1>
            <input type="text" placeholder="Name" className="w-full border-2 px-2"/>
            <input type="text" placeholder="Mobile No." className="w-full border-2 px-2"/>
            <input type="text" placeholder="Education" className="w-full border-2 px-2"/>
            <input type="text" placeholder="Course" className="w-full border-2 px-2"/><br /> 
            <input type="radio" name="Whatsapp" id="Whatsapp" className=""/><span className="pl-2">Send me an update on Whatsapp</span>
            <br />
            <input type="submit" className="w-full p-1 bg-blue-500 text-white rounded-md"/>
        </div>
      </div>
    </div>
  )
}

export default Home
