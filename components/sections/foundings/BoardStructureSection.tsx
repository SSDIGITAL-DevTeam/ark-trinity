export default function BoardStructureSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-error mb-4">
            Why This Board Structure Works
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            ARK Trinity does not rely on personality-driven leadership.
            <br className="hidden md:block" />
            Each core pillar has a{" "}
            <span className="font-bold text-black">clear owner</span>:
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Capital */}
          <div className="bg-error rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-white shadow-lg shadow-error/20">
            <div className="flex items-center md:justify-start justify-center gap-4 w-full md:w-1/3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 22.5C31.9891 22.5 33.8968 23.2902 35.3033 24.6967C36.7098 26.1032 37.5 28.0109 37.5 30C37.5 31.9891 36.7098 33.8968 35.3033 35.3033C33.8968 36.7098 31.9891 37.5 30 37.5C28.0109 37.5 26.1032 36.7098 24.6967 35.3033C23.2902 33.8968 22.5 31.9891 22.5 30C22.5 28.0109 23.2902 26.1032 24.6967 24.6967C26.1032 23.2902 28.0109 22.5 30 22.5ZM30 11.25C42.5 11.25 53.175 19.025 57.5 30C53.175 40.975 42.5 48.75 30 48.75C17.5 48.75 6.825 40.975 2.5 30C6.825 19.025 17.5 11.25 30 11.25ZM7.95 30C9.97064 34.1258 13.1083 37.6019 17.0062 40.0331C20.9041 42.4644 25.406 43.7533 30 43.7533C34.594 43.7533 39.0959 42.4644 42.9938 40.0331C46.8917 37.6019 50.0294 34.1258 52.05 30C50.0294 25.8742 46.8917 22.3981 42.9938 19.9669C39.0959 17.5356 34.594 16.2467 30 16.2467C25.406 16.2467 20.9041 17.5356 17.0062 19.9669C13.1083 22.3981 9.97064 25.8742 7.95 30Z"
                  fill="white"
                />
              </svg>

              <span className="font-bold text-lg md:text-xl">
                Capital Consciousness
              </span>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div className="w-full md:w-1/3 text-center md:text-left font-medium text-lg">
              disciplined, intentional use of capital
            </div>
          </div>

          {/* AI */}
          <div className="bg-error rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-white shadow-lg shadow-error/20">
            <div className="flex items-center md:justify-start justify-center gap-4 w-full md:w-1/3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.125 13.75C52.6277 13.75 52.1508 13.5525 51.7992 13.2008C51.4475 12.8492 51.25 12.3723 51.25 11.875C51.25 11.3777 51.4475 10.9008 51.7992 10.5492C52.1508 10.1975 52.6277 10 53.125 10C53.6223 10 54.0992 10.1975 54.4508 10.5492C54.8025 10.9008 55 11.3777 55 11.875C55 12.3723 54.8025 12.8492 54.4508 13.2008C54.0992 13.5525 53.6223 13.75 53.125 13.75ZM53.125 13.75V23.125C53.125 24.87 53.125 25.7425 52.91 26.45C52.6716 27.2371 52.2428 27.9532 51.6615 28.5349C51.0802 29.1167 50.3644 29.546 49.5775 29.785C48.8675 30 47.995 30 46.25 30M6.875 46.25C7.37228 46.25 7.84919 46.4475 8.20083 46.7992C8.55246 47.1508 8.75 47.6277 8.75 48.125C8.75 48.6223 8.55246 49.0992 8.20083 49.4508C7.84919 49.8025 7.37228 50 6.875 50C6.37772 50 5.90081 49.8025 5.54917 49.4508C5.19754 49.0992 5 48.6223 5 48.125C5 47.6277 5.19754 47.1508 5.54917 46.7992C5.90081 46.4475 6.37772 46.25 6.875 46.25ZM6.875 46.25V36.875C6.875 35.13 6.875 34.2575 7.09 33.55C7.32837 32.7629 7.7572 32.0468 8.3385 31.4651C8.91979 30.8833 9.6356 30.454 10.4225 30.215C11.1325 30 12.005 30 13.75 30M13.75 6.875C13.75 7.37228 13.5525 7.84919 13.2008 8.20083C12.8492 8.55246 12.3723 8.75 11.875 8.75C11.3777 8.75 10.9008 8.55246 10.5492 8.20083C10.1975 7.84919 10 7.37228 10 6.875C10 6.37772 10.1975 5.90081 10.5492 5.54917C10.9008 5.19754 11.3777 5 11.875 5C12.3723 5 12.8492 5.19754 13.2008 5.54917C13.5525 5.90081 13.75 6.37772 13.75 6.875ZM13.75 6.875H23.125C24.87 6.875 25.7425 6.875 26.45 7.09C27.2374 7.32861 27.9537 7.75782 28.5354 8.33957C29.1172 8.92132 29.5464 9.63764 29.785 10.425C30 11.1325 30 12.005 30 13.75M46.25 53.125C46.25 52.6277 46.4475 52.1508 46.7992 51.7992C47.1508 51.4475 47.6277 51.25 48.125 51.25C48.6223 51.25 49.0992 51.4475 49.4508 51.7992C49.8025 52.1508 50 52.6277 50 53.125C50 53.6223 49.8025 54.0992 49.4508 54.4508C49.0992 54.8025 48.6223 55 48.125 55C47.6277 55 47.1508 54.8025 46.7992 54.4508C46.4475 54.0992 46.25 53.6223 46.25 53.125ZM46.25 53.125H36.875C35.13 53.125 34.2575 53.125 33.55 52.91C32.7629 52.6716 32.0468 52.2428 31.4651 51.6615C30.8833 51.0802 30.454 50.3644 30.215 49.5775C30 48.8675 30 47.995 30 46.25"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8721 29.8774C13.8721 22.2174 13.8721 18.3874 16.2521 16.0074C18.6321 13.6274 22.4621 13.6274 30.1221 13.6274C37.7821 13.6274 41.6121 13.6274 43.9921 16.0074C46.3721 18.3874 46.3721 22.2174 46.3721 29.8774C46.3721 37.5374 46.3721 41.3674 43.9921 43.7474C41.6121 46.1274 37.7821 46.1274 30.1221 46.1274C22.4621 46.1274 18.6321 46.1274 16.2521 43.7474C13.8721 41.3674 13.8721 37.5374 13.8721 29.8774Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.248 36.2499L27.598 24.9474C27.4714 24.5908 27.2356 24.2831 26.9241 24.0681C26.6126 23.8531 26.2413 23.7418 25.863 23.7499C25.485 23.7423 25.1143 23.8539 24.8033 24.0688C24.4923 24.2838 24.2569 24.5912 24.1305 24.9474L20.4805 36.2499M37.498 23.7499V36.2499M21.823 32.4999H29.903"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-bold text-lg md:text-xl">
                AI Authentic Intelligence
              </span>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div className="w-full md:w-1/3 text-center md:text-left font-medium text-lg">
              intelligence that produces outcomes
            </div>
          </div>

          {/* Digital */}
          <div className="bg-error rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-white shadow-lg shadow-error/20">
            <div className="flex items-center md:justify-start justify-center gap-4 w-full md:w-1/3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 32.5001C50 45.0001 41.25 51.2502 30.85 54.8752C30.3054 55.0597 29.7138 55.0509 29.175 54.8502C18.75 51.2501 10 45.0001 10 32.5001V15.0001C10 14.3371 10.2634 13.7012 10.7322 13.2324C11.2011 12.7635 11.837 12.5001 12.5 12.5001C17.5 12.5001 23.75 9.50015 28.1 5.70015C28.6296 5.24764 29.3034 4.99902 30 4.99902C30.6966 4.99902 31.3704 5.24764 31.9 5.70015C36.275 9.52515 42.5 12.5001 47.5 12.5001C48.163 12.5001 48.7989 12.7635 49.2678 13.2324C49.7366 13.7012 50 14.3371 50 15.0001V32.5001Z"
                  stroke="white"
                  strokeWidth="2.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.75 22.25C22.233 23.531 21.1462 25.2471 20.6368 27.1662C20.1274 29.0852 20.2199 31.1144 20.9019 32.9791C21.5839 34.8438 22.8223 36.454 24.4496 37.5915C26.0769 38.7291 28.0145 39.3392 30 39.3392C31.9855 39.3392 33.9231 38.7291 35.5504 37.5915C37.1777 36.454 38.4161 34.8438 39.0981 32.9791C39.7801 31.1144 39.8726 29.0852 39.3632 27.1662C38.8538 25.2471 37.767 23.531 36.25 22.25M30 19.75V29.75"
                  stroke="white"
                  strokeWidth="2.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-bold text-lg md:text-xl">
                Digital Discipline
              </span>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div className="w-full md:w-1/3 text-center md:text-left font-medium text-lg">
              systems that scale without breaking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
