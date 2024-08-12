import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen gap-4 flex flex-col justify-center items-center">
      <div className="text-2xl font-bold">404</div>
      <div className="text-6xl font-bold">Page not found</div>
      <div className="text-lg font-sans text-black/50">
        Sorry, we couldn't find the page you're looking for.
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-lg font-sans font-bold text-sec-secondary bg-sec-primary hover:opacity-90 active:opacity-80 rounded-md focus:outline-none"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
