export default function Preloader() {
  return (
    <div
      id="arolax-preloader"
      className="wcf-preloader dhaka-preloader"
      role="status"
      aria-label="Loading Dhaka Agency"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <style>{`
        @keyframes dhakaPreloaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes dhakaPreloaderPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.95); }
        }
        @keyframes dhakaPreloaderSweep {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(210%); }
        }
        .dhaka-preloader__ring {
          animation: dhakaPreloaderSpin 0.9s cubic-bezier(0.55, 0.15, 0.45, 0.85) infinite;
        }
        .dhaka-preloader__emblem {
          animation: dhakaPreloaderPulse 1.6s ease-in-out infinite;
        }
        .dhaka-preloader__bar {
          animation: dhakaPreloaderSweep 1.1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .dhaka-preloader__ring,
          .dhaka-preloader__emblem,
          .dhaka-preloader__bar {
            animation: none;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            aria-hidden="true"
            className="dhaka-preloader__ring"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid #ececec",
              borderTopColor: "#9b1c1c",
              borderRightColor: "#9b1c1c",
            }}
          />
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="dhaka-preloader__emblem"
            style={{ width: "48px", height: "48px", display: "block" }}
          >
            <rect x="4" y="4" width="40" height="40" rx="8" fill="#121212" />
            <path
              d="M14 14H24.5C29.7467 14 34 18.2533 34 23.5V24.5C34 29.7467 29.7467 34 24.5 34H14V14Z"
              stroke="#FFFFFF"
              strokeWidth="3.2"
            />
            <path
              d="M28 14L36 14L36 22"
              stroke="#9B1C1C"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="22.5" cy="24" r="3.2" fill="#9B1C1C" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
            gap: "5px",
          }}
        >
          <span
            style={{
              fontFamily: '"Teko", "Segoe UI", Arial, sans-serif',
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#121212",
              lineHeight: 0.9,
            }}
          >
            DHAKA
          </span>
          <span
            style={{
              fontFamily: '"DM Sans", "Segoe UI", Arial, sans-serif',
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.42em",
              color: "#9b1c1c",
              paddingLeft: "0.42em",
            }}
          >
            AGENCY
          </span>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "relative",
            width: "140px",
            height: "2px",
            backgroundColor: "#ececec",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <span
            className="dhaka-preloader__bar"
            style={{
              position: "absolute",
              inset: 0,
              width: "55%",
              background: "linear-gradient(90deg, transparent 0%, #9b1c1c 50%, #121212 100%)",
              borderRadius: "999px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
