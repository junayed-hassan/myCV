

function App() {

  return (
    <>
      <div className="p-16 border-2 border-gray-300">
        <div className=" flex justify-between ">
          <div className="pt-4">
            <h1 className="text-start text-5xl font-semibold ">Junayed Hassan</h1>
            <p className="text-start pt-2 text-xl font-medium">MERN Stack Web Developer</p>
          </div>
          <div>
            <ul c className="" lassName="text-sm">
              <li className="flex items-center gap-2"><p className="font-semibold">📍 Location:</p> <p className="text-sm">Mohammadpur, Dhaka, Bangladesh</p></li><p></p>
              <li className="flex items-center gap-2"><p className="font-semibold">📞 Phone: </p><p className="text-sm"><a href="tel:+8801948493880">+8801948493880</a></p></li>
              <li className="flex gap-2"><p className="font-semibold">📧 Email:</p> <p className="text-sm">junayedhassan102045@gmail.com</p> </li>
              <li className="flex gap-2"><p className="font-semibold">🔗 Portfolio:</p><a className="text-sm " href="https://junayedhasan.vercel.app/">junayedhasan.vercel.app</a> </li>
              <li className="flex gap-2"><p className="font-semibold">🔗 GitHub:</p><a className="text-sm " href="https://github.com/junayed-hassan">github.com/junayed-hassan</a> </li>
              <li className="flex gap-1"><p className="font-semibold">🔗 LinkedIn:</p><a className="text-sm " href="https://www.linkedin.com/in/junayed-hassan">www.linkedin.com/in/junayed-hassan</a></li>
            </ul>
          </div>
        </div>
        {/* Professional Summary */}
        <div>
          <h2 className="text-3xl font-semibold pb-2">Professional Summary</h2>
          <p className="text-xl">1+ years of experience in scalable web app development using Next.js, React, Node.js, and MongoDB. Completed an internship at aastech.net and successfully developed and deployed multiple websites. Passionate about building user-friendly and high-performance solutions.</p>
        </div>
        {/* Technical Skills */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Technical Skills</h2>
          <div className="flex justify-between">
            <div>
              <h3 className="text-[22px] font-medium">Frontend Technologies:</h3>
              <ul className="list-decimal ml-5">
                <li>HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                <li>React.js, Next.js</li>
                <li>Tailwind CSS, Bootstrap, Scss</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium">Backend Technologies:</h3>
              <ul className="list-decimal ml-5">
                <li>Node.js, Express.js</li>
                <li>Socket.io</li>
                <li>Database: MongoDB, Firebase Realtime Database</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium">Other Tools & Platforms:</h3>
              <ul className="list-decimal ml-5">
                <li>Git, GitHub</li>
                <li>Firebase Authentication</li>
                <li>UI/UX Design (Figma)</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Work Experience</h2>
          <div className="flex justify-between gap-6">
            <div>
              <h3 className="text-[22px] font-medium">MERN Stack Web Developer </h3>
              <span className="text-xs"><span className="font-medium">Ahmed's IT Institute </span> | October 2024 – January 2025</span>
              <ul className="pt-2 list-disc ml-3">
                <li>Developing and maintaining full-stack web applications using modern technologies.</li>
                <li>Collaborating with cross-functional teams to design and implement scalable solutions.</li>
                <li>Ensuring a seamless user experience.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium">Frontend Web Developer & Designer </h3>
              <span className="text-xs"><span className="font-medium">aastech.net</span> | July 2024 – October 2024</span>
              <ul className="pt-2 list-disc ml-3">
                <li>Designed and developed responsive user interfaces using React and Tailwind CSS.</li>
                <li>Enhanced website functionality and user experience through creative UI/UX solutions.</li>
                <li>Worked closely with backend developers to integrate APIs</li>
              </ul>
            </div>
          </div>

        </div>
        {/* Notable Projects */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Notable Projects</h2>
          <div className="flex justify-between gap-6">
            <div>
              <h3 className="text-[22px] font-medium">Real-Time Chat Application </h3>
              <span className="text-xs"><span className="font-medium">(React, Node.js, Socket.io, MongoDB)</span></span>
              <ul className="pt-2 list-disc ml-3">
                <li>Implemented real-time messaging with authentication.</li>
                <li>Designed an intuitive UI for seamless communication.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-medium">E-commerce Website</h3>
              <span className="text-xs"><span className="font-medium">(Next.js, Tailwind CSS, Stripe API)</span></span>
              <ul className="pt-2 list-disc ml-3">
                <li>Developed a fully responsive online shopping platform.</li>
                <li>Integrated secure payment gateways and order management system.</li>
              </ul>
            </div>
          </div>

        </div>
        {/* Education */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Education</h2>
          <p><span className="font-semibold">Ahmed's IT Institute, Dhaka</span> – MERN-Stack Development</p>
          <p><span className="font-semibold">Rahmania Arabia, Dhaka</span> – Master’s in Islamic Studies</p>
        </div>
        {/* Certifications & Training */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Certifications & Training </h2>
          <p><span className="font-semibold">Jamia Rahmania Arabia, Dhaka</span> – (2023)</p>
          <p><span className="font-semibold">Full Stack Developer Certificate </span>– Coursera (2024)</p>
        </div>
        {/* Awards & Achievements */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Awards & Achievements</h2>
          <p><span className="font-semibold">Best Developer Award</span>– Ahmed's IT Institute/Farewell ceremony (2025)</p>
          <p><span className="font-semibold">Exam Reward</span>– Challenge (2024)</p>
        </div>
        {/* Languages */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">Languages</h2>
          <ul>
            <li><span className="font-semibold text-md pr-2">Bangla :</span><span className="xs">Native</span></li>
            <li><span className="font-semibold text-md pr-2">English :</span><span className="xs">Professional</span></li>
            <li><span className="font-semibold text-md pr-2">Arabic :</span><span className="xs">Professional</span></li>
            <li><span className="font-semibold text-md pr-2">Hindi :</span><span className="xs">Professional</span></li>
          </ul>
        </div>
        {/* References */}
        <div className="pt-5">
          <h2 className="text-3xl font-semibold pb-2">References</h2>
            <div>
              <h3 className="text-[22px] font-medium">Yasin Sarkar</h3>
              <ul className="pt-2 list-disc ml-4">
              <li>🏢 Ahmed's IT Institute – Senior web developer</li>
                <li>📞 Phone: +880 1789-461747</li>
                <li>📧 Email: mdyacinsorkar17@gmail.com</li>
              </ul>
            </div>
        </div>
      </div>
    </>


  )
}

export default App;




