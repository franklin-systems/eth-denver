import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen isolate bg-gray-900">
      { gradientBackground() }

      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Franklin Hack-a-Team</span>
              <img className="h-20 rounded-xl" src="https://user-images.githubusercontent.com/1410181/221963178-ebddf3f7-1361-42b0-91dd-ea73a1412715.png" alt="" />
            </a>
          </div>
        </nav>
      </div>
      <main className="max-w-4xl mx-auto p-12">
        {/* Render active route, defined in Router */}
        <Outlet />
      </main>
    </div>
  );
}

function gradientBackground() {
  return (
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg
        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)"
          fillOpacity=".2"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="f4773080-2a16-4ab4-9fd7-579fec69a4f7"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
