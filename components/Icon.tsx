type IconName =
  | "arrow"
  | "arrow-up"
  | "check"
  | "chevron"
  | "close"
  | "instagram"
  | "location"
  | "menu"
  | "phone"
  | "play"
  | "whatsapp"
  | "youtube";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...shared}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg {...shared}>
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...shared}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    case "close":
      return (
        <svg {...shared}>
          <path d="m18 6-12 12M6 6l12 12" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...shared}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "location":
      return (
        <svg {...shared}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "menu":
      return (
        <svg {...shared}>
          <path d="M4 8h16M4 16h16" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10.3a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "play":
      return (
        <svg {...shared} fill="currentColor" stroke="none">
          <path d="m8 5 11 7-11 7z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...shared}>
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="M8.2 8.3c.4-.7.8-.7 1.2-.7l.8 1.7c.1.3.1.5-.1.7l-.6.7a6.7 6.7 0 0 0 2.9 2.9l.7-.6c.2-.2.5-.2.7-.1l1.7.8c0 .4 0 .8-.7 1.2-.6.4-1.5.5-2.6.1a9.1 9.1 0 0 1-4.1-4.1c-.4-1.1-.3-2 .1-2.6Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...shared}>
          <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.5a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8c1.6.5 7.8.5 7.8.5s6.2 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12Z" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
  }
}
