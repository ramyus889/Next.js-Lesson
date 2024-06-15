import Link from "next/link";

export default function About() {
  return (
    <div className="mt-20 flex place-content-center">
      <div className="relative flex max-w-md flex-col rounded-md  p-4 ">
        <div className="mb-2 text-center text-2xl font-bold ">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>
        <div className="mb-4 text-center text-sm font-normal ">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="relative block">
            <label
              htmlFor="password"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] "
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px]  outline-0  ring-offset-2 focus:ring-2"
            />
          </div>
          <div>
            <a className="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="m-auto w-max rounded bg-[#7747ff] px-6 py-2 text-sm font-normal text-white"
          >
            Submit
          </button>
        </form>
        <div className="mt-[1.6rem] text-center text-sm">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="#">
            Sign up for free!
          </a>
        </div>
      </div>
    </div>
  );
}
