import React, { useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

const WIDTH = 960;
const PAD = 6;

const WorldMap = ({ countries }) => {
  const [active, setActive] = useState(null);

  const { shapes, dots, viewBox } = useMemo(() => {
    const land = feature(world, world.objects.countries).features.filter(
      (f) => f.id !== "010" // Antarctica
    );
    const collection = { type: "FeatureCollection", features: land };
    const projection = geoEqualEarth().fitWidth(WIDTH, collection);
    const path = geoPath(projection);
    // Crop the frame to the land itself so there's no empty band below.
    const [[x0, y0], [x1, y1]] = path.bounds(collection);
    const visited = new Set(countries.map((c) => c.id));
    return {
      viewBox: `${x0 - PAD} ${y0 - PAD} ${x1 - x0 + PAD * 2} ${y1 - y0 + PAD * 2}`,
      shapes: land.map((f) => ({ id: f.id, d: path(f), visited: visited.has(f.id) })),
      // A dot per visited country so small ones (UAE, Ireland) stay visible.
      dots: countries.map((c) => {
        const f = land.find((x) => x.id === c.id);
        const [x, y] = c.at ? projection(c.at) : path.centroid(f);
        return { ...c, x, y };
      }),
    };
  }, [countries]);

  const activeName = countries.find((c) => c.id === active)?.name;

  return (
    <div>
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        role="img"
        aria-label={`World map highlighting ${countries.map((c) => c.name).join(", ")}`}
        onPointerLeave={() => setActive(null)}
      >
        {shapes.map((s) => (
          <path
            key={s.id}
            d={s.d}
            onPointerEnter={() => setActive(s.visited ? s.id : null)}
            className={`transition-[fill] duration-300 stroke-[#faf7f5] [stroke-width:0.6] ${
              s.visited
                ? s.id === active
                  ? "fill-[#161616]"
                  : active
                  ? "fill-[#252525]/45"
                  : "fill-[#252525]/80"
                : "fill-[#252525]/[0.09]"
            }`}
          />
        ))}
        {dots.map((d) => (
          <g
            key={d.id}
            transform={`translate(${d.x} ${d.y})`}
            onPointerEnter={() => setActive(d.id)}
            className="cursor-default"
          >
            <circle r="11" className="fill-transparent" />
            <circle
              r="7"
              className={`map-ping fill-none stroke-[#252525] [stroke-width:1] ${
                d.id === active ? "opacity-100" : "opacity-0"
              }`}
            />
            <circle
              r="3"
              className={`transition-[fill] duration-300 stroke-[#faf7f5] [stroke-width:1.2] ${
                d.id === active ? "fill-[#161616]" : "fill-[#252525]"
              }`}
            />
          </g>
        ))}
      </svg>

      <p className="mt-3 min-h-[1.5em] text-[#161616]">{activeName || " "}</p>

      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
        {countries.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              onPointerEnter={() => setActive(c.id)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive(null)}
              className={`transition-colors duration-200 ${
                c.id === active ? "text-[#161616]" : ""
              }`}
            >
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldMap;
