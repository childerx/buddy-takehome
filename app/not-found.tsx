import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-5 py-2.5 rounded-xl bg-[#052326]">
        Return Home
      </Link>
    </div>
  );
}
