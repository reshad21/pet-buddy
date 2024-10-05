import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <ul className="menu bg-slate-200 min-h-screen rounded-lg p-4">
        <li className="mb-2 text-center">
          <Link
            href="/dashboard"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Create Post</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>My Profile</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Update Profile</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/settings"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>LogOut</span>
          </Link>
        </li>
      </ul>
      <Link
        href="/"
        className="py-2 mx-2 bg-slate-800 text-white block  rounded-lg text-center"
      >
        <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default Sidebar;
