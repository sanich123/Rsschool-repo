export function createCarIcon(color = 'blue') {
    return `<svg
              class="list-item__car"
              width="120"
              viewBox="0 0 1280 889"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,889.000000) scale(0.100000,-0.100000)"
                fill="${color}"
                stroke="none"
              >
                <path
                  d="M4530 8884 c-233 -7 -601 -25 -705 -34 -60 -5 -216 -14 -346 -20 -420 -18 -559 -62 -633 -199 -27 -50 -30 -52 -60 -47 -17 3 -121 8 -231 12 -279 10 -293 2 -296 -155 -2 -104 4 -116 63 -132 47 -12 49 -9 -69 -77 -67 -39 -76 -42 -148 -42 -81 0 -108 -9 -119 -37 -6 -14 -2 -13 14 5 40 42 50 30 50 -60 0 -75 -3 -87 -30 -127 -32 -47 -37 -44 -43 29 -3 42 -4 42 -5 -11 -3 -73 11 -85 108 -94 42 -3 81 -10 88 -13 13 -9 -48 -1483 -70 -1699 l-13 -122 -340 -4 c-250 -4 -368 -9 -445 -21 -312 -50 -492 -151 -572 -321 -29 -62 -31 -77 -39 -226 -4 -87 -13 -184 -19 -215 -13 -62 -19 -70 -192 -252 -246 -258 -430 -494 -444 -569 -8 -44 13 -68 79 -88 68 -20 92 -19 159 9 l58 24 55 -40 c30 -21 55 -40 55 -42 0 -2 -23 -41 -51 -87 -366 -604 -482 -1396 -310 -2109 162 -671 574 -1266 1141 -1644 493 -330 1063 -494 1640 -473 1176 44 2170 796 2545 1924 2 8 41 -3 116 -33 62 -24 116 -41 120 -37 4 5 9 17 11 28 3 20 12 20 683 22 l680 3 34 -81 c42 -98 140 -264 213 -362 316 -419 782 -693 1313 -772 109 -16 405 -23 476 -11 31 6 41 0 124 -70 279 -234 652 -409 1022 -480 188 -36 469 -44 663 -19 489 62 950 286 1293 629 455 455 700 1129 637 175 -70 697 -447 1307 -1031 1670 -243 151 -586 276 -861 314 l-48 6 0 47 c0 26 -3 64 -7 85 -6 37 -5 38 21 31 22 -5 26 -3 26 15 0 12 -11 33 -24 46 -21 21 -27 43 -40 137 -25 180 -79 359 -139 458 -78 131 -201 215 -367 253 -248 58 -1525 151 -2395 175 l-240 7 3 170 c1 94 7 510 13 925 l11 755 -21 53 c-19 48 -21 73 -21 252 l0 200 -42 30 c-47 34 -66 36 -130 15 l-45 -16 -7 -91 c-3 -50 -6 -139 -6 -199 0 -96 -3 -114 -28 -171 l-29 -63 -11 -700 c-7 -385 -15 -802 -19 -927 l-6 -228 -129 0 c-94 0 -130 3 -133 13 -2 6 -13 206 -25 442 -11 237 -25 509 -30 605 -15 285 -30 572 -40 785 -5 110 -12 234 -15 275 l-6 75 123 95 123 95 30 113 c16 62 36 117 44 121 16 10 13 15 -101 167 -80 109 -187 195 -325 261 -108 53 -131 56 -623 73 -300 11 -1504 20 -1710 14z m-2144 -321 c-2 -16 -8 -58 -11 -95 -4 -37 -10 -66 -15 -65 -4 1 -21 -15 -37 -35 -42 -52 -53 -36 -53 77 0 82 2 94 23 112 26 24 43 31 75 32 20 1 23 -3 18 -26z m305 -714 c-37 -398 -124 -1314 -151 -1583 -11 -109 -20 -203 -20 -207 0 -9 -393 -13 -402 -4 -2 3 -1 35 3 72 5 38 15 138 23 223 16 164 78 769 126 1233 16 154 31 282 35 285 30 30 411 317 413 312 2 -4 -11 -153 -27 -331z m366 -211 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m1 -355 c2 7 110 -70 132 -93 3 -3 25 -21 50 -40 25 -19 47 -37 50 -40 3 -3 25 -21 50 -40 25 -19 47 -37 50 -40 3 -3 21 -17 40 -31 19 -15 46 -37 60 -49 14 -12 37 -29 52 -38 15 -9 34 -30 42 -46 22 -44 20 -22 -10 110 -14 63 -24 119 -22 125 2 5 21 -71 42 -170 l39 -179 -33 -58 c-18 -33 -76 -120 -130 -194 -113 -157 -230 -331 -254 -377 -9 -18 -16 -46 -16 -63 0 -28 -2 -30 -37 -29 -55 0 -171 14 -178 20 -3 3 2 154 10 335 17 387 32 730 43 974 l7 175 5 -130 c3 -71 7 -126 8 -122z m1730 40 l-118 -4 2 -162 c1 -110 3 -145 8 -107 4 30 7 46 8 36 2 -19 36 -68 75 -109 12 -12 42 -47 67 -77 25 -30 47 -57 50 -60 3 -3 25 -30 50 -60 25 -30 51 -62 60 -70 8 -8 32 -36 53 -62 21 -26 43 -53 50 -60 7 -7 32 -38 57 -68 25 -30 50 -61 57 -68 7 -7 29 -34 50 -60 21 -26 45 -54 53 -62 9 -8 36 -40 60 -70 25 -30 50 -61 57 -68 7 -7 29 -34 50 -59 21 -26 55 -65 76 -88 20 -22 37 -43 37 -47 0 -4 14 -21 31 -37 19 -18 28 -35 23 -42 -4 -7 -3 -9 3 -6 6 4 28 -15 49 -41 21 -26 45 -54 54 -62 8 -8 31 -35 51 -60 20 -25 47 -56 59 -70 60 -67 69 -85 73 -145 2 -33 3 0 3 73 -1 72 2 132 5 132 4 0 9 -165 13 -367 3 -203 9 -412 12 -467 4 -62 3 -96 -3 -93 -5 4 -63 99 -129 213 l-118 207 -99 81 -98 81 4 115 4 115 56 122 c32 67 57 127 57 132 0 6 -7 28 -15 49 -13 33 -23 41 -64 54 l-48 15 -51 -46 c-45 -41 -69 -81 -201 -341 l-151 -295 0 125 0 126 -52 51 c-29 28 -125 98 -214 156 l-161 105 -7 368 c-3 203 -9 530 -13 727 l-6 357 124 -2 124 -2 -117 -3z m-1251 -155 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m661 -785 c7 -13 15 -23 18 -23 3 0 2 6 -2 13 -7 10 18 -5 36 -23 3 -3 25 -21 50 -40 25 -19 52 -40 60 -47 123 -98 130 -105 132 -131 1 -15 5 74 8 198 l6 225 3 -265 c1 -146 4 -273 6 -282 5 -25 0 -23 -90 30 l-80 48 -62 115 c-64 116 -72 136 -51 123 7 -4 8 -3 4 5 -4 6 -11 9 -15 7 -4 -3 -17 12 -28 32 -17 30 -22 61 -26 162 l-6 125 12 -125 c7 -69 18 -135 25 -147z m1739 -546 c-1 -45 -3 -5 -3 88 0 94 2 130 3 82 2 -48 2 -125 0 -170z m320 -104 c-2 -16 -4 -3 -4 27 0 30 2 43 4 28 2 -16 2 -40 0 -55z m10 -305 c-2 -35 -3 -7 -3 62 0 69 1 97 3 63 2 -35 2 -91 0 -125z m26 -269 c21 0 60 -58 52 -77 -9 -24 6 -6 49 58 20 30 36 51 36 46 0 -18 -82 -136 -91 -130 -5 3 -7 -1 -4 -8 3 -7 -8 -32 -23 -56 l-29 -43 -6 122 c-4 67 -6 161 -5 208 l2 86 3 -102 c3 -72 7 -103 16 -104z m237 -10 c44 -28 80 -53 80 -55 0 -6 -20 5 -105 60 -38 25 -67 46 -63 46 4 0 43 -23 88 -51z m145 -97 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z m5 -32 c-6 -11 -13 -20 -16 -20 -2 0 0 9 6 20 6 11 13 20 16 20 2 0 0 -9 -6 -20z m-71 -127 c-29 -54 -46 -92 -38 -86 13 11 20 8 38 -13 22 -25 22 -26 4 -41 -22 -18 39 17 127 72 87 55 90 57 90 52 0 -3 -61 -44 -136 -92 -132 -85 -136 -88 -164 -74 l-29 14 76 133 c41 72 77 132 80 132 2 0 -19 -44 -48 -97z m307 39 c-17 -16 -18 -16 -5 5 7 12 15 20 18 17 3 -2 -3 -12 -13 -22z"
                />
                <path
                  d="M4684 6765 c0 -60 1 -84 3 -52 2 32 2 81 0 110 -2 29 -3 3 -3 -58z"
                />
                <path
                  d="M5646 5853 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"
                />
                <path
                  d="M6291 5094 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"
                />
                <path
                  d="M1971 8114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"
                />
              </g>
            </svg>`
}
export function createFinishFlagIcon() {
    return `<svg
            class="list-item__svg-finish"
            width="100"
              id="finish-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <rect x="256" y="160" fill="black" width="80" height="80" />
                  <rect x="32" y="80" fill="#003B54" width="64" height="80" />
                  <rect x="96" y="160" fill="#003B54" width="80" height="80" />
                  <rect x="416" y="160" fill="#003B54" width="64" height="80" />
                  <rect x="336" y="80" fill="#003B54" width="80" height="80" />
                  <rect x="176" y="80" fill="#003B54" width="80" height="80" />
                </g>
              </g>
            </svg>`
}