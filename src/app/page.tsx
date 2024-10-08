import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left side  */}
      <div className="text-3xl w-1/2 px-4">
        <Image
          src="/facebook.svg"
          alt="Facebook Logo"
          width={300}
          height={100}
        />
        <p className="ml-8 -mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* Right side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
        <input
          className="my-2 border-1 border-gray-100 p-4 rounded-md outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border-1 border-gray-100 p-4 rounded-md outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-600"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-600 text-white text-lg font-bold my-2 py-2 rounded-md hover:bg-blue-500">
          Log in
        </button>
        <p className="cursor-pointer text-center text-sm text-blue-600 hover:underline my-2">
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-customGreen text-white text-lg font-semibold my-2 py-2 px-2 rounded-md w-fit hover:bg-customDarkGreen mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
}
