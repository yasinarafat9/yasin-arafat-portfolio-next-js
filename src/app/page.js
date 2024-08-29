import Image from "next/image";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
// import Navbar from "@shared/Navbar"

export default function Home({ children }) {
  return (
    <main className="">
      <div className="m-2">
        <h3>About Me </h3>
        <hr/>
        <br/>
        <p> Hi! I’m Muhammad Yasin Arafat, a MERN Stack Developer with one year of experience in building web applications. I’m passionate about coding and love turning ideas into functional, user-friendly websites. </p>
        <br />
        <p>I specialize in using MongoDB, Express.js, React.js, and Node.js to create full-stack applications. From designing the front-end to developing the back-end, I enjoy working on every part of the process.</p>
        <br />
        <p>In the past year, I’ve worked on projects like e-commerce sites and blogs, which have helped me strengthen my skills and gain valuable experience. I’m always learning new things and staying updated with the latest trends in web development. </p>
        <br />
        <p>When I’m not coding, I enjoy exploring new technologies and working on side projects. I’m excited about the future and look forward to new opportunities to grow and collaborate with others. </p>
        <br />
        <p>  Thanks for stopping by my portfolio! Feel free to check out my work, and reach out if you’d like to connect.
        </p>


      </div>

    </main >
  );
}
