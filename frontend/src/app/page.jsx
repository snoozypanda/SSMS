import LoginPage from "@components/LoginPage";
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-custom-color-green-400 text-white p-20 flex-grow text-center">
        WELCOME TO SCHOOL MANAGEMENT SYSTEM
      </h1>
      <div className="flex justify-center space-x-4 m-20 p-10">
        <button className="border border-black w-48 h-12 bg-custom-color-blue-400 text-light">
          Sign in
        </button>
        <button className="w-48 h-12 bg-custom-color-blue-400 text-light">
          Login
        </button>
      </div>

      <footer className="fixed left-0 bottom-0 w-full  text-white text-center bg-custom-color-blue-900 p-6 flex-col justify-center align-bottom ">
        <p>Contact Us</p>
        <p>Email: studentService@gmail.com</p>
      </footer>
    </div>
  );
}
