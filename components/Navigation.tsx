"use client";
import { useState } from "react";
import { Icon } from "./Icon";
export function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Verdant Estates home">
      <span className="brand-mark">
        V<span>∧</span>
      </span>
      <span>
        VERDANT<span className="brand-sub">E S T A T E S</span>
      </span>
    </a>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {[
            ["Our story", "about"],
            ["Our expertise", "expertise"],
            ["Projects", "projects"],
            ["Our founders", "founders"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="button button-gold nav-cta"
            onClick={() => setOpen(false)}
          >
            Book a visit <Icon name="arrow-up" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
