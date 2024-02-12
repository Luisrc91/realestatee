import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          id="username"
          type="text"
          className="boerder p-3 rounded-lg"
          placeholder="username"
        />
        <input
          id="email"
          type="text"
          className="boerder p-3 rounded-lg"
          placeholder="email"
        />
        <input
          id="password"
          type="text"
          className="boerder p-3 rounded-lg"
          placeholder="password"
        />
        <button
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:op88"
        >
          Update
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>

      </div>
    </div>
  );
}
