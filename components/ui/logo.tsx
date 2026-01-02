interface LogoProps {
    variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
    const textColor = variant === "dark" ? "text-white" : "text-black";
    const textOpacity = variant === "dark" ? "text-white/90" : "text-gray-500";
    const pathFill = variant === "dark" ? "white" : "#121212";

    return (
        <div className="flex items-center gap-3">
            <svg width="46" height="48" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79875 48C18.6003 37.0329 24.1301 21.2814 28.4641 6.24863L25.4957 0C18.2186 19.3569 5.42678 37.1369 0 43.5285L3.79875 48Z" fill="#FF3541" />
                <path d="M45.046 44.6201H12.4003L20.5755 38.6744H35.4947L26.2689 19.9202L29.6797 13.4056L45.046 44.6201Z" fill={pathFill} />
            </svg>
            <div className="flex flex-col justify-center">
                <p className={`text-2xl font-bold ${textColor} leading-none tracking-wide`}>ARK Trinity</p>
                <p className={`text-[10px] ${textOpacity} tracking-[0.2em] font-(family-name:--font-montserrat)`}>
                    CAPITAL • AI • DIGITAL
                </p>
            </div>
        </div>
    );
}