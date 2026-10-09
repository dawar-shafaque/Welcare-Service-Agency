export default function LogoMark({ className = '', size = 220 }) {
  return (
    <svg
      viewBox="0 0 420 420"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Welcare Service Agency logo"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M80 201C80 126 136 80 210 80C284 80 340 126 340 201C340 283 283 334 210 350C137 334 80 283 80 201Z"
          fill="#1f4d3f"
          opacity="0.96"
        />
        <path
          d="M110 202C110 154 154 120 210 120C266 120 310 154 310 202C310 258 263 300 210 314C157 300 110 258 110 202Z"
          fill="#d3b073"
          opacity="0.82"
        />
        <path
          d="M84 200L210 90L336 200H84Z"
          fill="#1f4d3f"
        />
        <path
          d="M138 120L210 62L282 120H138Z"
          fill="#1f4d3f"
          opacity="0.92"
        />
        <path d="M126 200H294V270H126V200Z" fill="#1f4d3f" />
        <path d="M160 200H260V270H160V200Z" fill="#f5efe4" opacity="0.9" />

        <rect x="150" y="170" width="26" height="26" rx="4" fill="#f5efe4" />
        <rect x="243" y="170" width="26" height="26" rx="4" fill="#f5efe4" />
        <rect x="194" y="170" width="32" height="32" rx="6" fill="#f5efe4" />

        <circle cx="160" cy="238" r="18" fill="#d2b071" />
        <circle cx="260" cy="238" r="18" fill="#d2b071" />
        <path d="M132 286C142 250 158 236 174 236C188 236 202 248 208 270L206 300H136L132 286Z" fill="#f5efe4" />
        <path d="M288 286C278 250 262 236 246 236C232 236 218 248 212 270L214 300H284L288 286Z" fill="#f5efe4" />

        <path d="M210 252C186 252 172 266 172 286V322H248V286C248 266 234 252 210 252Z" fill="#f5efe4" />
        <path d="M177 278C186 268 198 264 210 264C222 264 234 268 243 278" stroke="#1f4d3f" strokeWidth="8" fill="none" />

        <path d="M124 311C137 317 157 320 176 320C200 320 214 308 210 284C205 259 184 252 162 248C142 244 127 246 119 257C110 268 112 286 124 311Z" fill="#1f4d3f" />
        <path d="M296 311C283 317 263 320 244 320C220 320 206 308 210 284C215 259 236 252 258 248C278 244 293 246 301 257C310 268 308 286 296 311Z" fill="#1f4d3f" />

        <path d="M92 282C120 298 144 305 168 304C152 328 130 343 103 349C74 342 62 321 66 300C74 301 83 293 92 282Z" fill="#1f4d3f" />
        <path d="M328 282C300 298 276 305 252 304C268 328 290 343 317 349C346 342 358 321 354 300C346 301 337 293 328 282Z" fill="#1f4d3f" />
      </g>
    </svg>
  );
}
