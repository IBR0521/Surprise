import {
  StrictMode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { content } from "./content.js";
import "./styles.css";
const SEAL_HEART_PATH =
  "M100 134C72 114 61 99 61 84 61 72 70 63 81 63 90 63 96 68 100 76 104 68 110 63 119 63 130 63 139 72 139 84 139 99 128 114 100 134Z";
function WaxSeal({ className: e }) {
  let t = useId().replace(/[^a-zA-Z0-9_-]/g, ""),
    n = (e) => `${t}-${e}`,
    r = (e) => `url(#${t}-${e})`;
  return (
    <svg viewBox="0 0 200 200" className={e} aria-hidden="true">
      <defs>
        <radialGradient
          id={n("wax")}
          gradientUnits="userSpaceOnUse"
          cx="78"
          cy="62"
          r="150"
        >
          <stop offset="0" stopColor="#e4525c" />
          <stop offset=".25" stopColor="#c3222f" />
          <stop offset=".6" stopColor="#950f1d" />
          <stop offset="1" stopColor="#58050f" />
        </radialGradient>
        <radialGradient
          id={n("pressed")}
          gradientUnits="userSpaceOnUse"
          cx="118"
          cy="122"
          r="80"
        >
          <stop offset="0" stopColor="#b51d2a" />
          <stop offset=".65" stopColor="#920f1c" />
          <stop offset="1" stopColor="#6a0913" />
        </radialGradient>
        <linearGradient id={n("heart")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9404b" />
          <stop offset=".55" stopColor="#b3192a" />
          <stop offset="1" stopColor="#860c18" />
        </linearGradient>
        <filter id={n("blob")} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            seed="11"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id={n("gloss")} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="b" />
          <feSpecularLighting
            in="b"
            surfaceScale="7"
            specularConstant=".9"
            specularExponent="16"
            lightingColor="#ffe6e6"
            result="s"
          >
            <fePointLight x="40" y="20" z="170" />
          </feSpecularLighting>
          <feComposite in="s" in2="SourceAlpha" operator="in" result="s2" />
          <feComposite
            in="SourceGraphic"
            in2="s2"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3=".5"
            k4="0"
          />
        </filter>
        <filter id={n("soft")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
        <filter id={n("shadow")} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <clipPath id={n("in")}>
          <circle cx="100" cy="100" r="60" />
        </clipPath>
      </defs>
      <ellipse
        cx="104"
        cy="110"
        rx="82"
        ry="80"
        fill="#2a0206"
        opacity=".45"
        filter={r("shadow")}
      />
      <g filter={r("gloss")}>
        <g filter={r("blob")} fill={r("wax")}>
          <circle cx="100" cy="100" r="80" />
          <circle cx="158" cy="146" r="17" />
          <circle cx="40" cy="150" r="13" />
          <circle cx="152" cy="42" r="11" />
          <circle cx="30" cy="70" r="9" />
        </g>
      </g>
      <circle
        cx="100"
        cy="100"
        r="61"
        fill="#6c0913"
        opacity=".5"
        filter={r("soft")}
      />
      <circle cx="100" cy="100" r="60" fill={r("pressed")} />
      <g clipPath={r("in")}>
        <circle
          cx="105"
          cy="105"
          r="63"
          fill="none"
          stroke="#360208"
          strokeOpacity=".7"
          strokeWidth="9"
          filter={r("soft")}
        />
        <circle
          cx="95"
          cy="95"
          r="63"
          fill="none"
          stroke="#ff9a9a"
          strokeOpacity=".35"
          strokeWidth="7"
          filter={r("soft")}
        />
      </g>
      <circle
        cx="100"
        cy="100"
        r="62.5"
        fill="none"
        stroke="#ff8f8f"
        strokeOpacity=".22"
        strokeWidth="1.5"
      />
      <circle
        cx="101"
        cy="101.2"
        r="50"
        fill="none"
        stroke="#3d0309"
        strokeOpacity=".55"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeDasharray="0.1 8.627"
      />
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="#e4636b"
        strokeOpacity=".9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.1 8.627"
      />
      <path
        d={SEAL_HEART_PATH}
        transform="translate(2.4 3)"
        fill="#34020a"
        opacity=".6"
        filter={r("soft")}
      />
      <path
        d={SEAL_HEART_PATH}
        transform="translate(-1.4 -1.6)"
        fill="#ffb0b0"
        opacity=".5"
        filter={r("soft")}
      />
      <path d={SEAL_HEART_PATH} fill={r("heart")} />
      <path
        d="M72 80C73 72 79 67 86 68"
        fill="none"
        stroke="#ffc9c9"
        strokeOpacity=".55"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="64"
        cy="52"
        rx="15"
        ry="6"
        transform="rotate(-38 64 52)"
        fill="#fff"
        opacity=".35"
        filter={r("soft")}
      />
    </svg>
  );
}
const HEART_PATH =
  "M12 21.3C5.4 16.5 2 13 2 8.9 2 5.9 4.4 3.5 7.4 3.5c1.9 0 3.6 1 4.6 2.5 1-1.5 2.7-2.5 4.6-2.5 3 0 5.4 2.4 5.4 5.4 0 4.1-3.4 7.6-10 12.4Z";
const SPARKLE_PATH =
  "M12 0C13 7 17 11 24 12 17 13 13 17 12 24 11 17 7 13 0 12 7 11 11 7 12 0Z";
const HEART_COLORS = [
  "#ff4d6d",
  "#ff8fa3",
  "#ffb3c1",
  "#e5383b",
  "#c9184a",
  "#ffd6e0",
];
const SPARKLE_COLORS = ["#f7d488", "#ffe8b0", "#fff4d6"];
let fxLayer = null;
function getFxLayer() {
  return (
    (!fxLayer || !fxLayer.isConnected) &&
      ((fxLayer = document.createElement("div")),
      (fxLayer.className = "ll-fx"),
      document.body.appendChild(fxLayer)),
    fxLayer
  );
}
const rand = (e, t) => e + Math.random() * (t - e);
const pick = (e) => e[Math.floor(Math.random() * e.length)];
function spawnParticle(e, t, n, r) {
  let i = document.createElement("div");
  i.className = "ll-fx-p";
  let a = pick(r ? SPARKLE_COLORS : HEART_COLORS);
  return (
    (i.innerHTML = `<svg viewBox="0 0 24 24" width="${n}" height="${n}"><path d="${r ? SPARKLE_PATH : HEART_PATH}" fill="${a}"/></svg>`),
    (i.style.left = `${e}px`),
    (i.style.top = `${t}px`),
    getFxLayer().appendChild(i),
    i
  );
}
function burst(e, t, n = {}) {
  let {
    count: r = 14,
    spread: i = 120,
    size: a = 22,
    up: o = 40,
    sparkles: s = 0.3,
  } = n;
  for (let n = 0; n < r; n++) {
    let n = Math.random() < s,
      r = spawnParticle(e, t, a * rand(0.55, 1.25) * (n ? 0.7 : 1), n),
      c = rand(0, Math.PI * 2),
      l = i * rand(0.45, 1.1),
      u = Math.cos(c) * l,
      d = Math.sin(c) * l * 0.8 - o,
      f = rand(-70, 70),
      p = r.animate(
        [
          {
            transform: "translate(-50%,-50%) scale(.2)",
            opacity: 1,
          },
          {
            transform: `translate(calc(-50% + ${u * 0.75}px), calc(-50% + ${d * 0.75}px)) scale(1) rotate(${f * 0.6}deg)`,
            opacity: 1,
            offset: 0.5,
          },
          {
            transform: `translate(calc(-50% + ${u}px), calc(-50% + ${d + 50}px)) scale(.7) rotate(${f}deg)`,
            opacity: 0,
          },
        ],
        {
          duration: rand(1000, 1700),
          easing: "cubic-bezier(.15,.75,.35,1)",
        },
      );
    p.onfinish = () => r.remove();
  }
}
function floatHearts(e, t, n = 3, r = 16) {
  for (let i = 0; i < n; i++) {
    let n = spawnParticle(e + rand(-14, 14), t, r * rand(0.7, 1.2), false),
      a = rand(-30, 30),
      o = n.animate(
        [
          {
            transform: "translate(-50%,-50%) scale(.3)",
            opacity: 0,
          },
          {
            transform: `translate(calc(-50% + ${a * 0.3}px), calc(-50% - 20px)) scale(1)`,
            opacity: 1,
            offset: 0.25,
          },
          {
            transform: `translate(calc(-50% + ${a}px), calc(-50% - 90px)) scale(.9)`,
            opacity: 0,
          },
        ],
        {
          duration: rand(1400, 2000),
          delay: i * 160,
          easing: "ease-out",
          fill: "backwards",
        },
      );
    o.onfinish = () => n.remove();
  }
}
function heartRain(e = 3500, t = 18) {
  let n = Math.round((e / 1000) * t);
  for (let t = 0; t < n; t++)
    window.setTimeout(
      () => {
        let e = window.innerWidth,
          t = window.innerHeight,
          n = Math.random() < 0.25,
          r = spawnParticle(rand(0, e), -30, rand(14, 30) * (n ? 0.7 : 1), n),
          i = rand(-80, 80),
          a = r.animate(
            [
              {
                transform: "translate(-50%,-50%) rotate(0deg)",
                opacity: 0,
              },
              {
                opacity: 1,
                offset: 0.1,
              },
              {
                transform: `translate(calc(-50% + ${i}px), ${t + 60}px) rotate(${rand(-220, 220)}deg)`,
                opacity: 0.9,
              },
            ],
            {
              duration: rand(2800, 4600),
              easing: "cubic-bezier(.3,.1,.6,1)",
            },
          );
        a.onfinish = () => r.remove();
      },
      rand(0, e),
    );
}
function crumbs(e, t, n = 8) {
  for (let r = 0; r < n; r++) {
    let n = document.createElement("div");
    n.className = "ll-fx-crumb";
    n.style.left = `${e + rand(-10, 10)}px`;
    n.style.top = `${t + rand(-6, 6)}px`;
    getFxLayer().appendChild(n);
    let r = rand(-40, 40),
      i = n.animate(
        [
          {
            transform: "translate(-50%,-50%) scale(1)",
            opacity: 1,
          },
          {
            transform: `translate(calc(-50% + ${r}px), calc(-50% + ${rand(50, 110)}px)) rotate(${rand(-200, 200)}deg) scale(.6)`,
            opacity: 0,
          },
        ],
        {
          duration: rand(600, 1000),
          easing: "cubic-bezier(.5,0,1,1)",
        },
      );
    i.onfinish = () => n.remove();
  }
}
function twinkle(e, t) {
  let n = spawnParticle(e + rand(-4, 4), t + rand(-3, 3), rand(5, 9), true),
    r = n.animate(
      [
        {
          transform: "translate(-50%,-50%) scale(.4) rotate(0deg)",
          opacity: 0,
        },
        {
          transform: "translate(-50%,-50%) scale(1) rotate(45deg)",
          opacity: 0.9,
          offset: 0.25,
        },
        {
          transform: `translate(calc(-50% + ${rand(-8, 8)}px), calc(-50% + ${rand(14, 26)}px)) scale(.3) rotate(120deg)`,
          opacity: 0,
        },
      ],
      {
        duration: rand(700, 1100),
        easing: "ease-out",
      },
    );
  r.onfinish = () => n.remove();
}
const sleep = (e) => new Promise((t) => setTimeout(t, e));
const useSvgId = () => useId().replace(/[^a-zA-Z0-9_-]/g, "");
const FLAP_LEFT_PATH = "M0 0L284 213Q298 225 284 238L0 400Z";
const FLAP_RIGHT_PATH = "M600 0L316 213Q302 225 316 238L600 400Z";
const FLAP_BOTTOM_PATH = "M0 400L281 207Q300 194 319 207L600 400Z";
const FLAP_TOP_PATH = "M0 0H600L321 239Q300 256 279 239Z";
const SMALL_HEART_PATH =
  "M0 3C0-1-5-1.5-5 2.5-5 5.5-1.5 7.5 0 9.5 1.5 7.5 5 5.5 5 2.5 5-1.5 0-1 0 3Z";
function PaperTexture({ id: e, strength: t = 0.22 }) {
  let n = t;
  return (
    <filter id={e} x="0" y="0" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".85"
        numOctaves="3"
        seed="5"
        result="t"
      />
      <feColorMatrix
        in="t"
        type="matrix"
        values={`0 0 0 0 .40  0 0 0 0 .30  0 0 0 0 .20  ${n} ${n} ${n} 0 ${-(n * 1.12).toFixed(3)}`}
        result="g"
      />
      <feComposite in="g" in2="SourceGraphic" operator="in" result="gi" />
      <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="gi" />
      </feMerge>
    </filter>
  );
}
function LinerPattern({ id: e }) {
  return (
    <pattern
      id={e}
      width="38"
      height="38"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(-8)"
    >
      <rect width="38" height="38" fill="#7c1b2c" />
      <path
        d={SMALL_HEART_PATH}
        transform="translate(9.5 6) scale(1.05)"
        fill="#d8b36c"
        opacity=".7"
      />
      <path
        d={SMALL_HEART_PATH}
        transform="translate(28.5 25) scale(1.05)"
        fill="#d8b36c"
        opacity=".7"
      />
      <circle cx="28.5" cy="9.5" r="1" fill="#e9c98a" opacity=".55" />
      <circle cx="9.5" cy="28.5" r="1" fill="#e9c98a" opacity=".55" />
    </pattern>
  );
}
function EnvelopeBack() {
  let e = useSvgId();
  return (
    <svg
      className="ll-env-back"
      viewBox="0 0 600 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <LinerPattern id={`${e}-liner`} />
        <linearGradient id={`${e}-depth`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a0206" stopOpacity=".55" />
          <stop offset=".3" stopColor="#1a0206" stopOpacity=".18" />
          <stop offset=".7" stopColor="#1a0206" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" rx="4" fill="#e6d7bd" />
      <rect x="16" y="0" width="568" height="300" fill={`url(#${e}-liner)`} />
      <rect width="600" height="400" rx="4" fill={`url(#${e}-depth)`} />
    </svg>
  );
}
function EnvelopePocket() {
  let e = useSvgId();
  return (
    <svg
      className="ll-pocket"
      viewBox="0 0 600 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${e}-l`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f9f2e6" />
          <stop offset="1" stopColor="#eee2cd" />
        </linearGradient>
        <linearGradient id={`${e}-r`} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#f0e5d1" />
          <stop offset="1" stopColor="#e4d4ba" />
        </linearGradient>
        <linearGradient id={`${e}-b`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ebdec6" />
          <stop offset="1" stopColor="#f8f0e3" />
        </linearGradient>
        <PaperTexture id={`${e}-tex`} />
        <filter id={`${e}-up`} x="-5%" y="-30%" width="110%" height="140%">
          <feDropShadow
            dx="0"
            dy="-1.5"
            stdDeviation="3.5"
            floodColor="#4a2c10"
            floodOpacity=".24"
          />
        </filter>
        <filter id={`${e}-side`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="2.5"
            floodColor="#4a2c10"
            floodOpacity=".16"
          />
        </filter>
      </defs>
      <g filter={`url(#${e}-tex)`}>
        <path
          d={FLAP_LEFT_PATH}
          fill={`url(#${e}-l)`}
          filter={`url(#${e}-side)`}
        />
        <path
          d={FLAP_RIGHT_PATH}
          fill={`url(#${e}-r)`}
          filter={`url(#${e}-side)`}
        />
        <path
          d={FLAP_BOTTOM_PATH}
          fill={`url(#${e}-b)`}
          filter={`url(#${e}-up)`}
        />
      </g>
      <path
        d="M0 400L281 207Q300 194 319 207L600 400"
        fill="none"
        stroke="#fffaf1"
        strokeOpacity=".9"
        strokeWidth="1.3"
      />
      <path
        d="M0 0L284 213"
        fill="none"
        stroke="#fffaf1"
        strokeOpacity=".7"
        strokeWidth="1.1"
      />
      <path
        d="M600 0L316 213"
        fill="none"
        stroke="#fffaf1"
        strokeOpacity=".5"
        strokeWidth="1.1"
      />
    </svg>
  );
}
function EnvelopeFlap({ open: e, behind: t }) {
  let n = useSvgId();
  return (
    <div
      className={`ll-flap${e ? " is-open" : ""}${t ? " is-behind" : ""}`}
      aria-hidden="true"
    >
      <div className="ll-flap-face ll-flap-front">
        <svg viewBox="0 0 600 400" preserveAspectRatio="none">
          <defs>
            <linearGradient
              id={`${n}-t`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1 256)"
            >
              <stop offset="0" stopColor="#e8d9bf" />
              <stop offset=".18" stopColor="#f3e9d8" />
              <stop offset=".8" stopColor="#faf3e7" />
              <stop offset="1" stopColor="#f1e6d3" />
            </linearGradient>
            <PaperTexture id={`${n}-tex`} />
          </defs>
          <path
            d={FLAP_TOP_PATH}
            fill={`url(#${n}-t)`}
            filter={`url(#${n}-tex)`}
          />
          <path
            d="M0 0L279 239Q300 256 321 239L600 0"
            fill="none"
            stroke="#fffbf3"
            strokeOpacity=".95"
            strokeWidth="1.4"
          />
          <path
            d="M0 2H600"
            stroke="#9a7f58"
            strokeOpacity=".22"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <div className="ll-flap-face ll-flap-back">
        <svg viewBox="0 0 600 400" preserveAspectRatio="none">
          <defs>
            <LinerPattern id={`${n}-liner`} />
            <linearGradient
              id={`${n}-shade`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1 256)"
            >
              <stop offset="0" stopColor="#000" stopOpacity=".3" />
              <stop offset=".5" stopColor="#000" stopOpacity=".05" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={FLAP_TOP_PATH} fill="#efe4d0" />
          <path
            d={FLAP_TOP_PATH}
            fill={`url(#${n}-liner)`}
            transform="translate(300 0) scale(.9) translate(-300 0)"
          />
          <path d={FLAP_TOP_PATH} fill={`url(#${n}-shade)`} />
        </svg>
      </div>
    </div>
  );
}
const BOKEH = [
  {
    x: 8,
    y: 18,
    s: 120,
    c: "#ffcf9e",
    o: 0.18,
    d: 19,
  },
  {
    x: 86,
    y: 12,
    s: 90,
    c: "#ff9fb2",
    o: 0.2,
    d: 23,
  },
  {
    x: 72,
    y: 78,
    s: 160,
    c: "#ffcf9e",
    o: 0.12,
    d: 27,
  },
  {
    x: 18,
    y: 82,
    s: 70,
    c: "#ffd6e0",
    o: 0.22,
    d: 17,
  },
  {
    x: 50,
    y: 6,
    s: 50,
    c: "#fff1d6",
    o: 0.25,
    d: 21,
  },
  {
    x: 94,
    y: 52,
    s: 60,
    c: "#ffb3c1",
    o: 0.2,
    d: 25,
  },
  {
    x: 4,
    y: 50,
    s: 40,
    c: "#fff1d6",
    o: 0.28,
    d: 15,
  },
  {
    x: 36,
    y: 92,
    s: 100,
    c: "#ff8fa3",
    o: 0.12,
    d: 29,
  },
  {
    x: 62,
    y: 30,
    s: 34,
    c: "#fff1d6",
    o: 0.3,
    d: 18,
  },
  {
    x: 28,
    y: 34,
    s: 26,
    c: "#ffe0b8",
    o: 0.32,
    d: 16,
  },
  {
    x: 80,
    y: 94,
    s: 44,
    c: "#fff1d6",
    o: 0.22,
    d: 22,
  },
  {
    x: 58,
    y: 64,
    s: 22,
    c: "#ffe0b8",
    o: 0.3,
    d: 14,
  },
];
function Envelope({ onOpenStart: e, onLetterOut: t, leaving: n }) {
  let [r, i] = useState("idle"),
    [a, o] = useState(false),
    s = useRef(null),
    c = useRef(null),
    u = useRef(false),
    d = useRef(true);
  useEffect(
    () => (
      (d.current = true),
      () => {
        d.current = false;
      }
    ),
    [],
  );
  let p = async () => {
      if (u.current) return;
      u.current = true;
      e?.();
      let n = c.current?.getBoundingClientRect();
      i("press");
      await sleep(170);
      i("crack");
      await sleep(560);
      n &&
        burst(n.left + n.width / 2, n.top + n.height / 2, {
          count: 20,
          spread: 170,
          sparkles: 0.45,
        });
      i("fall");
      await sleep(380);
      i("open");
      await sleep(525);
      o(true);
      await sleep(560);
      i("out");
      await sleep(1550);
      d.current && s.current && t(s.current.getBoundingClientRect());
    },
    g = (...e) => e.includes(r),
    _ = [
      "ll-env-wrap",
      g("press") && "is-pressed",
      g("crack", "fall", "open", "out") && "is-cracked",
      g("fall", "open", "out") && "is-fallen",
      g("open", "out") && "is-open",
      g("out") && "is-out",
    ]
      .filter(Boolean)
      .join(" ");
  return (
    <div className={`ll-env-scene${n ? " is-leaving" : ""}`}>
      <div className="ll-ambient" />
      <div className="ll-bokeh" aria-hidden="true">
        {BOKEH.map((e, t) => (
          <span
            key={t}
            style={{
              left: `${e.x}%`,
              top: `${e.y}%`,
              width: e.s,
              height: e.s,
              background: e.c,
              opacity: e.o,
              animationDuration: `${e.d}s`,
              animationDelay: `${-t * 1.7}s`,
            }}
          />
        ))}
      </div>
      <div className={_}>
        <div className="ll-env-tilt">
          <div className="ll-env-floor" />
          <div className="ll-env-float">
            <div className="ll-env">
              <EnvelopeBack />
              <div className="ll-letter" ref={s}>
                <div className="ll-letter-text">
                  {content.letterLine}
                  <svg
                    viewBox="-6 -2 12 12"
                    className="ll-letter-heart"
                    aria-hidden="true"
                  >
                    <path d={SMALL_HEART_PATH} />
                  </svg>
                </div>
              </div>
              <EnvelopePocket />
              <EnvelopeFlap open={g("open", "out")} behind={a} />
              <button
                ref={c}
                className="ll-seal"
                onClick={p}
                aria-label="Break the seal and open the letter"
              >
                <span className="ll-seal-pulse" />
                <WaxSeal className="ll-seal-svg ll-seal-whole" />
                <WaxSeal className="ll-seal-svg ll-seal-half ll-seal-left" />
                <WaxSeal className="ll-seal-svg ll-seal-half ll-seal-right" />
                <svg
                  className="ll-seal-crack"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path d="M94 -2L104 28 92 56 108 86 96 116 110 148 98 176 106 204" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className={`ll-hint${r === "idle" ? "" : " is-hidden"}`}>
        {content.envelopeHint} <span>♡</span>
      </p>
      <div className="ll-grain" />
    </div>
  );
}
const HEART_ICON_PATH =
  "M12 21.3C5.4 16.5 2 13 2 8.9 2 5.9 4.4 3.5 7.4 3.5c1.9 0 3.6 1 4.6 2.5 1-1.5 2.7-2.5 4.6-2.5 3 0 5.4 2.4 5.4 5.4 0 4.1-3.4 7.6-10 12.4Z";
const BITE_SPOTS = [
  {
    x: "100% - 26px",
    y: "0px",
    dir: 1,
    fx: 1,
    fy: 0,
  },
  {
    x: "30px",
    y: "100%",
    dir: -1,
    fx: 0,
    fy: 1,
  },
  {
    x: "48%",
    y: "0px",
    dir: 1,
    fx: 0.48,
    fy: 0,
  },
];
function biteMask(e) {
  if (!e) return;
  let t = [];
  for (let n of BITE_SPOTS.slice(0, e))
    for (let [e, r, i] of [
      [-12, 2, 9.5],
      [0, 5, 10.5],
      [12, 2, 9.5],
    ])
      t.push(
        `radial-gradient(circle at calc(${n.x} + ${e}px) calc(${n.y} + ${r * n.dir}px), transparent ${i}px, #000 ${i + 0.7}px)`,
      );
  let n = t.join(", ");
  return {
    WebkitMaskImage: n,
    maskImage: n,
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };
}
const randBetween = (e, t) => e + Math.random() * (t - e);
const clamp = (e, t, n) => Math.max(t, Math.min(n, e));
function overlaps(e, t, n, r, i, a) {
  return i
    ? e < i.right + a &&
        e + n > i.left - a &&
        t < i.bottom + a &&
        t + r > i.top - a
    : false;
}
function Heart({ className: e }) {
  return (
    <svg viewBox="0 0 24 24" className={e} aria-hidden="true">
      <path d={HEART_ICON_PATH} />
    </svg>
  );
}
function Questions({ cat: e, onDone: t }) {
  let [n, r] = useState(-1),
    [i, a] = useState(0),
    [o, s] = useState(null),
    [c, u] = useState(""),
    [d, p] = useState(0),
    [m, g] = useState(0),
    [_, v] = useState(false),
    [y, b] = useState(false),
    ee = useRef(null),
    [x, te] = useState(null),
    ne = useRef(null),
    re = useRef(null),
    C = useRef(null),
    ae = useRef(null),
    w = useRef(null),
    oe = useRef(0),
    se = useRef(0),
    ce = useRef(false),
    le = useRef(0),
    T = useRef(false),
    ue = useRef([]),
    de = (e, t) => {
      ue.current.push(window.setTimeout(e, t));
    };
  useEffect(() => () => ue.current.forEach((e) => window.clearTimeout(e)), []);
  let fe = n >= 0 ? content.questions[n] : null;
  useEffect(() => {
    te(ee.current?.parentElement ?? document.body);
  }, []);
  useEffect(() => {
    e.setScene({
      mode: n < 0 ? "intro" : "question",
      content: () => ne.current,
      title: () => re.current,
      yes: () => (T.current ? null : C.current),
      no: () => (T.current ? null : w.current),
    });
  }, [e, n]);
  let pe = useCallback((e, t) => {
      let n = w.current;
      if (!n) return;
      let r = n.getBoundingClientRect(),
        i = window.innerWidth,
        a = window.innerHeight,
        o = r.width,
        c = r.height,
        l = ae.current?.getBoundingClientRect(),
        d = re.current?.getBoundingClientRect(),
        f = {
          x: r.left,
          y: r.top,
        },
        p = -1 / 0;
      for (let n = 0; n < 48; n++) {
        let n, s;
        if (t) {
          n = randBetween(14, i - o - 14);
          s = randBetween(34, a - c - 14);
        } else {
          let e = randBetween(0, Math.PI * 2),
            t = randBetween(95, 175);
          n = r.left + Math.cos(e) * t;
          s = r.top + Math.sin(e) * t;
        }
        n = clamp(n, 14, i - o - 14);
        s = clamp(s, 34, a - c - 14);
        let u = n + o / 2,
          m = s + c / 2,
          h = Math.hypot(n - r.left, s - r.top),
          g =
            Math.min(Math.hypot(u - e.x, m - e.y), t ? 700 : 320) +
            randBetween(0, 40);
        overlaps(n, s, o, c, l, 18) && (g -= 2000);
        overlaps(n, s, o, c, d, 6) && (g -= 600);
        h < 70 && (g -= 800);
        !t && h > 230 && (g -= 200);
        g > p &&
          ((p = g),
          (f = {
            x: n,
            y: s,
          }));
      }
      let m = t ? "flee" : "hop";
      ce.current
        ? (u(m), s(f))
        : ((ce.current = true),
          u(""),
          s({
            x: r.left,
            y: r.top,
          }),
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              u(m);
              s(f);
            }),
          ));
    }, []),
    me = useCallback(
      (t) => {
        if (T.current) return;
        let n = performance.now();
        if (n - le.current < 380) return;
        le.current = n;
        pe(t, false);
        let r = ++oe.current;
        a(r);
        e.noAttempt(r);
      },
      [e, pe],
    );
  useLayoutEffect(() => {
    let e = w.current;
    if (!o || !e || !ce.current) return;
    let t = e.offsetWidth,
      n = e.offsetHeight,
      r = clamp(o.x, 12, window.innerWidth - t - 12),
      i = clamp(o.y, 32, window.innerHeight - n - 12),
      a = ae.current?.getBoundingClientRect();
    overlaps(r, i, t, n, a, 12) &&
      a &&
      (i = clamp(a.bottom + 22, 32, window.innerHeight - n - 12));
    (Math.abs(r - o.x) > 0.5 || Math.abs(i - o.y) > 0.5) &&
      s({
        x: r,
        y: i,
      });
  }, [o, i]);
  useEffect(
    () => (
      (e.onPoke = () => {
        C.current?.animate(
          [
            {
              transform: "translate(0,0) rotate(0)",
            },
            {
              transform: "translate(3px,-2px) rotate(3deg)",
            },
            {
              transform: "translate(-2px,1px) rotate(-2deg)",
            },
            {
              transform: "translate(0,0) rotate(0)",
            },
          ],
          {
            duration: 320,
            easing: "ease-out",
          },
        );
      }),
      (e.onBite = (e, t) => {
        if (e === "bite") {
          let e = Math.min(se.current, BITE_SPOTS.length - 1);
          se.current = Math.min(se.current + 1, BITE_SPOTS.length);
          p(se.current);
          g((e) => e + 1);
          let t = w.current?.getBoundingClientRect(),
            n = BITE_SPOTS[e];
          t &&
            crumbs(
              n.fx === 1 ? t.right - 26 : t.left + (n.fx ? t.width * n.fx : 30),
              t.top + t.height * n.fy,
              12,
            );
        } else pe(t, true);
      }),
      () => {
        e.onPoke = undefined;
        e.onBite = undefined;
      }
    ),
    [e, pe],
  );
  useEffect(() => {
    if (n < 0) return;
    let e = (e) => {
      if (e.pointerType !== "mouse") return;
      let t = w.current;
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = Math.max(n.left - e.clientX, 0, e.clientX - n.right),
        i = Math.max(n.top - e.clientY, 0, e.clientY - n.bottom);
      Math.hypot(r, i) < 26 &&
        me({
          x: e.clientX,
          y: e.clientY,
        });
    };
    return (
      window.addEventListener("pointermove", e),
      () => window.removeEventListener("pointermove", e)
    );
  }, [n, me]);
  let he = useCallback((e) => {
      e.cancelable && e.preventDefault();
    }, []),
    ge = useCallback(
      (e) => {
        w.current !== e &&
          (w.current?.removeEventListener("touchstart", he),
          (w.current = e),
          e?.addEventListener("touchstart", he, {
            passive: false,
          }));
      },
      [he],
    ),
    _e = {
      onPointerDown: (e) => {
        e.preventDefault();
        me({
          x: e.clientX,
          y: e.clientY,
        });
      },
      onClick: (e) => {
        e.preventDefault();
        let t = e.currentTarget.getBoundingClientRect();
        me({
          x: t.left + t.width / 2,
          y: t.top + t.height / 2,
        });
      },
      onContextMenu: (e) => e.preventDefault(),
    },
    ye = () => {
      let e = n + 1 >= content.questions.length;
      b(true);
      de(() => {
        if (e) return t();
        oe.current = 0;
        se.current = 0;
        ce.current = false;
        T.current = false;
        a(0);
        s(null);
        u("");
        p(0);
        v(false);
        b(false);
        r((e) => e + 1);
      }, 450);
    },
    D = () => {
      if (T.current) return;
      let t = C.current?.getBoundingClientRect();
      if (
        (t &&
          burst(t.left + t.width / 2, t.top + t.height / 2, {
            count: 24,
            spread: 190,
            sparkles: 0.35,
          }),
        n < 0)
      ) {
        ye();
        return;
      }
      T.current = true;
      v(true);
      e.celebrate();
      de(ye, 2100);
    },
    Te = 1 + Math.min(i, 7) * 0.085,
    Ee = content.noTexts[Math.min(i, content.noTexts.length - 1)],
    O = ["ll-no-float", c && `is-${c}`, _ && "is-gone"]
      .filter(Boolean)
      .join(" ");
  return (
    <div className="ll-stage" ref={ee}>
      <div key={n} className={`ll-q${y ? " is-leaving" : ""}`} ref={ne}>
        {fe ? (
          <>
            <div
              className="ll-progress"
              aria-label={`Question ${n + 1} of ${content.questions.length}`}
            >
              {content.questions.map((e, t) => (
                <Heart
                  key={t}
                  className={t < n || (t === n && _) ? "is-on" : ""}
                />
              ))}
            </div>
            <h1 className="ll-q-title" ref={re}>
              {fe.q}
            </h1>
            <div className="ll-actions-area">
              <div className={`ll-actions${_ ? " is-hidden" : ""}`}>
                <span
                  className="ll-yes-wrap"
                  ref={ae}
                  style={{
                    transform: `scale(${Te})`,
                  }}
                >
                  <button ref={C} className="ll-yes" onClick={D}>
                    <Heart />
                    {fe.yes}
                  </button>
                </span>
                <button
                  ref={o ? undefined : ge}
                  className="ll-no"
                  style={
                    o
                      ? {
                          display: "none",
                        }
                      : undefined
                  }
                  {..._e}
                >
                  <span className="ll-no-label">{Ee}</span>
                </button>
              </div>
              <p className={`ll-reaction${_ ? " is-shown" : ""}`}>
                {fe.reaction}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="ll-intro-heart">
              <Heart />
            </div>
            <h1 className="ll-q-title" ref={re}>
              {content.intro.title}
            </h1>
            <p className="ll-q-text">{content.intro.text}</p>
            <div className="ll-actions-area">
              <div className="ll-actions">
                <span className="ll-yes-wrap" ref={ae}>
                  <button ref={C} className="ll-yes" onClick={D}>
                    {content.intro.button}
                    <Heart />
                  </button>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {fe &&
        o &&
        x &&
        createPortal(
          <span
            className={O}
            style={{
              left: o.x,
              top: o.y,
            }}
          >
            <button
              ref={ge}
              className="ll-no"
              style={biteMask(d)}
              aria-label="No"
              {..._e}
            >
              <span key={m} className={`ll-no-label${m ? " is-shaking" : ""}`}>
                {Ee}
              </span>
            </button>
          </span>,
          x,
        )}
    </div>
  );
}
const music = new (class {
  started = false;
  muted = false;
  el = null;
  ducked = false;
  resumeOnShow = false;
  canFade = true;
  raf = 0;
  listeners = new Set();
  get available() {
    return !!content.music.src;
  }
  prepare() {
    if (this.el || !this.available || typeof window > "u") return;
    let e = new Audio(content.music.src);
    e.loop = true;
    e.preload = "auto";
    e.setAttribute("playsinline", "");
    e.volume = 0.5;
    this.canFade = Math.abs(e.volume - 0.5) < 0.01;
    e.volume = +!this.canFade;
    this.el = e;
  }
  start() {
    if (this.started || !this.available || typeof window > "u") return;
    this.started = true;
    try {
      let e = navigator.audioSession;
      e && (e.type = "playback");
    } catch {}
    this.prepare();
    let e = this.el;
    e &&
      (e.play().catch(() => {
        window.addEventListener(
          "pointerdown",
          () => void e.play().catch(() => {}),
          {
            once: true,
          },
        );
      }),
      this.fadeTo(this.target(), 2.8),
      document.addEventListener("visibilitychange", this.onVisibility),
      this.emit());
  }
  toggle() {
    let e = this.el;
    e &&
      ((this.muted = !this.muted),
      this.muted
        ? this.canFade
          ? this.fadeTo(0, 0.4, () => (e.muted = true))
          : (e.muted = true)
        : ((e.muted = false),
          e.paused && !this.ducked && e.play().catch(() => {}),
          this.fadeTo(this.target(), 0.6)),
      this.emit());
  }
  duck(e) {
    let t = this.el;
    t &&
      this.ducked !== e &&
      ((this.ducked = e),
      e
        ? this.canFade
          ? this.fadeTo(0, 0.8, () => t.pause())
          : t.pause()
        : this.muted ||
          (t.play().catch(() => {}), this.fadeTo(this.target(), 1.8)));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
  }
  target() {
    return this.muted || this.ducked ? 0 : content.music.volume;
  }
  fadeTo(e, t, n) {
    let r = this.el;
    if (!r) return;
    if ((cancelAnimationFrame(this.raf), !this.canFade)) {
      n?.();
      return;
    }
    let i = r.volume,
      a = performance.now(),
      o = (s) => {
        let c = Math.min(1, (s - a) / (t * 1000));
        r.volume = Math.max(0, Math.min(1, i + (e - i) * c));
        c < 1 ? (this.raf = requestAnimationFrame(o)) : n?.();
      };
    this.raf = requestAnimationFrame(o);
  }
  onVisibility = () => {
    let e = this.el;
    e &&
      (document.hidden
        ? ((this.resumeOnShow = !e.paused), e.pause())
        : this.resumeOnShow && e.play().catch(() => {}));
  };
  emit() {
    this.listeners.forEach((e) => e());
  }
})();
function Finale({ cat: e }) {
  let [t, n] = useState("msg"),
    [r, i] = useState("none"),
    [a, o] = useState(16 / 9),
    [s, c] = useState(false),
    u = useRef(null),
    d = useRef(null),
    p = useRef(null),
    m = useRef(null),
    g = useRef(false),
    _ = useRef(0),
    v = useRef([]),
    y = (e, t) => v.current.push(window.setTimeout(e, t));
  useEffect(
    () => (
      heartRain(3800, 20),
      () => {
        v.current.forEach((e) => window.clearTimeout(e));
        window.clearInterval(_.current);
      }
    ),
    [],
  );
  let b = t === "video";
  useEffect(() => {
    e.setScene({
      mode: b ? "video" : "finale",
      content: () => u.current,
      look: b
        ? () => {
            let e = p.current?.getBoundingClientRect();
            return e
              ? {
                  x: e.left + e.width / 2,
                  y: e.top + e.height / 2,
                }
              : null;
          }
        : undefined,
    });
  }, [e, b]);
  let ee = () => {
      let e = p.current?.getBoundingClientRect();
      return e
        ? {
            x: e.left + e.width / 2,
            y: e.top + e.height / 2,
          }
        : null;
    },
    x = () => {
      let e = m.current;
      e &&
        ((g.current = true),
        (e.currentTime = 0),
        e.play().catch(() => c(true)));
    },
    te = (r) => {
      if (t !== "msg") return;
      let a = r.currentTarget.getBoundingClientRect();
      burst(a.left + a.width / 2, a.top + a.height / 2, {
        count: 26,
        spread: 200,
        sparkles: 0.4,
      });
      let o = m.current;
      if (o) {
        let e = o.play();
        o.pause();
        e?.catch(() => {});
      }
      n("leaving");
      e.watchVideo(() => d.current);
      y(() => n("video"), 380);
      y(() => {
        i("revealing");
        let e = ee();
        e &&
          burst(e.x, e.y, {
            count: 30,
            spread: 260,
            sparkles: 0.55,
            up: 20,
          });
      }, 1500);
      y(x, 2300);
      y(() => i("revealed"), 2650);
    },
    ne = () => {
      g.current &&
        (c(false),
        music.duck(true),
        window.clearInterval(_.current),
        (_.current = window.setInterval(() => {
          let e = d.current?.getBoundingClientRect();
          e &&
            floatHearts(
              e.left + e.width * (0.15 + Math.random() * 0.7),
              e.top + 6,
              1,
              14,
            );
        }, 1100)));
    },
    ie = () => {
      g.current &&
        (window.clearInterval(_.current),
        m.current?.ended || music.duck(false));
    },
    ae = () => {
      window.clearInterval(_.current);
      music.duck(false);
      heartRain(3600, 20);
      e.videoEnded();
    },
    w = ["ll-polaroid", b && "is-shown", r !== "none" && `is-${r}`]
      .filter(Boolean)
      .join(" ");
  return (
    <div className={`ll-stage ll-stage-final${b ? " is-video" : ""}`}>
      <div className="ll-final" ref={u}>
        {t !== "video" && (
          <div
            className={`ll-final-msg${t === "leaving" ? " is-leaving" : ""}`}
          >
            <div className="ll-big-heart">
              <Heart />
            </div>
            <h1 className="ll-q-title">{content.finale.title}</h1>
            <p className="ll-q-text">{content.finale.text}</p>
            <div className="ll-actions">
              <span className="ll-yes-wrap">
                <button className="ll-yes" onClick={te}>
                  {content.finale.button}
                  <Heart />
                </button>
              </span>
            </div>
          </div>
        )}
        <div className={w} ref={d} aria-hidden={!b}>
          <span className="ll-tape ll-tape-l" />
          <span className="ll-tape ll-tape-r" />
          <div
            className="ll-video-frame"
            ref={p}
            style={{
              "--ar": a,
            }}
          >
            <div className="ll-develop">
              <Heart />
            </div>
            <div className="ll-video-inner">
              {content.video.src ? (
                <video
                  ref={m}
                  src={content.video.src}
                  poster={content.video.poster || undefined}
                  controls={r === "revealed"}
                  playsInline={true}
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    let t = e.currentTarget;
                    t.videoWidth &&
                      t.videoHeight &&
                      o(t.videoWidth / t.videoHeight);
                  }}
                  onPlay={ne}
                  onPause={ie}
                  onEnded={ae}
                />
              ) : (
                <div className="ll-video-ph">
                  <Heart />
                  <span>our video goes here</span>
                </div>
              )}
            </div>
            {s && (
              <button className="ll-play" onClick={x} aria-label="Play video">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.5v13l10.5-6.5z" />
                </svg>
              </button>
            )}
          </div>
          <p className="ll-polaroid-cap">{content.video.caption}</p>
        </div>
      </div>
    </div>
  );
}
const O = (e) => (Math.round(e * 10) / 10).toString();
function De(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Oe(e, t, n) {
  let r = e.length,
    i = (n) => (t ? e[(n + r) % r] : e[Math.max(0, Math.min(r - 1, n))]),
    a = [],
    o = t ? r : r - 1;
  for (let e = 0; e < o; e++) {
    let t = i(e - 1),
      r = i(e),
      o = i(e + 1),
      s = i(e + 2),
      c = Math.hypot(o[0] - r[0], o[1] - r[1]),
      l = Math.max(1, Math.round(c / n));
    for (let e = 0; e < l; e++) {
      let n = e / l,
        i = n * n,
        c = i * n,
        u = (e, t, r, a) =>
          0.5 *
          (2 * t +
            (-e + r) * n +
            (2 * e - 5 * t + 4 * r - a) * i +
            (-e + 3 * t - 3 * r + a) * c);
      a.push({
        x: u(t[0], r[0], o[0], s[0]),
        y: u(t[1], r[1], o[1], s[1]),
        a: (r[2] ?? 1) * (1 - n) + (o[2] ?? 1) * n,
      });
    }
  }
  if (!t) {
    let t = e[r - 1];
    a.push({
      x: t[0],
      y: t[1],
      a: t[2] ?? 1,
    });
  }
  return a;
}
function k(e, t, n, r = [0, 0.3]) {
  let i = De(n),
    a = e.length,
    o = 0;
  for (let t = 0; t < a; t++) {
    let n = e[t],
      r = e[(t + 1) % a];
    o += n.x * r.y - r.x * n.y;
  }
  let s = o > 0 ? 1 : -1,
    c = `M${O(e[0].x)} ${O(e[0].y)}`;
  for (let n = 0; n < a; n++) {
    let o = e[n],
      l = e[(n + 1) % a],
      u = l.x - o.x,
      d = l.y - o.y,
      f = Math.hypot(u, d) || 1,
      p = (s * d) / f,
      m = (-s * u) / f,
      h = t * o.a * (0.45 + i() * 0.75);
    if (h < 0.2) {
      c += `L${O(l.x)} ${O(l.y)}`;
      continue;
    }
    let g = (o.x + l.x) / 2 + (i() - 0.5) * f * 0.4,
      _ = (o.y + l.y) / 2,
      v = g + p * h + r[0] * h,
      y = _ + m * h + r[1] * h,
      b = (o.x + v) / 2 + p * h * 0.22,
      ee = (o.y + y) / 2 + m * h * 0.22,
      x = (v + l.x) / 2 + p * h * 0.22,
      te = (y + l.y) / 2 + m * h * 0.22;
    c += `Q${O(b)} ${O(ee)} ${O(v)} ${O(y)}Q${O(x)} ${O(te)} ${O(l.x)} ${O(l.y)}`;
  }
  return c + "Z";
}
function A(e, t, n, r = 3, i) {
  return k(Oe(e, true, r), t, n, i);
}
function ke(e) {
  return `M${Oe(e, true, 2)
    .map((e) => `${O(e.x)} ${O(e.y)}`)
    .join("L")}Z`;
}
function Ae(e, t = 0) {
  let n = e
    .slice(1, -1)
    .reverse()
    .map(([e, n, r]) => [2 * t - e, n, r]);
  return [...e, ...n];
}
function je(e, t = 0) {
  return e.map(([e, n, r]) => [2 * t - e, n, r]).reverse();
}
function Me(e, t, n, r, i = 12, a = 1) {
  return Array.from(
    {
      length: i,
    },
    (o, s) => {
      let c = (s / i) * Math.PI * 2;
      return [e + Math.cos(c) * n, t + Math.sin(c) * r, a];
    },
  );
}
function Ne(e, t, n) {
  return e.map(([e, r, i]) => [e + t, r + n, i]);
}
function Pe(e, t, n, r, i, a = [], o = true) {
  let s = Oe(e, false, 2.2),
    c = s.length,
    l = [],
    u = [],
    d = [];
  for (let e = 0; e < c; e++) {
    let r = s[Math.max(0, e - 1)],
      i = s[Math.min(c - 1, e + 1)],
      a = i.x - r.x,
      o = i.y - r.y,
      f = Math.hypot(a, o) || 1,
      p = -o / f,
      m = a / f,
      h = (t + (n - t) * (e / (c - 1))) / 2;
    l.push({
      x: s[e].x + p * h,
      y: s[e].y + m * h,
      a: s[e].a,
    });
    u.push({
      x: s[e].x - p * h,
      y: s[e].y - m * h,
      a: s[e].a,
    });
    d.push([p, m, h]);
  }
  let f = [];
  if (o) {
    let e = s[c - 1],
      [t, n, r] = d[c - 1],
      i = n,
      a = -t;
    for (let o = 1; o < 7; o++) {
      let s = (Math.PI * o) / 7;
      f.push({
        x: e.x + t * r * Math.cos(s) + i * r * 1.1 * Math.sin(s),
        y: e.y + n * r * Math.cos(s) + a * r * 1.1 * Math.sin(s),
        a: e.a * 1.4,
      });
    }
  }
  return {
    path: k([...l, ...f, ...[...u].reverse()], r, i, [0, 0]),
    bands: a
      .map((e) => {
        let t = Math.max(0, Math.round(e * (c - 1)) - 1),
          n = Math.min(c - 1, t + 2),
          r = [];
        for (let e = t; e <= n; e++)
          r.push(
            `${O(s[e].x + d[e][0] * d[e][2] * 1.2)} ${O(s[e].y + d[e][1] * d[e][2] * 1.2)}`,
          );
        for (let e = n; e >= t; e--)
          r.push(
            `${O(s[e].x - d[e][0] * d[e][2] * 1.2)} ${O(s[e].y - d[e][1] * d[e][2] * 1.2)}`,
          );
        return `M${r.join("L")}Z`;
      })
      .join(""),
  };
}
function Fe(e, t, n, r, i = 4) {
  let a = De(n),
    o = "",
    s = "";
  for (let n = 0; n < t; n++) {
    let t = e[0] + a() * (e[2] - e[0]),
      n = e[1] + a() * (e[3] - e[1]),
      c = r(t, n) + (a() - 0.5) * 0.5,
      l = i * (0.6 + a() * 0.8),
      u = t + Math.cos(c) * l,
      d = n + Math.sin(c) * l,
      f = (t + u) / 2 + (a() - 0.5) * 1.2,
      p = (n + d) / 2 + (a() - 0.5) * 1.2,
      m = `M${O(t)} ${O(n)}Q${O(f)} ${O(p)} ${O(u)} ${O(d)}`;
    a() < 0.55 ? (o += m) : (s += m);
  }
  return {
    light: o,
    dark: s,
  };
}
const Ie = Ae([
  [0, -31, 0.45],
  [13, -29.5, 0.5],
  [24, -23.5, 0.6],
  [31.5, -13, 0.7],
  [34.5, -2, 0.9],
  [36, 7, 1.5],
  [32.5, 16, 1.4],
  [24, 23.5, 1.1],
  [12, 28, 0.8],
  [0, 29.5, 0.7],
]);
const Le = [
  [-30, -9, 0.2],
  [-35, -24, 0.5],
  [-33.5, -41, 0.35],
  [-31.5, -51, 0.12],
  [-26, -47, 0.35],
  [-18, -39, 0.5],
  [-10, -27, 0.2],
];
const Re = [
  [-27.5, -16, 0.4],
  [-30.5, -35, 0.6],
  [-29.8, -45, 0.3],
  [-25.5, -41.5, 0.5],
  [-18.5, -33, 0.6],
  [-14, -24, 0.4],
];
const ze = Ae([
  [0, 2.5, 0.15],
  [7, 3.5, 0.3],
  [14.5, 8.5, 0.6],
  [20.5, 15.5, 0.9],
  [17.5, 23.5, 0.8],
  [8.5, 27.5, 0.6],
  [0, 28.5, 0.5],
]);
const Be = Fe([-33, -29, 33, 27], 90, 71, (e, t) => Math.atan2(t - 6, e), 4.2);
const Ve = Ae(
  [
    [110, 75, 0.6],
    [124, 78.5, 0.8],
    [133, 92, 0.9],
    [137, 108, 0.9],
    [143, 126, 1],
    [150, 142, 1],
    [149, 156, 0.8],
    [140, 162.5, 0.4],
    [110, 164, 0.3],
  ],
  110,
);
const He = Ae(
  [
    [110, 78, 0.8],
    [119.5, 83, 1],
    [124, 97, 1.3],
    [119, 112, 1.1],
    [114, 126, 0.8],
    [112.5, 146, 0.6],
    [110, 150, 0.5],
  ],
  110,
);
const Ue = [
  [96.5, 100, 0.3],
  [105.5, 100, 0.3],
  [106.4, 118, 0.6],
  [105.8, 152, 0.4],
  [96, 152, 0.4],
  [95.4, 120, 0.6],
];
const We = Ae(
  [
    [110, 94, 0.8],
    [119, 97, 1.2],
    [123, 106, 1.4],
    [119.5, 117, 1.3],
    [110, 121.5, 1.1],
  ],
  110,
);
const Ge = Fe([74, 80, 146, 162], 110, 23, () => Math.PI / 2, 4.5);
const Ke = [
  [62, 97, 0.8],
  [76, 89, 0.7],
  [96, 87, 0.6],
  [116, 88, 0.6],
  [134, 90, 0.7],
  [147, 96, 0.9],
  [155, 106, 1.1],
  [154, 117, 1.3],
  [146, 126, 1.3],
  [127, 130, 1.1],
  [103, 131, 1.2],
  [82, 129, 1.2],
  [66, 124, 1.1],
  [56, 113, 1],
  [56, 103, 0.9],
];
const qe = [
  [147, 98, 0.6],
  [154.5, 106, 0.9],
  [153.5, 117, 1.3],
  [146, 125.5, 1.1],
  [139.5, 121, 0.6],
  [139, 109, 0.5],
];
const Je = [
  [58.5, 110, 0.3],
  [70.5, 110, 0.3],
  [71, 127, 0.5],
  [66.5, 146, 0.5],
  [69.5, 156, 0.35],
  [60.5, 156, 0.35],
  [58.5, 146, 0.5],
  [60, 127, 0.5],
];
const Ye = [
  [123.5, 106, 0.3],
  [134, 106, 0.3],
  [134.5, 130, 0.5],
  [134, 153, 0.4],
  [124.5, 153, 0.4],
  [124, 130, 0.5],
];
const Xe = Fe([58, 88, 154, 130], 110, 47, () => Math.PI * 0.62, 4.5);
const Ze = [74, 85, 96, 107, 118, 129]
  .map(
    (e, t) =>
      `M${e} 87.5Q${e - 3.5} ${99 + (t % 2)} ${e + 0.5} ${111 + (t % 3) * 2}`,
  )
  .join("");
const Qe = {
  head: {
    outline: A(Ie, 1.5, 11, 3.2, [0, 0.35]),
    halo: A(Ie, 2.6, 111, 3, [0, 0.4]),
    earL: A(Le, 1.5, 12, 2.6),
    earR: A(je(Le), 1.5, 13, 2.6),
    earInL: A(Re, 0.8, 14, 2.2),
    earInR: A(je(Re), 0.8, 15, 2.2),
    muzzle: A(ze, 1.2, 16, 3, [0, 0.4]),
    hairLight: Be.light,
    hairDark: Be.dark,
  },
  sit: {
    torso: A(Ve, 1.5, 21, 3.4),
    torsoHalo: A(Ve, 2.6, 121, 3.2),
    torsoSmooth: ke(Ve),
    chest: A(He, 1.8, 22, 3, [0, 0.5]),
    fluff: A(We, 1.9, 32, 2.8, [0, 0.6]),
    haunchL: A(Me(80, 145, 14.5, 16.5, 12, 1), 1.8, 24),
    haunchR: A(Me(140, 145, 14.5, 16.5, 12, 1), 1.8, 25),
    legL: A(Ue, 1.2, 26, 2.4),
    legR: A(je(Ue, 110), 1.2, 27, 2.4),
    pawL: A(Me(100.7, 157.5, 7.8, 5.2, 12, 0.5), 0.9, 28, 2),
    pawR: A(Me(119.3, 157.5, 7.8, 5.2, 12, 0.5), 0.9, 29, 2),
    tailBase: Pe(
      [
        [148, 147],
        [157, 155],
        [153, 163],
        [140, 165],
      ],
      12,
      10,
      1.3,
      30,
      [0.55],
      false,
    ),
    tailTip: Pe(
      [
        [143, 165],
        [131, 165.8],
        [121, 164.6],
        [113.5, 160.5],
      ],
      10,
      7.4,
      1.4,
      31,
      [0.3, 0.72],
    ),
    hairLight: Ge.light,
    hairDark: Ge.dark,
  },
  walk: {
    body: A(Ke, 1.5, 41, 3.4, [-0.3, 0.35]),
    bodyHalo: A(Ke, 2.6, 141, 3.2, [-0.35, 0.4]),
    bodySmooth: ke(Ke),
    chest: A(qe, 1.5, 42, 3, [0, 0.5]),
    thigh: A(Me(70, 112, 15.5, 16.5, 12, 0.9), 1.4, 43),
    hindFar: A(Je, 1.2, 44, 2.4),
    hindNear: A(Ne(Je, 12, 1), 1.2, 45, 2.4),
    foreFar: A(Ye, 1.2, 46, 2.4),
    foreNear: A(Ne(Ye, 12, 1), 1.2, 47, 2.4),
    pawHindFar: A(Me(65.3, 158.8, 7.2, 4.6, 10, 0.5), 0.8, 48, 2),
    pawHindNear: A(Me(77.3, 159.6, 7.2, 4.6, 10, 0.5), 0.8, 49, 2),
    pawForeFar: A(Me(129.3, 158.4, 7.3, 4.6, 10, 0.5), 0.8, 50, 2),
    pawForeNear: A(Me(141.3, 159.4, 7.3, 4.6, 10, 0.5), 0.8, 51, 2),
    tail: Pe(
      [
        [63, 102],
        [50, 93],
        [41, 78],
        [39, 62],
        [43, 50],
        [50, 44],
      ],
      13,
      8,
      1.4,
      52,
      [0.28, 0.46, 0.64, 0.82],
      true,
    ),
    stripes: Ze,
    hairLight: Xe.light,
    hairDark: Xe.dark,
  },
};
const $e = Array.from(
  {
    length: 16,
  },
  (e, t) => {
    let n = (t / 16) * Math.PI * 2,
      r = Math.cos(n),
      i = Math.sin(n);
    return `M${(r * 3.6).toFixed(2)} ${(i * 3.6).toFixed(2)}L${(r * 7.3).toFixed(2)} ${(i * 7.3).toFixed(2)}`;
  },
).join("");
function CatEye({ side: e, u: t }) {
  return (
    <g
      className={`eye eye-${e < 0 ? "l" : "r"}`}
      transform={`translate(${e * 13.5} -4) rotate(${-e * 7}) scale(1.13)`}
    >
      <ellipse
        className="eye-ring"
        rx="9.8"
        ry="9.1"
        fill="#f8d8aa"
        opacity=".6"
      />
      <g className="eye-ball" clipPath={t("cEye")}>
        <g className="look">
          <circle r="7.8" fill={t("iris")} />
          <path
            d={$e}
            fill="none"
            stroke="#6e521f"
            strokeOpacity=".25"
            strokeWidth=".35"
          />
          <ellipse className="pupil" rx="4" ry="6.4" fill="#110907" />
        </g>
        <ellipse
          cx="-2.6"
          cy="-3.3"
          rx="2.1"
          ry="1.75"
          fill="#fff"
          opacity=".95"
        />
        <circle cx="2.7" cy="2.9" r=".85" fill="#fff" opacity=".75" />
        <g className="shine">
          <circle cx="1.4" cy="-4.4" r="1.05" fill="#fff" />
          <path
            d="M-5 4.2Q0 6.8 5 4.2"
            fill="none"
            stroke="#fff"
            strokeOpacity=".55"
            strokeWidth=".8"
          />
        </g>
        <rect x="-9" y="-8.5" width="18" height="7" fill={t("eyeShade")} />
        <ellipse
          rx="7.6"
          ry="7"
          fill="none"
          stroke="#24140d"
          strokeWidth="2.3"
        />
        <g className="lid-lo">
          <path d="M-12 20H12V2Q6-3.6 0-4Q-6-3.6-12 2Z" fill="#f4c087" />
          <path
            d="M-12 2Q-6-3.6 0-4Q6-3.6 12 2"
            fill="none"
            stroke="#24140d"
            strokeWidth=".9"
          />
        </g>
        <g className="lid-up">
          <path d="M-12-20H12V1Q6 7.6 0 8.3Q-6 7.6-12 1Z" fill="#f2b574" />
          <path
            className="lash-up"
            d="M-12 1Q-6 7.6 0 8.3Q6 7.6 12 1"
            fill="none"
            stroke="#24140d"
            strokeWidth="1.3"
          />
        </g>
      </g>
      <path
        className="smile-eye"
        d="M-6.8 2.4Q0-3.4 6.8 2.4"
        fill="none"
        stroke="#24140d"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        className="shut-eye"
        d="M-7 .2Q0 6.2 7 .2"
        fill="none"
        stroke="#24140d"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </g>
  );
}
function CatSvg() {
  let e = useId().replace(/[^a-zA-Z0-9_-]/g, ""),
    t = (t) => `${e}-${t}`,
    n = (t) => `url(#${e}-${t})`,
    { head: r, sit: i, walk: a } = Qe;
  return (
    <svg viewBox="0 0 220 170" className="ll-cat-svg" aria-hidden="true">
      <defs>
        <radialGradient id={t("fur")} cx=".4" cy=".3" r=".8">
          <stop offset="0" stopColor="#f8c68b" />
          <stop offset=".38" stopColor="#eca561" />
          <stop offset=".78" stopColor="#dc8b48" />
          <stop offset="1" stopColor="#c07034" />
        </radialGradient>
        <radialGradient id={t("head")} cx=".42" cy=".28" r=".78">
          <stop offset="0" stopColor="#f9c98f" />
          <stop offset=".42" stopColor="#eda663" />
          <stop offset=".8" stopColor="#dd8c49" />
          <stop offset="1" stopColor="#c27236" />
        </radialGradient>
        <radialGradient id={t("thigh")} cx=".42" cy=".34" r=".62">
          <stop offset="0" stopColor="#f6c083" />
          <stop offset=".55" stopColor="#e9a262" />
          <stop offset=".85" stopColor="#dc8f4c" stopOpacity=".55" />
          <stop offset="1" stopColor="#d4863f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={t("creamSoft")} cx=".5" cy=".4" r=".62">
          <stop offset="0" stopColor="#fffaf4" />
          <stop offset=".62" stopColor="#f8e8d4" />
          <stop offset=".88" stopColor="#f1dbc0" stopOpacity=".7" />
          <stop offset="1" stopColor="#efd6b8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={t("legShade")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7a3614" stopOpacity=".32" />
          <stop offset=".35" stopColor="#7a3614" stopOpacity="0" />
          <stop offset=".6" stopColor="#fff" stopOpacity=".08" />
          <stop offset="1" stopColor="#7a3614" stopOpacity=".38" />
        </linearGradient>
        <linearGradient id={t("sitLeg")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7a260" stopOpacity="0" />
          <stop offset=".14" stopColor="#e7a260" />
          <stop offset=".62" stopColor="#eeb277" />
          <stop offset="1" stopColor="#f6d0a6" />
        </linearGradient>
        <linearGradient id={t("walkBody")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cc7a3a" />
          <stop offset=".22" stopColor="#e39956" />
          <stop offset=".55" stopColor="#eda968" />
          <stop offset=".82" stopColor="#f3c28e" />
          <stop offset="1" stopColor="#f7d8b4" />
        </linearGradient>
        <linearGradient id={t("far")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4894a" />
          <stop offset="1" stopColor="#bd7438" />
        </linearGradient>
        <linearGradient id={t("legN")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e39b58" />
          <stop offset=".6" stopColor="#edb074" />
          <stop offset="1" stopColor="#f5cda2" />
        </linearGradient>
        <radialGradient id={t("cream")} cx=".5" cy=".35" r=".72">
          <stop offset="0" stopColor="#fffaf4" />
          <stop offset=".6" stopColor="#f8e9d6" />
          <stop offset="1" stopColor="#ebd0b1" />
        </radialGradient>
        <radialGradient id={t("paw")} cx=".45" cy=".35" r=".75">
          <stop offset="0" stopColor="#fff9f1" />
          <stop offset="1" stopColor="#ecd4b8" />
        </radialGradient>
        <radialGradient id={t("pawFar")} cx=".45" cy=".35" r=".75">
          <stop offset="0" stopColor="#e8b582" />
          <stop offset="1" stopColor="#cf975f" />
        </radialGradient>
        <linearGradient id={t("ear")} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e7a05c" />
          <stop offset="1" stopColor="#c4712f" />
        </linearGradient>
        <radialGradient id={t("earIn")} cx=".5" cy=".78" r=".8">
          <stop offset="0" stopColor="#f6c0bb" />
          <stop offset=".55" stopColor="#ea9b95" />
          <stop offset="1" stopColor="#c97a74" />
        </radialGradient>
        <radialGradient id={t("iris")} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#f6f0a0" />
          <stop offset=".36" stopColor="#dccd57" />
          <stop offset=".72" stopColor="#bb8f32" />
          <stop offset="1" stopColor="#5a4118" />
        </radialGradient>
        <linearGradient id={t("nose")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5b0b5" />
          <stop offset="1" stopColor="#d27481" />
        </linearGradient>
        <linearGradient id={t("eyeShade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a0d08" stopOpacity=".6" />
          <stop offset="1" stopColor="#1a0d08" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={t("shadeDown")} x1="0" y1="0" x2="0" y2="1">
          <stop offset=".35" stopColor="#7a3614" stopOpacity="0" />
          <stop offset="1" stopColor="#7a3614" stopOpacity=".35" />
        </linearGradient>
        <linearGradient id={t("tail")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e7a260" />
          <stop offset="1" stopColor="#d4863f" />
        </linearGradient>
        <filter id={t("soft")} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation=".7" />
        </filter>
        <clipPath id={t("cHead")}>
          <path d={r.outline} />
        </clipPath>
        <clipPath id={t("cEye")}>
          <ellipse rx="7.6" ry="7" />
        </clipPath>
        <clipPath id={t("cWalk")}>
          <path d={a.body} />
        </clipPath>
        <clipPath id={t("cThigh")}>
          <path d={a.thigh} />
        </clipPath>
        <clipPath id={t("cSit")}>
          <path d={i.torso} />
        </clipPath>
        <clipPath id={t("cHaunch")}>
          <path d={i.haunchL} />
          <path d={i.haunchR} />
        </clipPath>
        <clipPath id={t("cTailW")}>
          <path d={a.tail.path} />
        </clipPath>
        <clipPath id={t("cTailSB")}>
          <path d={i.tailBase.path} />
        </clipPath>
        <clipPath id={t("cTailST")}>
          <path d={i.tailTip.path} />
        </clipPath>
      </defs>
      <g className="pose-walk">
        <g className="w-tail">
          <path d={a.tail.path} fill={n("tail")} className="edge" />
          <path
            d={a.tail.bands}
            fill="#ad5d27"
            opacity=".5"
            clipPath={n("cTailW")}
            filter={n("soft")}
          />
        </g>
        <g className="leg w-leg-bf">
          <path d={a.hindFar} fill={n("far")} className="edge" />
          <path d={a.pawHindFar} fill={n("pawFar")} />
        </g>
        <g className="leg w-leg-ff">
          <path d={a.foreFar} fill={n("far")} className="edge" />
          <path d={a.pawForeFar} fill={n("pawFar")} />
        </g>
        <g className="w-body">
          <path d={a.bodyHalo} fill={n("walkBody")} opacity=".5" />
          <path d={a.body} fill={n("walkBody")} className="edge" />
          <g clipPath={n("cWalk")}>
            <path d={a.stripes} className="stripe" filter={n("soft")} />
            <path d={a.hairDark} className="hair-d" />
            <path d={a.hairLight} className="hair-l" />
            <path
              d="M68 91Q100 84 134 91"
              fill="none"
              stroke="#fbd6a6"
              strokeOpacity=".5"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter={n("soft")}
            />
          </g>
        </g>
        <g className="leg w-leg-bn">
          <path d={a.hindNear} fill={n("legN")} className="edge" />
          <path d={a.pawHindNear} fill={n("paw")} className="edge" />
        </g>
        <g className="leg w-leg-fn">
          <path d={a.foreNear} fill={n("legN")} className="edge" />
          <path d={a.pawForeNear} fill={n("paw")} className="edge" />
        </g>
        <g className="w-body w-front">
          <path d={a.thigh} fill={n("thigh")} />
          <g clipPath={n("cThigh")}>
            <path
              d="M56 106Q64 99 75 100M55 116Q63 109 76 109M58 126Q66 120 79 120"
              className="stripe"
              filter={n("soft")}
            />
          </g>
          <path d={a.chest} fill={n("creamSoft")} />
        </g>
      </g>
      <g className="pose-sit">
        <path d={i.torsoHalo} fill={n("fur")} opacity=".5" />
        <path d={i.torso} fill={n("fur")} className="edge" />
        <g clipPath={n("cSit")}>
          <path
            d="M86 100Q80 106 79 114M84 117Q77 123 76 131M134 100Q140 106 141 114M136 117Q143 123 144 131"
            className="stripe"
            filter={n("soft")}
          />
          <path d={i.hairDark} className="hair-d" />
          <path d={i.hairLight} className="hair-l" />
        </g>
        <path d={i.haunchL} fill={n("thigh")} />
        <path d={i.haunchR} fill={n("thigh")} />
        <g clipPath={n("cHaunch")}>
          <path
            d="M67 140Q75 133 86 133M66 150Q74 144 85 144M153 140Q145 133 134 133M154 150Q146 144 135 144"
            className="stripe"
            filter={n("soft")}
          />
        </g>
        <path d={i.torsoSmooth} fill={n("shadeDown")} />
        <path d={i.chest} fill={n("creamSoft")} />
        <ellipse cx="69.5" cy="160.6" rx="7.6" ry="4.1" fill={n("pawFar")} />
        <ellipse cx="150.5" cy="160.6" rx="7.6" ry="4.1" fill={n("pawFar")} />
      </g>
      <g className="head">
        <g className="head-bob">
          <g className="head-tilt">
            <g className="ear ear-l">
              <path d={r.earL} fill={n("ear")} className="edge" />
              <path d={r.earInL} fill={n("earIn")} />
              <path
                d="M-21-22Q-24-30-27-38M-18-24Q-20-30-23-36M-24.5-19Q-27.5-27-29.5-34"
                className="tuft"
              />
            </g>
            <g className="ear ear-r">
              <path d={r.earR} fill={n("ear")} className="edge" />
              <path d={r.earInR} fill={n("earIn")} />
              <path
                d="M21-22Q24-30 27-38M18-24Q20-30 23-36M24.5-19Q27.5-27 29.5-34"
                className="tuft"
              />
            </g>
            <path d={r.halo} fill={n("head")} opacity=".5" />
            <path d={r.outline} fill={n("head")} className="edge" />
            <g clipPath={n("cHead")}>
              <path d={r.hairDark} className="hair-d" />
              <path d={r.hairLight} className="hair-l" />
              <path
                d="M0-30.5Q-.6-23 0-16M-5.2-30Q-6.8-22-4.6-15M5.2-30Q6.8-22 4.6-15M-10.8-27.5Q-13.2-21-11.2-14.5M10.8-27.5Q13.2-21 11.2-14.5"
                className="stripe thin"
                filter={n("soft")}
              />
              <ellipse
                cx="0"
                cy="31"
                rx="30"
                ry="11"
                fill="#7a3614"
                opacity=".22"
                filter={n("soft")}
              />
            </g>
            <g className="face">
              <path
                d="M-21-2Q-27-.5-33 4M-21.5 3.5Q-27 6.5-31.5 11M21-2Q27-.5 33 4M21.5 3.5Q27 6.5 31.5 11"
                className="stripe thin"
                filter={n("soft")}
              />
              <path d={r.muzzle} fill={n("cream")} />
              <ellipse
                cx="-19"
                cy="11"
                rx="5.6"
                ry="3.2"
                fill="#ff8ea0"
                opacity=".3"
                filter={n("soft")}
              />
              <ellipse
                cx="19"
                cy="11"
                rx="5.6"
                ry="3.2"
                fill="#ff8ea0"
                opacity=".3"
                filter={n("soft")}
              />
              <CatEye side={-1} u={n} />
              <CatEye side={1} u={n} />
              <path
                d="M-6.2 0Q-4.8 2.6-5.4 5.2M6.2 0Q4.8 2.6 5.4 5.2"
                fill="none"
                stroke="#7c3f1e"
                strokeOpacity=".5"
                strokeWidth=".8"
                strokeLinecap="round"
              />
              <path
                d="M-20.4-7.4Q-22.8-8.6-25-8M20.4-7.4Q22.8-8.6 25-8"
                fill="none"
                stroke="#3a2014"
                strokeOpacity=".75"
                strokeWidth=".9"
                strokeLinecap="round"
              />
              <g className="pads">
                <ellipse cx="-4.9" cy="14.4" rx="5.4" ry="3.9" fill="#fffaf5" />
                <ellipse cx="4.9" cy="14.4" rx="5.4" ry="3.9" fill="#fffaf5" />
                <path
                  d="M-7.2 13.4h.01M-5.2 14.8h.01M-7.8 15.7h.01M-4.6 13h.01M7.2 13.4h.01M5.2 14.8h.01M7.8 15.7h.01M4.6 13h.01"
                  stroke="#b8927a"
                  strokeWidth=".75"
                  strokeLinecap="round"
                />
              </g>
              <ellipse
                cx="0"
                cy="22.6"
                rx="4.6"
                ry="3"
                fill="#f2dec6"
                opacity=".55"
              />
              <path
                d="M-4.3 7.2Q0 5.9 4.3 7.2Q3.7 10.2 1 11.6Q0 12-1 11.6Q-3.7 10.2-4.3 7.2Z"
                fill={n("nose")}
              />
              <path
                d="M-2.9 9.4Q-1.9 10.3-1 9.7M2.9 9.4Q1.9 10.3 1 9.7"
                fill="none"
                stroke="#9e4a55"
                strokeWidth=".6"
                strokeLinecap="round"
              />
              <path
                d="M-2 7.3Q0 6.8 2 7.3"
                fill="none"
                stroke="#fff"
                strokeOpacity=".55"
                strokeWidth=".5"
                strokeLinecap="round"
              />
              <path
                d="M0 11.6V14.2M0 14.2Q-2.2 16.6-5.2 15.4M0 14.2Q2.2 16.6 5.2 15.4"
                className="mouth m-w lip"
              />
              <g className="mouth m-open">
                <path d="M0 11.6V13.4" className="lip" />
                <path
                  d="M-5.4 14.6Q0 13.2 5.4 14.6Q4.4 22.4 0 23.2Q-4.4 22.4-5.4 14.6Z"
                  fill="#5b1d27"
                />
                <path
                  d="M-3.2 20.2Q0 17.4 3.2 20.2Q2.4 23 0 23.1Q-2.4 23-3.2 20.2Z"
                  fill="#e8899a"
                />
                <path
                  d="M-4.2 14.9L-3.4 17.6-2.5 15.1ZM2.5 15.1L3.4 17.6 4.2 14.9Z"
                  fill="#fffdf8"
                />
              </g>
              <g className="mouth m-chomp">
                <path d="M0 11.6V13" className="lip" />
                <path
                  d="M-7.4 14.2Q0 12.4 7.4 14.2Q6 25.6 0 26.6Q-6 25.6-7.4 14.2Z"
                  fill="#5b1d27"
                />
                <path
                  d="M-4.4 23Q0 20.2 4.4 23Q3 26 0 26.2Q-3 26-4.4 23Z"
                  fill="#e8899a"
                />
                <path
                  d="M-5.6 14.6L-4.5 18.6-3.3 14.9ZM3.3 14.9L4.5 18.6 5.6 14.6ZM-4.4 24.6L-3.6 21.6-2.6 25.1ZM2.6 25.1L3.6 21.6 4.4 24.6Z"
                  fill="#fffdf8"
                />
              </g>
              <g className="mouth m-tongue">
                <path
                  d="M-2.3 15.2Q0 20.4 2.3 15.2Z"
                  fill="#e8899a"
                  stroke="#b5566a"
                  strokeWidth=".4"
                />
                <path
                  d="M0 11.6V14.2M0 14.2Q-2.2 16.6-5.2 15.4M0 14.2Q2.2 16.6 5.2 15.4"
                  className="lip"
                />
              </g>
              <g className="whiskers">
                <path
                  d="M-9 12.5Q-24 9-39 7.5M-9 14Q-24 13-40 13.5M-9 15.5Q-23 17-37 20.5M9 12.5Q24 9 39 7.5M9 14Q24 13 40 13.5M9 15.5Q23 17 37 20.5"
                  className="whisker-s"
                />
                <path
                  d="M-9 12Q-24 8.5-39 7M-9 13.5Q-24 12.5-40 13M-9 15Q-23 16.5-37 20M9 12Q24 8.5 39 7M9 13.5Q24 12.5 40 13M9 15Q23 16.5 37 20"
                  className="whisker"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g className="pose-sit-front">
        <g className="s-leg-l">
          <path d={i.legL} fill={n("sitLeg")} className="edge" />
          <path d={i.legL} fill={n("legShade")} />
          <path
            d="M96 128Q101 130 106 128M96 138Q101 140 106 138"
            className="stripe faint"
          />
          <path d={i.pawL} fill={n("paw")} className="edge" />
          <path
            d="M97.9 159.7v2.3M100.7 160.2v2.3M103.5 159.7v2.3"
            className="toe"
          />
        </g>
        <g className="s-leg-r">
          <path d={i.legR} fill={n("sitLeg")} className="edge" />
          <path d={i.legR} fill={n("legShade")} />
          <path
            d="M114 128Q119 130 124 128M114 138Q119 140 124 138"
            className="stripe faint"
          />
          <path d={i.pawR} fill={n("paw")} className="edge" />
          <path
            d="M116.5 159.7v2.3M119.3 160.2v2.3M122.1 159.7v2.3"
            className="toe"
          />
        </g>
        <path d={i.fluff} fill={n("cream")} />
        <g className="s-tail">
          <path d={i.tailBase.path} fill={n("tail")} className="edge" />
          <path
            d={i.tailBase.bands}
            fill="#ad5d27"
            opacity=".5"
            clipPath={n("cTailSB")}
            filter={n("soft")}
          />
          <g className="s-tail-tip">
            <path d={i.tailTip.path} fill={n("tail")} className="edge" />
            <path
              d={i.tailTip.bands}
              fill="#ad5d27"
              opacity=".5"
              clipPath={n("cTailST")}
              filter={n("soft")}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
function CatLayer({ ctrl: e }) {
  let t = useRef(null),
    n = useRef(null),
    r = useRef(null),
    i = useRef(null),
    a = useRef(null),
    o = useRef(null),
    s = useRef(null);
  return (
    useEffect(
      () => (
        e.mount({
          layer: t.current,
          root: n.current,
          flip: r.current,
          lift: i.current,
          bubble: a.current,
          shadow: o.current,
          zzz: s.current,
        }),
        e.start(),
        () => e.destroy()
      ),
      [e],
    ),
    (
      <div className="ll-cat-layer" ref={t} aria-hidden="true">
        <div className="ll-cat" ref={n}>
          <div className="ll-cat-shadow" ref={o} />
          <div className="ll-cat-flip" ref={r}>
            <div className="ll-cat-lift" ref={i}>
              <div className="ll-cat-act">
                <CatSvg />
              </div>
            </div>
          </div>
          <div className="ll-cat-zzz" ref={s}>
            <span>z</span>
            <span>z</span>
            <span>z</span>
          </div>
          <div className="ll-cat-bubble" ref={a} />
        </div>
      </div>
    )
  );
}
const CANCEL = Symbol("cancel");
const rnd = (e, t) => e + Math.random() * (t - e);
const pickOne = (e) => e[Math.floor(Math.random() * e.length)];
const clampTo = (e, t, n) => Math.max(t, Math.min(n, e));
const nextFrame = () => new Promise((e) => requestAnimationFrame(e));
const CAT_ASPECT = 170 / 220;
function rectsOverlap(e, t, n = 0) {
  return (
    e.left < t.right + n &&
    e.right > t.left - n &&
    e.top < t.bottom + n &&
    e.bottom > t.top - n
  );
}
const WING_SVG = `<path d="M19.6 15.2C15.5 6.5 8.5 1.2 3.6 2.6.4 3.6 1 8.4 3.8 11.2 7.2 14.4 13.4 15.8 19.6 16.2Z" fill="url(#llfly-f)"/>
<path d="M19.6 16.6C14 17.2 7.6 19.6 7 24.2 6.6 27.8 10.8 29.2 13.8 26.8 16.8 24.4 18.8 20.4 19.8 17.4Z" fill="url(#llfly-h)"/>
<path d="M3.6 2.6C.4 3.6 1 8.4 3.8 11.2" fill="none" stroke="#7b3f9a" stroke-width="1.2" stroke-linecap="round" opacity=".55"/>
<path d="M19.4 15.6L6 5M19.4 15.8L4.6 9.6M19.4 15.9L9 13.6M19.6 17L9.6 25.6M19.6 17.2L13 27" stroke="#fff" stroke-width=".4" opacity=".5"/>
<circle cx="4.4" cy="5.2" r="1" fill="#fff" opacity=".9"/><circle cx="3.7" cy="8.5" r=".75" fill="#fff" opacity=".85"/>
<circle cx="6.8" cy="3.4" r=".7" fill="#fff" opacity=".85"/><circle cx="9.8" cy="26.2" r=".8" fill="#fff" opacity=".85"/>`;
const BUTTERFLY_SVG = `<svg viewBox="0 0 40 32" aria-hidden="true"><defs>
<linearGradient id="llfly-f" x1="1" y1=".7" x2="0" y2="0"><stop offset="0" stop-color="#ffe6f1"/><stop offset=".42" stop-color="#ff9dc5"/><stop offset=".82" stop-color="#c77bdc"/><stop offset="1" stop-color="#8b50b2"/></linearGradient>
<linearGradient id="llfly-h" x1="1" y1="0" x2=".1" y2="1"><stop offset="0" stop-color="#ffeef5"/><stop offset=".5" stop-color="#ffb4d2"/><stop offset="1" stop-color="#b770d2"/></linearGradient></defs>
<g class="bw">${WING_SVG}</g><g class="bw"><g transform="translate(40 0) scale(-1 1)">${WING_SVG}</g></g>
<ellipse cx="20" cy="17.2" rx="1.35" ry="6.2" fill="#3a2342"/><circle cx="20" cy="10.6" r="1.6" fill="#3a2342"/>
<path d="M19.5 9.6Q17.4 4.6 15.2 3.4M20.5 9.6Q22.6 4.6 24.8 3.4" fill="none" stroke="#3a2342" stroke-width=".55" stroke-linecap="round"/>
<circle cx="15.2" cy="3.4" r=".75" fill="#3a2342"/><circle cx="24.8" cy="3.4" r=".75" fill="#3a2342"/></svg>`;
const Butterfly = class {
  el;
  x;
  y;
  w = 40;
  landed = false;
  vx = 0;
  vy = 0;
  mode = "wander";
  getPt = null;
  radius = 30;
  orbit = Math.random() * 6;
  wt;
  wUntil = 0;
  fleeFrom = {
    x: 0,
    y: 0,
  };
  fleeUntil = 0;
  last = performance.now();
  raf = 0;
  nextSpark = 0;
  alive = true;
  env;
  constructor(e, t) {
    this.env = t;
    this.el = document.createElement("div");
    this.el.className = "ll-bfly";
    this.el.innerHTML = BUTTERFLY_SVG;
    e.appendChild(this.el);
    let { w: n, h: r } = t();
    this.x = n - 16;
    this.y = r * 0.16;
    this.wt = {
      x: n * 0.65,
      y: r * 0.3,
    };
    this.wUntil = performance.now() + 3000;
    this.raf = requestAnimationFrame(this.step);
  }
  setSize(e) {
    this.w = e;
    this.el.style.setProperty("--bw", `${e}px`);
  }
  wander() {
    this.mode = "wander";
    this.getPt = null;
    this.wUntil = 0;
  }
  follow(e, t) {
    this.mode = "follow";
    this.getPt = e;
    this.radius = t;
  }
  land(e) {
    this.mode = "land";
    this.getPt = e;
  }
  flee(e) {
    this.mode = "flee";
    this.fleeFrom = e;
    this.fleeUntil = performance.now() + 900;
    this.landed = false;
    let t = this.x - e.x,
      n = this.y - e.y,
      r = Math.hypot(t, n) || 1;
    this.vx += (t / r) * 260;
    this.vy += (n / r) * 160 - 180;
  }
  bump() {
    this.vy -= 240;
    this.vx += rnd(-130, 130);
  }
  destroy() {
    this.alive = false;
    cancelAnimationFrame(this.raf);
    this.el.remove();
  }
  pickWander() {
    let { w: e, h: t, avoid: n } = this.env(),
      r = this.wt,
      i = -1 / 0;
    for (let a = 0; a < 14; a++) {
      let a = {
          x: rnd(40, e - 40),
          y: rnd(t * 0.1, t * 0.82),
        },
        o = Math.hypot(a.x - this.x, a.y - this.y),
        s = Math.min(o, 380) * 0.5 + rnd(0, 60);
      o < 120 && (s -= 200);
      for (let e of n)
        a.x > e.left - 20 &&
          a.x < e.right + 20 &&
          a.y > e.top - 20 &&
          a.y < e.bottom + 20 &&
          (s -= 400);
      s > i && ((i = s), (r = a));
    }
    this.wt = r;
    this.wUntil = performance.now() + rnd(2600, 4600);
  }
  step = (e) => {
    if (!this.alive) return;
    let t = Math.min(0.05, (e - this.last) / 1000);
    this.last = e;
    let n = this.x,
      r = this.y,
      i = 100,
      a = 420,
      o = null;
    if (this.mode === "land" || this.mode === "follow") {
      let e = this.getPt?.() ?? null;
      if (!e) this.wander();
      else if (this.mode === "land") {
        n = e.x;
        r = e.y;
        i = 240;
        a = 700;
        let t = Math.hypot(e.x - this.x, e.y - this.y);
        (t < 8 || (this.landed && t < 60)) && (o = e);
      } else {
        this.orbit += t * 2.4;
        n = e.x + Math.cos(this.orbit) * this.radius;
        r = e.y + Math.sin(this.orbit * 1.4) * this.radius * 0.55;
        i = 190;
      }
    }
    if (this.mode === "flee") {
      if (e > this.fleeUntil) this.wander();
      else {
        let e = this.x - this.fleeFrom.x,
          t = this.y - this.fleeFrom.y,
          o = Math.hypot(e, t) || 1;
        n = this.x + (e / o) * 200;
        r = this.y + (t / o) * 120 - 140;
        i = 340;
        a = 1100;
      }
    }
    if (
      (this.mode === "wander" &&
        ((e > this.wUntil ||
          Math.hypot(this.wt.x - this.x, this.wt.y - this.y) < 30) &&
          this.pickWander(),
        (n = this.wt.x),
        (r = this.wt.y),
        (i = 95)),
      o)
    ) {
      this.x = o.x;
      this.y = o.y;
      this.vx = 0;
      this.vy = 0;
      this.landed = true;
    } else {
      this.landed = false;
      let e = n - this.x,
        o = r - this.y,
        s = Math.hypot(e, o) || 1,
        c = i * Math.min(1, s / 70),
        l = (e / s) * c - this.vx,
        u = (o / s) * c - this.vy,
        d = Math.hypot(l, u),
        f = a * t;
      d > f && ((l = (l / d) * f), (u = (u / d) * f));
      this.vx += l;
      this.vy += u;
      this.x += this.vx * t;
      this.y += this.vy * t;
    }
    let { w: s, h: c } = this.env();
    this.x = clampTo(this.x, 12, s - 12);
    this.y = clampTo(this.y, 12, c - 12);
    let l = this.w,
      u = l * 0.8,
      d = this.landed ? 0 : Math.sin(e / 90) * 2.6 + Math.sin(e / 330) * 3.5,
      f = this.landed ? 0 : clampTo(this.vx * 0.09, -24, 24);
    this.el.style.transform = `translate3d(${(this.x - l / 2).toFixed(1)}px, ${(this.y - u / 2 + d).toFixed(1)}px, 0) rotate(${f.toFixed(1)}deg)`;
    this.el.classList.toggle("is-landed", this.landed);
    !this.landed &&
      e > this.nextSpark &&
      ((this.nextSpark = e + rnd(260, 520)),
      twinkle(this.x, this.y + d + u * 0.15));
    this.raf = requestAnimationFrame(this.step);
  };
};
const CatController = class {
  x = -200;
  y = 0;
  facing = 1;
  lift = 0;
  size = 110;
  onBite;
  onPoke;
  el = null;
  gen = 0;
  ac = new AbortController();
  pending = null;
  scene = {
    mode: "intro",
  };
  sceneAt = 0;
  idleCount = 0;
  lastIdle = "";
  attacking = false;
  entered = false;
  bubbleTimer = 0;
  bubbleW = 0;
  pose = "walk";
  fly = null;
  flyFocus = false;
  played = false;
  entering = false;
  videoFrame = null;
  pointer = {
    x: 0,
    y: 0,
  };
  pointerAt = -1000000000;
  lookRaf = 0;
  lookAt = 0;
  lx = 0;
  ly = 0;
  mount(e) {
    this.el = e;
    this.measure();
    this.entered ||
      ((this.x = -this.size), (this.y = window.innerHeight * 0.8));
    Object.assign(e.root.dataset, {
      pose: "walk",
      gait: "still",
      act: "",
      expr: "normal",
      mouth: "w",
    });
    this.render();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
  }
  start() {
    let e = ++this.gen;
    this.el &&
      !this.fly &&
      ((this.fly = new Butterfly(this.el.layer, () => {
        let e = this.scene.content?.();
        return {
          w: window.innerWidth,
          h: window.innerHeight,
          avoid: e ? [e.getBoundingClientRect()] : [],
        };
      })),
      this.fly.setSize(clampTo(this.size * 0.32, 42, 62)));
    cancelAnimationFrame(this.lookRaf);
    this.lookRaf = requestAnimationFrame(this.lookLoop);
    this.loop(e);
  }
  destroy() {
    this.gen++;
    this.ac.abort();
    this.fly?.destroy();
    this.fly = null;
    cancelAnimationFrame(this.lookRaf);
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("pointerdown", this.onPointerDown);
    window.removeEventListener("pointermove", this.onPointerMove);
    this.el = null;
  }
  setScene(e) {
    this.scene = e;
    this.sceneAt = performance.now();
    this.idleCount = 1;
  }
  noAttempt(e) {
    this.entered &&
      !this.attacking &&
      this.interrupt(e <= 1 ? this.grumble : this.attack);
  }
  celebrate() {
    this.entered && this.interrupt(this.yay);
  }
  watchVideo(e) {
    this.videoFrame = e;
    this.entered && this.interrupt(this.watch);
  }
  videoEnded() {
    this.fly?.wander();
    this.entered && this.interrupt(this.yay);
  }
  async loop(e) {
    for (await nextFrame(); e === this.gen;) {
      let t = this.pending ?? this.auto;
      this.pending = null;
      let n = new AbortController();
      this.ac = n;
      try {
        await t(n.signal);
      } catch (e) {
        e !== CANCEL && console.error(e);
      }
      if (e !== this.gen) break;
      this.set("gait", "still");
      this.set("act", "");
      this.set("expr", "normal");
      this.set("mouth", "w");
      this.lift = 0;
      this.render();
      await nextFrame();
    }
  }
  interrupt(e) {
    this.pending = e;
    this.entering || this.ac.abort();
  }
  measure() {
    this.size = Math.round(
      clampTo(
        Math.min(window.innerWidth, window.innerHeight * 1.2) * 0.36,
        130,
        230,
      ),
    );
    this.el?.root.style.setProperty("--cat", `${this.size}px`);
  }
  onResize = () => {
    this.measure();
    this.fly?.setSize(clampTo(this.size * 0.32, 42, 62));
    let e = this.bounds();
    this.entered &&
      ((this.x = clampTo(this.x, e.minX, e.maxX)),
      (this.y = clampTo(this.y, e.minY, e.maxY)));
    this.render();
  };
  onPointerDown = (e) => {
    if (
      !this.entered ||
      this.attacking ||
      !this.el ||
      e.target?.closest("button, a, video")
    )
      return;
    let t = this.size * CAT_ASPECT;
    Math.hypot(e.clientX - this.x, e.clientY - (this.y - t * 0.5 - this.lift)) <
      this.size * 0.48 && this.interrupt(this.pet);
  };
  onPointerMove = (e) => {
    this.pointer = {
      x: e.clientX,
      y: e.clientY,
    };
    this.pointerAt = performance.now();
  };
  lookLoop = () => {
    this.lookRaf = requestAnimationFrame(this.lookLoop);
    let e = this.el;
    if (!e || !this.entered) return;
    let t = performance.now();
    if (t - this.lookAt < 50) return;
    this.lookAt = t;
    let n = this.headPoint(),
      r = this.fly,
      i = null,
      a = this.scene.look?.() ?? null;
    r && this.flyFocus
      ? (i = {
          x: r.x,
          y: r.y,
        })
      : a
        ? (i = a)
        : r && Math.hypot(r.x - n.x, r.y - n.y) < this.size * 2.6
          ? (i = {
              x: r.x,
              y: r.y,
            })
          : t - this.pointerAt < 2500 && (i = this.pointer);
    let o = 0,
      s = 0;
    if (i) {
      let e = i.x - n.x,
        t = i.y - n.y,
        r = Math.hypot(e, t) || 1,
        a = Math.min(1, r / (this.size * 0.45)) * 2.5;
      o = (e / r) * a * this.facing;
      s = (t / r) * a * 0.75;
    }
    (Math.abs(o - this.lx) > 0.08 || Math.abs(s - this.ly) > 0.08) &&
      ((this.lx = o),
      (this.ly = s),
      e.root.style.setProperty("--lx", `${o.toFixed(2)}px`),
      e.root.style.setProperty("--ly", `${s.toFixed(2)}px`));
  };
  bounds() {
    let e = this.size,
      t = e * CAT_ASPECT;
    return {
      minX: e / 2 + 6,
      maxX: window.innerWidth - e / 2 - 6,
      minY: t + 10,
      maxY: window.innerHeight - 12,
    };
  }
  set(e, t) {
    this.el &&
      ((this.el.root.dataset[e] = t),
      e === "pose" && ((this.pose = t), this.placeBubble()));
  }
  render() {
    if (!this.el) return;
    let e = this.size,
      t = e * CAT_ASPECT;
    this.el.root.style.transform = `translate3d(${(this.x - e / 2).toFixed(1)}px, ${(this.y - t).toFixed(1)}px, 0)`;
    this.el.flip.style.transform = `scaleX(${this.facing})`;
    this.el.lift.style.transform = `translateY(${(-this.lift).toFixed(1)}px)`;
    let n = 1 - Math.min(this.lift, 90) / 150;
    this.el.shadow.style.transform = `translateX(-50%) scale(${n.toFixed(3)})`;
    this.el.shadow.style.opacity = (0.25 + 0.75 * n).toFixed(2);
    this.placeBubble();
  }
  headPct() {
    return this.pose === "sit" ? 50 : this.facing > 0 ? 72 : 28;
  }
  placeBubble() {
    if (!this.el) return;
    let e = this.headPct();
    this.el.zzz.style.left = `${e + (this.facing > 0 ? 6 : -6)}%`;
    let t = this.el.bubble;
    t.style.left = `${e}%`;
    let n = this.bubbleW / 2,
      r = this.x - this.size / 2 + (e / 100) * this.size,
      i = clampTo(r, n + 8, window.innerWidth - n - 8) - r;
    t.style.setProperty("--bx", `${i.toFixed(0)}px`);
  }
  headPoint() {
    let e = this.size * CAT_ASPECT;
    return this.pose === "sit"
      ? {
          x: this.x,
          y: this.y - e * 0.65 - this.lift,
        }
      : {
          x: this.x + this.facing * this.size * 0.236,
          y: this.y - e * 0.576 - this.lift,
        };
  }
  nosePoint() {
    let e = this.size / 220,
      t = this.y - this.size * CAT_ASPECT - this.lift;
    return this.pose === "sit"
      ? {
          x: this.x,
          y: t + 71 * e,
        }
      : {
          x: this.x + this.facing * (166.7 - 110) * e,
          y: t + 83 * e,
        };
  }
  say(e, t = 1800) {
    if (!this.el) return;
    let n = this.el.bubble;
    n.textContent = e;
    n.classList.add("is-shown");
    this.bubbleW = n.offsetWidth;
    this.placeBubble();
    window.clearTimeout(this.bubbleTimer);
    this.bubbleTimer = window.setTimeout(
      () => n.classList.remove("is-shown"),
      t,
    );
  }
  hearts(e = 3) {
    let t = this.headPoint();
    floatHearts(t.x, t.y - this.size * 0.25, e, this.size * 0.16);
  }
  face(e) {
    Math.abs(e - this.x) < 2 ||
      ((this.facing = e > this.x ? 1 : -1), this.render());
  }
  wait(e, t) {
    return new Promise((n, r) => {
      if (t.aborted) return r(CANCEL);
      let i = () => {
          window.clearTimeout(a);
          r(CANCEL);
        },
        a = window.setTimeout(() => {
          t.removeEventListener("abort", i);
          n();
        }, e);
      t.addEventListener("abort", i, {
        once: true,
      });
    });
  }
  moveTo(e, t, n, r, i = "walk", a = 1 / 0) {
    let o = this.bounds(),
      s = performance.now();
    return (
      (e = clampTo(e, o.minX, o.maxX)),
      (t = clampTo(t, o.minY, o.maxY)),
      this.set("pose", "walk"),
      this.set("gait", i),
      new Promise((i, o) => {
        let c = performance.now(),
          l = (u) => {
            if (r.aborted) return o(CANCEL);
            let d = Math.min(0.05, (u - c) / 1000);
            c = u;
            let f = e - this.x,
              p = t - this.y,
              m = Math.hypot(f, p);
            if (m <= 1.5)
              return (
                (this.x = e),
                (this.y = t),
                this.set("gait", "still"),
                this.render(),
                i()
              );
            if (u - s > a) return i();
            let h = Math.min(m, n * d);
            this.x += (f / m) * h;
            this.y += (p / m) * h;
            Math.abs(f) > 2 && (this.facing = f > 0 ? 1 : -1);
            this.render();
            requestAnimationFrame(l);
          };
        requestAnimationFrame(l);
      })
    );
  }
  hop(e, t, n, r, i) {
    let a = this.bounds();
    e = clampTo(e, a.minX, a.maxX);
    t = clampTo(t, a.minY, a.maxY);
    let o = this.x,
      s = this.y;
    this.face(e);
    this.set("pose", "walk");
    this.set("gait", "leap");
    let c = performance.now();
    return new Promise((a, l) => {
      let u = (d) => {
        if (i.aborted) return l(CANCEL);
        let f = Math.min(1, (d - c) / r),
          p = f < 0.5 ? 2 * f * f : 1 - (-2 * f + 2) ** 2 / 2;
        if (
          ((this.x = o + (e - o) * p),
          (this.y = s + (t - s) * p),
          (this.lift = Math.sin(Math.PI * f) * n),
          this.render(),
          f >= 1)
        )
          return (
            (this.lift = 0),
            this.set("gait", "still"),
            this.render(),
            a()
          );
        requestAnimationFrame(u);
      };
      requestAnimationFrame(u);
    });
  }
  spot(e) {
    let t = this.bounds(),
      n = this.size,
      r = n * CAT_ASPECT,
      i = window.innerHeight,
      a = [this.scene.content?.(), this.scene.no?.()]
        .filter((e) => !!e)
        .map((e) => e.getBoundingClientRect()),
      o = {
        x: this.x,
        y: this.y,
      },
      s = -1 / 0;
    for (let c = 0; c < 18; c++) {
      let c = e
          ? clampTo(this.x + rnd(-e, e), t.minX, t.maxX)
          : rnd(t.minX, t.maxX),
        l = e
          ? clampTo(
              this.y + rnd(-e * 0.6, e * 0.6),
              Math.max(t.minY, i * 0.3),
              t.maxY,
            )
          : rnd(Math.max(t.minY, i * 0.42), t.maxY),
        u = {
          left: c - n * 0.4,
          right: c + n * 0.4,
          top: l - r,
          bottom: l,
        },
        d =
          rnd(0, 40) + Math.min(Math.hypot(c - this.x, l - this.y), 260) * 0.2;
      for (let e of a) rectsOverlap(u, e, 8) && (d -= 1000);
      d > s &&
        ((s = d),
        (o = {
          x: c,
          y: l,
        }));
    }
    return o;
  }
  auto = async (e) => {
    if (!this.entered) return this.enter(e);
    let t = this.scene;
    if (
      t.mode === "question" &&
      t.yes?.() &&
      performance.now() - this.sceneAt > 3200 &&
      this.idleCount >= 1
    )
      return ((this.idleCount = 0), this.tease(e));
    if ((this.idleCount++, !this.played && this.fly))
      return ((this.played = true), this.batFly(e));
    let n = t.mode === "video",
      r = [
        ["wander", n ? 0.5 : 3, this.wander],
        ["lick", 1.6, this.lick],
        ["nap", n ? 2.6 : t.mode === "finale" ? 1.6 : 0.8, this.nap],
        ["pounce", n ? 0 : 1.4, this.pounce],
        ["chase", +!n, this.chaseTail],
        ["meow", n ? 0.4 : 1.2, this.meow],
        ["chaseFly", n ? 0 : 1.6, this.chaseFly],
        ["batFly", n ? 0 : 1.4, this.batFly],
        ["watchFly", +!n, this.watchFly],
        ["noseBoop", n ? 0 : 0.8, this.noseBoop],
        ["zoomies", n ? 0 : t.mode === "finale" ? 0.3 : 0.8, this.zoomies],
        ["yawn", 1, this.yawn],
      ].filter((e) => e[0] !== this.lastIdle && e[1] > 0),
      i = rnd(
        0,
        r.reduce((e, t) => e + t[1], 0),
      );
    for (let [t, n, a] of r)
      if (((i -= n), i <= 0)) return ((this.lastIdle = t), a(e));
  };
  enter = async (e) => {
    this.entered = true;
    this.entering = true;
    try {
      await this.walkIn(e);
    } finally {
      this.entering = false;
    }
  };
  walkIn = async (e) => {
    let t = this.bounds();
    this.x = -this.size;
    this.y = clampTo(window.innerHeight * 0.82, t.minY, t.maxY);
    this.facing = 1;
    this.render();
    this.el?.root.classList.add("is-visible");
    await this.moveTo(
      clampTo(window.innerWidth * 0.26, t.minX, 190),
      this.y,
      120,
      e,
    );
    this.set("pose", "sit");
    this.set("mouth", "open");
    this.say("meow! 💕", 1600);
    await this.wait(550, e);
    this.set("mouth", "w");
    await this.wait(1000, e);
  };
  wander = async (e) => {
    let t = this.spot();
    await this.moveTo(t.x, t.y, rnd(80, 115), e);
    this.set("pose", "sit");
    await this.wait(rnd(900, 1500), e);
    Math.random() < 0.5 &&
      (this.set("act", "tilt"), await this.wait(1200, e), this.set("act", ""));
    await this.wait(rnd(400, 900), e);
  };
  lick = async (e) => {
    if (Math.random() < 0.6) {
      let t = this.spot(160);
      await this.moveTo(t.x, t.y, 90, e);
    }
    this.set("pose", "sit");
    await this.wait(300, e);
    this.set("act", "lick");
    this.set("mouth", "tongue");
    this.set("expr", "closed");
    await this.wait(2600, e);
    this.set("act", "");
    this.set("mouth", "w");
    this.set("expr", "normal");
    await this.wait(600, e);
  };
  nap = async (e) => {
    let t = this.spot();
    await this.moveTo(t.x, t.y, 90, e);
    this.set("pose", "loaf");
    this.set("expr", "closed");
    this.set("act", "nap");
    await this.wait(rnd(3200, 4400), e);
    this.set("act", "stretch");
    this.set("pose", "walk");
    this.set("mouth", "open");
    await this.wait(1000, e);
    this.set("act", "");
    this.set("mouth", "w");
    this.set("expr", "normal");
    await this.wait(300, e);
  };
  pounce = async (e) => {
    let t = this.spot(220);
    this.face(t.x);
    this.set("pose", "walk");
    this.set("gait", "crouch");
    this.set("act", "wiggle");
    this.set("expr", "wide");
    await this.wait(1000, e);
    this.set("act", "");
    await this.hop(t.x, t.y, 55, 480, e);
    this.set("expr", "happy");
    await this.wait(700, e);
  };
  chaseTail = async (e) => {
    this.set("pose", "walk");
    this.set("gait", "run");
    this.set("expr", "wide");
    this.say("?!", 900);
    let t = this.bounds(),
      n = this.size * 0.22,
      r = clampTo(this.x, t.minX + n * 2, t.maxX),
      i = clampTo(this.y, t.minY, t.maxY - n * 0.5),
      a = performance.now();
    await new Promise((t, o) => {
      let s = (c) => {
        if (e.aborted) return o(CANCEL);
        let l = (c - a) / 1900;
        if (l >= 1) return t();
        let u = l * Math.PI * 2 * 2.5;
        this.x = r + Math.cos(u) * n - n;
        this.y = i + Math.sin(u) * n * 0.45;
        this.facing = -Math.sin(u) >= 0 ? 1 : -1;
        this.render();
        requestAnimationFrame(s);
      };
      requestAnimationFrame(s);
    });
    this.set("gait", "still");
    this.set("pose", "sit");
    this.set("expr", "happy");
    this.say("eee! 😹", 1200);
    await this.wait(1200, e);
  };
  meow = async (e) => {
    this.set("pose", "sit");
    this.set("mouth", "open");
    this.say(pickOne(content.cat.meow), 1400);
    await this.wait(550, e);
    this.set("mouth", "w");
    await this.wait(1100, e);
  };
  zoomies = async (e) => {
    this.set("expr", "wide");
    for (let t = 0; t < 3; t++) {
      let t = this.spot();
      await this.moveTo(t.x, t.y, 470, e, "run");
    }
    this.set("pose", "sit");
    this.set("mouth", "tongue");
    this.set("expr", "happy");
    await this.wait(1300, e);
  };
  yawn = async (e) => {
    this.set("pose", "sit");
    this.set("act", "yawn");
    this.set("mouth", "open");
    this.set("expr", "closed");
    await this.wait(1500, e);
    this.set("act", "");
    this.set("mouth", "w");
    this.set("expr", "normal");
    await this.wait(500, e);
  };
  async withFly(e) {
    let t = this.fly;
    if (t) {
      this.flyFocus = true;
      try {
        await e(t);
      } finally {
        this.flyFocus = false;
        t.wander();
      }
    }
  }
  watchFly = (e) =>
    this.withFly(async (t) => {
      this.set("pose", "sit");
      t.follow(
        () => ({
          x: clampTo(
            this.x + this.facing * this.size * 0.9,
            30,
            window.innerWidth - 30,
          ),
          y: this.y - this.size * CAT_ASPECT * 1.25,
        }),
        this.size * 0.35,
      );
      this.set("expr", "wide");
      this.set("act", "tilt");
      await this.wait(1500, e);
      this.set("act", "");
      await this.wait(900, e);
      this.set("act", "tilt");
      await this.wait(1000, e);
    });
  chaseFly = (e) =>
    this.withFly(async (t) => {
      let n = this.size * CAT_ASPECT,
        r = this.x < window.innerWidth / 2 ? 1 : -1;
      t.follow(
        () => ({
          x: clampTo(this.x + r * this.size * 0.95, 30, window.innerWidth - 30),
          y: this.y - n * 1.05,
        }),
        this.size * 0.2,
      );
      this.set("expr", "wide");
      this.say(pickOne(["!!", "butterfly! ✨", "mine!!"]), 1100);
      let i = performance.now();
      for (; performance.now() - i < 3600;) {
        let i = this.bounds();
        this.x > i.maxX - this.size * 0.7 && (r = -1);
        this.x < i.minX + this.size * 0.7 && (r = 1);
        await this.moveTo(
          t.x,
          clampTo(t.y + n * 1.05, i.minY, i.maxY),
          300,
          e,
          "run",
          350,
        );
      }
      let a = this.bounds();
      this.face(t.x);
      this.set("gait", "crouch");
      this.set("act", "wiggle");
      await this.wait(550, e);
      this.set("act", "");
      let o = t.x,
        s = clampTo(t.y + n * 0.85, a.minY, a.maxY);
      t.flee({
        x: this.x,
        y: this.y,
      });
      await this.hop(o, s, this.size * 0.45, 520, e);
      this.set("pose", "sit");
      this.set("expr", "plead");
      this.say(pickOne(["almost got it! 😿", "aww 🥺", "next time!"]), 1500);
      await this.wait(1500, e);
    });
  batFly = (e) =>
    this.withFly(async (t) => {
      if (Math.random() < 0.5) {
        let t = this.spot(180);
        await this.moveTo(t.x, t.y, 100, e);
      }
      this.set("pose", "sit");
      t.follow(
        () => ({
          x: this.x + this.facing * this.size * 0.3,
          y: this.y - this.size * CAT_ASPECT * 0.92,
        }),
        this.size * 0.12,
      );
      this.set("expr", "wide");
      await this.wait(1200, e);
      for (let n = 0; n < 3; n++) {
        this.set("act", "swat");
        await this.wait(230, e);
        t.bump();
        await this.wait(470, e);
        this.set("act", "");
        await this.wait(380, e);
      }
      this.set("expr", "happy");
      this.say(pickOne(["hee-hee 😸", "mrrp!", "play with me!"]), 1400);
      await this.wait(1000, e);
    });
  noseBoop = (e) =>
    this.withFly(async (t) => {
      if (
        (t.land(() => {
          let e = this.nosePoint();
          return {
            x: e.x,
            y: e.y + t.w * 0.14,
          };
        }),
        Math.random() < 0.5)
      ) {
        let t = this.spot(140);
        await this.moveTo(t.x, t.y, 90, e);
      }
      this.set("pose", "sit");
      this.set("expr", "wide");
      let n = performance.now();
      for (; !t.landed && performance.now() - n < 7000;)
        await this.wait(120, e);
      t.landed &&
        (this.set("expr", "cross"),
        this.say("…", 1900),
        await this.wait(2100, e),
        this.set("expr", "closed"),
        this.set("mouth", "open"),
        this.set("act", "sneeze"),
        this.say("achoo! 🤧", 1200),
        await this.wait(170, e),
        t.flee(this.headPoint()),
        await this.wait(650, e),
        this.set("act", ""),
        this.set("mouth", "w"),
        this.set("expr", "happy"),
        this.say("hee-hee 😸", 1200),
        await this.wait(1100, e));
    });
  watch = async (e) => {
    this.fly?.flee({
      x: this.x,
      y: this.y - this.size * CAT_ASPECT * 0.5,
    });
    await this.wait(950, e);
    let t = this.videoFrame?.();
    if (!t) return;
    let n = t.getBoundingClientRect(),
      r = this.bounds(),
      i = this.size * CAT_ASPECT,
      a,
      o;
    n.left - 8 > this.size * 0.55
      ? ((a = n.left - this.size * 0.26), (o = Math.min(n.bottom, r.maxY)))
      : window.innerWidth - n.right - 8 > this.size * 0.55
        ? ((a = n.right + this.size * 0.26), (o = Math.min(n.bottom, r.maxY)))
        : ((a = clampTo(n.left + n.width * 0.2, r.minX, r.maxX)),
          (o = Math.min(n.bottom + i + 4, r.maxY)));
    await this.moveTo(a, o, 220, e);
    this.set("pose", "sit");
    this.face(n.left + n.width / 2);
    this.fly?.land(() => {
      let e = this.videoFrame?.();
      if (!e) return null;
      let t = e.getBoundingClientRect();
      return {
        x: t.right - 20,
        y: t.top + 6,
      };
    });
    this.set("expr", "happy");
    this.set("act", "happy");
    this.say("so cute 🥹💕", 1900);
    this.hearts(4);
    await this.wait(1500, e);
    this.set("act", "");
    this.set("expr", "normal");
    await this.wait(2500, e);
  };
  tease = async (e) => {
    let t = this.fly;
    t?.land(() => {
      let e = this.scene.yes?.();
      if (!e) return null;
      let n = e.getBoundingClientRect();
      return {
        x: n.right - Math.min(26, n.width * 0.2),
        y: n.top - t.w * 0.18,
      };
    });
    try {
      await this.teaseRounds(e);
    } finally {
      t?.wander();
    }
  };
  teaseRounds = async (e) => {
    for (let t = 0; t < 3; t++) {
      let t = this.scene.yes?.();
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = this.bounds(),
        i = this.size * 0.24 + 4,
        a = n.left - i,
        o = n.right + i,
        s = a >= r.minX,
        c = o <= r.maxX,
        l;
      l =
        s && c
          ? Math.abs(this.x - a) <= Math.abs(this.x - o)
            ? -1
            : 1
          : s
            ? -1
            : c
              ? 1
              : this.x < n.left + n.width / 2
                ? -1
                : 1;
      let u = l < 0 ? a : o,
        d = this.size * CAT_ASPECT,
        f = n.top + n.height / 2 + d * 0.4,
        p = this.scene.title?.();
      if (p) {
        let e = document.createRange();
        e.selectNodeContents(p);
        let t = e.getBoundingClientRect(),
          n = this.size * 0.22;
        u + n > t.left &&
          u - n < t.right &&
          (f = Math.max(f, t.bottom + 6 + d * 0.95));
      }
      f = Math.min(f, r.maxY);
      Math.hypot(u - this.x, f - this.y) > 8 &&
        (await this.moveTo(u, f, 170, e));
      this.facing = l < 0 ? 1 : -1;
      this.render();
      this.set("pose", "sit");
      await this.wait(250, e);
      this.set("act", "bat");
      this.set("expr", "wide");
      for (let t = 0; t < 3; t++) {
        await this.wait(180, e);
        this.onPoke?.();
        await this.wait(620, e);
      }
      this.set("act", "");
      this.set("expr", "plead");
      this.say(pickOne(content.cat.tease), 2100);
      await this.wait(2000, e);
      this.set("act", "rub");
      this.set("expr", "happy");
      this.hearts(2);
      await this.wait(1300, e);
      this.set("act", "");
      this.set("expr", "normal");
      await this.wait(500, e);
    }
  };
  grumble = async (e) => {
    let t = this.scene.no?.();
    if ((this.set("pose", "sit"), t)) {
      let e = t.getBoundingClientRect();
      this.face(e.left + e.width / 2);
    }
    this.set("expr", "angry");
    this.set("mouth", "open");
    this.say(pickOne(content.cat.angry), 1500);
    await this.wait(450, e);
    this.set("mouth", "w");
    await this.wait(1100, e);
  };
  attack = async (e) => {
    this.attacking = true;
    this.fly?.flee({
      x: this.x,
      y: this.y - this.size * CAT_ASPECT * 0.5,
    });
    try {
      let t = () => this.scene.no?.() ?? null,
        n = t();
      if (!n) return;
      let r = n.getBoundingClientRect();
      this.set("pose", "sit");
      this.face(r.left + r.width / 2);
      this.set("expr", "angry");
      this.set("mouth", "open");
      this.say(pickOne(content.cat.angry), 1300);
      await this.wait(600, e);
      this.set("mouth", "w");
      let i = this.size * CAT_ASPECT;
      for (let a = 0; a < 3; a++) {
        if (((n = t()), !n)) return;
        r = n.getBoundingClientRect();
        let a = r.left + r.width / 2,
          o =
            (this.x < a ? -1 : 1) < 0
              ? r.left - this.size * 0.35
              : r.right + this.size * 0.35,
          s = r.top + r.height / 2 + i * 0.576;
        await this.moveTo(o, s, 440, e, "run");
        let c = n.getBoundingClientRect();
        if (Math.abs(c.left - r.left) < 20 && Math.abs(c.top - r.top) < 20)
          break;
      }
      if (((n = t()), !n)) return;
      r = n.getBoundingClientRect();
      let a = r.left + r.width / 2;
      this.face(a);
      this.set("gait", "crouch");
      this.set("act", "wiggle");
      await this.wait(550, e);
      this.set("act", "");
      let o = a - this.facing * (r.width / 2 + this.size * 0.12),
        s = r.top + r.height / 2 + i * 0.576;
      await this.hop(o, s, 34, 360, e);
      this.set("act", "bite");
      this.set("mouth", "chomp");
      this.set("expr", "angry");
      this.say(pickOne(content.cat.bite), 1400);
      this.onBite?.("bite", this.headPoint());
      await this.wait(950, e);
      this.set("act", "");
      this.set("mouth", "w");
      this.onBite?.("flee", {
        x: this.x,
        y: this.y - i * 0.5,
      });
      await this.wait(300, e);
      this.set("pose", "sit");
      this.set("expr", "happy");
      this.say(pickOne(content.cat.afterBite), 1900);
      await this.wait(1700, e);
    } finally {
      this.attacking = false;
    }
  };
  yay = (e) =>
    this.withFly(async (t) => {
      this.set("pose", "sit");
      this.set("expr", "happy");
      this.set("mouth", "open");
      this.set("act", "happy");
      this.say(pickOne(content.cat.yay), 1700);
      this.hearts(4);
      t.follow(
        () => ({
          x: this.x,
          y: this.y - this.size * CAT_ASPECT * 1.05,
        }),
        this.size * 0.34,
      );
      await this.wait(1600, e);
    });
  pet = async (e) => {
    this.set("pose", "sit");
    this.set("expr", "happy");
    this.set("act", "purr");
    this.say(pickOne(content.cat.pet), 1600);
    this.hearts(3);
    await this.wait(1700, e);
  };
};
function Paper({ from: e, onZoomed: t, children: n }) {
  let r = useRef(null),
    i = useRef(t);
  return (
    (i.current = t),
    useLayoutEffect(() => {
      let t = r.current;
      if (!t || !e) {
        i.current();
        return;
      }
      let n = e.width / window.innerWidth,
        a = e.height / window.innerHeight,
        o = t.animate(
          [
            {
              transform: `translate(${e.left}px, ${e.top}px) scale(${n}, ${a})`,
              borderRadius: "10px",
              boxShadow: "0 30px 60px rgba(20,0,5,.5)",
            },
            {
              transform: "translate(0px, 0px) scale(1, 1)",
              borderRadius: "0px",
              boxShadow: "0 0 0 rgba(20,0,5,0)",
            },
          ],
          {
            duration: 1050,
            easing: "cubic-bezier(.7,0,.2,1)",
          },
        );
      return ((o.onfinish = () => i.current()), () => o.cancel());
    }, [e]),
    (
      <div className="ll-paper" ref={r}>
        <Doodles />
        {n}
      </div>
    )
  );
}
function Doodles() {
  return (
    <div className="ll-doodles" aria-hidden="true">
      <svg className="ll-doodle d1" viewBox="0 0 60 50">
        <path d="M30 44C14 34 5 25 5 16 5 9 10 4 17 4 22 4 27 7 30 12 33 7 38 4 43 4 50 4 55 9 55 16 55 25 46 34 30 44Z" />
        <path d="M24 12C20 12 17 15 17 18" />
      </svg>
      <svg className="ll-doodle d2" viewBox="0 0 40 40">
        <path d="M20 3L23.5 15 36 16 26 23.5 29.5 36 20 28.5 10.5 36 14 23.5 4 16 16.5 15Z" />
      </svg>
      <svg className="ll-doodle d3" viewBox="0 0 80 40">
        <path d="M4 30C14 8 26 8 30 20S44 34 52 18 70 6 76 14" />
      </svg>
      <svg className="ll-doodle d4" viewBox="0 0 60 50">
        <path d="M30 44C14 34 5 25 5 16 5 9 10 4 17 4 22 4 27 7 30 12 33 7 38 4 43 4 50 4 55 9 55 16 55 25 46 34 30 44Z" />
      </svg>
      <svg className="ll-doodle d5" viewBox="0 0 30 30">
        <path d="M15 2V28M2 15H28M6 6L24 24M24 6L6 24" />
      </svg>
      <svg className="ll-doodle d6" viewBox="0 0 40 40">
        <path d="M20 3L23.5 15 36 16 26 23.5 29.5 36 20 28.5 10.5 36 14 23.5 4 16 16.5 15Z" />
      </svg>
    </div>
  );
}
function App() {
  let [e, t] = useState("envelope"),
    [n, r] = useState(null),
    [i, a] = useState("questions"),
    o = useRef(null);
  o.current ||= new CatController();
  let s = o.current;
  return (
    useEffect(() => music.prepare(), []),
    (
      <div className="ll-root">
        {e !== "letter" && (
          <Envelope
            onOpenStart={() => music.start()}
            leaving={e === "zoom"}
            onLetterOut={(e) => {
              r(e);
              t("zoom");
            }}
          />
        )}
        {e !== "envelope" && (
          <Paper from={n} onZoomed={() => t("letter")}>
            {e === "letter" && (
              <>
                {i === "questions" ? (
                  <Questions cat={s} onDone={() => a("finale")} />
                ) : (
                  <Finale cat={s} />
                )}
                <CatLayer ctrl={s} />
              </>
            )}
          </Paper>
        )}
      </div>
    )
  );
}
function Root() {
  return <App />;
}
const LAB_POSES = [
  {
    label: "sit",
    pose: "sit",
  },
  {
    label: "sit wide",
    pose: "sit",
    expr: "wide",
  },
  {
    label: "sit plead",
    pose: "sit",
    expr: "plead",
  },
  {
    label: "sit happy",
    pose: "sit",
    expr: "happy",
  },
  {
    label: "angry hiss",
    pose: "sit",
    expr: "angry",
    mouth: "open",
  },
  {
    label: "bat",
    pose: "sit",
    act: "bat",
    expr: "wide",
    t: "-0.18s",
  },
  {
    label: "lick",
    pose: "sit",
    act: "lick",
    expr: "closed",
    mouth: "tongue",
    t: "-0.7s",
  },
  {
    label: "cross-eyed",
    pose: "sit",
    expr: "cross",
  },
  {
    label: "walk",
    pose: "walk",
    gait: "still",
  },
  {
    label: "walk stride",
    pose: "walk",
    gait: "walk",
    t: "-0.1s",
  },
  {
    label: "walk left",
    pose: "walk",
    gait: "walk",
    t: "-0.3s",
    flip: true,
  },
  {
    label: "bite",
    pose: "walk",
    act: "bite",
    expr: "angry",
    mouth: "chomp",
    t: "-0.2s",
  },
  {
    label: "loaf nap",
    pose: "loaf",
    act: "nap",
    expr: "closed",
  },
  {
    label: "crouch",
    pose: "walk",
    gait: "crouch",
    act: "wiggle",
    expr: "wide",
  },
  {
    label: "leap",
    pose: "walk",
    gait: "leap",
    expr: "wide",
  },
  {
    label: "swat up",
    pose: "sit",
    act: "swat",
    expr: "wide",
    t: "-0.21s",
  },
];
function CatLab() {
  return (
    <div
      style={{
        background: "#fbf4e9",
        minHeight: "100vh",
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(4, 330px)",
        gap: 18,
      }}
    >
      <style>
        {
          ".lab * { animation-play-state: paused !important; animation-delay: var(--t, 0s) !important; transition: none !important; }"
        }
      </style>
      {LAB_POSES.map((e) => (
        <div
          key={e.label}
          className="lab"
          style={{
            "--t": e.t ?? "0s",
            position: "relative",
            height: 290,
            background: "#f7ecdd",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 6,
              left: 10,
              font: "600 13px system-ui",
              color: "#7a5a4a",
            }}
          >
            {e.label}
          </div>
          <div
            className="ll-cat"
            data-pose={e.pose}
            data-gait={e.gait ?? "still"}
            data-act={e.act ?? ""}
            data-expr={e.expr ?? "normal"}
            data-mouth={e.mouth ?? "w"}
            style={{
              "--cat": "310px",
              position: "absolute",
              left: 10,
              top: 30,
            }}
          >
            <div
              className="ll-cat-flip"
              style={{
                transform: e.flip ? "scaleX(-1)" : undefined,
              }}
            >
              <div className="ll-cat-lift">
                <div className="ll-cat-act">
                  <CatSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {location.search.includes("catlab") ? <CatLab /> : <Root />}
  </StrictMode>,
);
