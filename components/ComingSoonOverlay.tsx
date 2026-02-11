import Logo from "../components/ui/logo";

export default function ComingSoonOverlay() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(60,0,0,0.7) 0%, rgba(0,0,0,0.85) 60%, rgba(30,0,0,0.7) 100%), url(/images/bg-comming-soon.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      {/* Logo di atas */}
      <div className="w-full flex flex-col items-center pt-12 sm:pt-20 md:pt-28 relative z-10">
        <Logo variant="dark" />
      </div>
      {/* Konten di tengah */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center px-10">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-wide drop-shadow-lg"
            style={{ letterSpacing: "0.04em" }}
          >
            WE’RE COMING SOON
          </h1>
          <p
            className="text-white/90 md:text-lg text-center mt-4 md:mt-6 font-light drop-shadow"
            style={{ maxWidth: 700 }}
          >
            Our team is putting the finishing touches on our brand-new company
            profile.
          </p>
        </div>
      </div>
    </div>
  );
}
