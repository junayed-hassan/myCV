

function App() {

  return (
    <div className="p-16 flex justify-between border-2 border-gray-300">
      <div className="pt-4">
        <h1 className="text-start text-5xl font-semibold ">Junayed Hassan</h1>
        <p className="text-start pt-2 text-xl font-medium">MERN Stack Web Developer</p>
      </div>

      <div>
        <ul c className=""lassName="text-sm">
          <li className="flex items-center gap-2"><p className="font-semibold">📍 Location:</p> <p className="text-sm">Mohammadpur, Dhaka, Bangladesh</p></li><p></p>
          <li className="flex items-center gap-2"><p className="font-semibold">📞 Phone: </p><p className="text-sm"><a href="tel:+8801948493880">+8801948493880</a></p></li>
          <li className="flex gap-2"><p className="font-semibold">📧 Email:</p> <p className="text-sm">junayedhassan102045@gmail.com</p> </li>
          <li className="flex gap-2"><p className="font-semibold">🔗 Portfolio:</p><a className="text-sm " href="https://junayedhasan.vercel.app/">junayedhasan.vercel.app</a> </li>
          <li className="flex gap-2"><p className="font-semibold">🔗 GitHub:</p><a className="text-sm " href="https://github.com/junayed-hassan">github.com/junayed-hassan</a> </li>
          <li className="flex gap-1"><p className="font-semibold">🔗 LinkedIn:</p><a className="text-sm " href="https://www.linkedin.com/in/junayed-hassan">www.linkedin.com/in/junayed-hassan</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App;




