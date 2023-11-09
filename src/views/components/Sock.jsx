const React = require("react");

const Sock = ({
  id,
  design = { id: 0, pictureUrl: "", colorCode: "#FFFFFF", printUrl: "" },
  width = "400",
}) => (
  <div id={`sock${id || design.id}`}>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${width}`}
      viewBox="0 0 672.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <defs>
        <pattern
          id="print"
          patternUnits="userSpaceOnUse"
          width={`${25 * width}`}
          height={`${25 * width}`}
        >
          <rect
            className="color-rect"
            x="0"
            y="0"
            width={`${25 * width}`}
            height={`${25 * width}`}
            fill={`${design.colorCode}`}
          />
          <image
            className="print-image"
            href={`${design.printUrl}`}
            x="0"
            y="0"
            width={`${25 * width}`}
            height={`${25 * width}`}
          />
        </pattern>
      </defs>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        stroke="black"
        strokeWidth={`${Math.floor((1 / 4) * width)}`}
      >
        <path
          fill="url(#print)"
          d="M5420 12789 c-41 -5 -154 -21 -250 -35 -138 -20 -243 -27 -495 -34
-438 -13 -696 -25 -1355 -65 -311 -19 -719 -42 -907 -50 -436 -19 -603 -42
-763 -105 -190 -75 -298 -169 -370 -325 -93 -197 -101 -369 -55 -1110 20 -310
15 -381 -50 -865 -76 -560 -94 -800 -75 -1013 21 -246 81 -406 193 -518 114
-115 236 -181 397 -218 132 -30 194 -62 224 -114 55 -94 76 -245 76 -534 0
-295 -22 -464 -120 -951 -33 -163 -85 -445 -115 -627 -115 -692 -251 -1142
-509 -1679 -100 -208 -207 -400 -463 -826 -417 -694 -534 -934 -637 -1301 -87
-313 -155 -755 -142 -929 25 -326 222 -687 540 -987 377 -355 838 -543 1211
-494 772 102 1387 539 1952 1386 132 198 198 308 453 750 654 1137 952 1536
1535 2058 309 277 390 354 472 451 232 269 322 480 357 841 29 291 39 545 33
840 -10 481 -50 820 -142 1186 -35 139 -74 239 -190 489 -151 325 -199 483
-193 635 6 165 71 257 314 442 230 175 293 249 341 402 25 77 28 101 27 226 0
176 -24 286 -119 540 -37 99 -89 241 -117 315 -121 324 -136 487 -90 935 10
99 16 250 16 395 0 275 -9 324 -96 500 -44 88 -65 118 -132 185 -91 91 -191
149 -316 185 -88 25 -317 35 -440 19z"
        />
      </g>
      <image
        className="picture-image"
        href={`${design.pictureUrl}`}
        x="28%"
        y="10%"
        width={`${width}`}
        height={`${width}`}
      />
    </svg>
  </div>
);
module.exports = Sock;
