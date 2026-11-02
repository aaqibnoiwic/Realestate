"use client";
import { useEffect, useRef, useState } from "react";
import { projects, photos, type Project } from "./projects";
import { Icon } from "./Icon";
export function ProjectCollection() {
  const [location, setLocation] = useState("All locations");
  const [category, setCategory] = useState("All properties");
  const [selected, setSelected] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  const filtered = projects.filter(
    (p) =>
      (location === "All locations" || p.location === location) &&
      (category === "All properties" || p.type === category),
  );
  return (
    <>
      <div className="project-filters">
        <div className="tabs" aria-label="Filter projects by location">
          {["All locations", "Noida", "Delhi", "Gurgaon", "Jaipur", "UAE"].map(
            (l) => (
              <button
                key={l}
                aria-pressed={location === l}
                onClick={() => setLocation(l)}
                className={location === l ? "active" : ""}
              >
                {l}
              </button>
            ),
          )}
        </div>
        <label className="category-select">
          <span className="sr-only">Property category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {[
              "All properties",
              "Residential",
              "Commercial",
              "Land & farms",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="project-grid">
        {filtered.map((p) => (
          <article className="project-card" key={p.id}>
            <button
              className="project-photo"
              onClick={() => {
                setSelected(p);
                setSlide(0);
              }}
              aria-label={`View ${p.name}`}
            >
              <img
                src={p.image}
                alt={`${p.type} inspiration for ${p.name}`}
                loading="lazy"
              />
              <span className="project-tag">{p.type}</span>
              <span className="photo-arrow">
                <Icon name="arrow-up" />
              </span>
            </button>
            <div className="project-meta">
              <span>
                <Icon name="location" size={14} />
                {p.location}
              </span>
              <span>ILLUSTRATIVE PROJECT</span>
            </div>
            <button
              className="project-name"
              onClick={() => {
                setSelected(p);
                setSlide(0);
              }}
            >
              {p.name}
            </button>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <p className="empty-state">
          No sample projects match this combination. Try another location or
          property type.
        </p>
      )}
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-label={selected ? `${selected.name} details` : "Project details"}
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
            >
              <Icon name="close" />
            </button>
            <img
              className="gallery-image"
              src={[selected.image, photos.interior, photos.villa][slide]}
              alt={`${selected.name}, inspiration image ${slide + 1}`}
            />
            <div className="dialog-content">
              <div className="gallery-controls" aria-label="Gallery">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    aria-label={`Show image ${i + 1}`}
                    aria-pressed={slide === i}
                    onClick={() => setSlide(i)}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <p className="eyebrow">
                {selected.location} · {selected.type} · Sample listing
              </p>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <ul>
                {selected.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="content-note">
                Concept only. Imagery is illustrative; availability, approvals
                and commercial terms are not verified.
              </p>
              <a
                className="button button-green"
                href={`#contact`}
                onClick={() => setSelected(null)}
              >
                Discuss a similar property <Icon name="arrow" />
              </a>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
