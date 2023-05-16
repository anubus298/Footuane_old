import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import DrawerComp from "./Drawer/DrawerComp.tsx";

export default function HeaderComp(props) {
  let [isDrawerShowing, toggleDrawer] = useState(false);
  return (
    <div className=" bg-mainBlack text-white ">
      <div className="flex justify-around gap-y-4 sm:justify-between items-center py-6 container mx-auto ">
        {/* website logo */}
        <a href="#index.html">
          <svg
            width="180."
            height="50"
            viewBox="0 -7.29 375 107.29166666666667"
            class="css-1j8o68f"
          >
            <defs id="SvgjsDefs2436"></defs>
            <g
              id="SvgjsG2437"
              featurekey="nYIUkx-0"
              transform="matrix(0.14245013892650604,0,0,0.14245013892650604,0.14245014245014245,-7.149216524216525)"
              fill="#fff"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <title>background</title>
                <rect
                  x="-1"
                  y="-1"
                  width="702"
                  height="702"
                  style={{ fill: "none" }}
                ></rect>
              </g>
              <g
                xmlns="http://www.w3.org/2000/svg"
                className="ld-cycle-hovering ld"
              >
                <title>Layer 1</title>
                <g>
                  <g>
                    <path d="M222,158.3c-31,0.7-57.5,21-79.5,60.8c-23.1,44.8-34.5,94.6-34.3,149.4c0.4,6.6,1.1,7.2,2.2,1.9     c9.3-40.3,19-71.8,29.1-94.6c9.9-22.9,20.9-41.7,32.9-56.2c27.6-32.1,51.5-37.3,71.8-15.6c22.2,25.6,34,68.8,35.4,129.4     c-1.2,81.5-11.9,143.1-32.1,185c-25.3,51-51.3,68-77.7,50.8c-36-28.7-56-92.3-60-190.6c-1.4-3.4-2.7-0.9-3.7,7.5     c-1.9,10.2-3.2,21.4-4,33.3c-3,53.4,4.1,98.7,21.2,135.9c17.5,35.3,40.8,53.2,69.9,53.8c31.4-0.5,60-21,85.9-61.7     c25.8-42.5,42.4-94.3,49.7-155.6c2.7-65.2-6.1-120.7-26.3-166.5c-20.4-43.6-47.1-66-80-67.2"></path>
                  </g>
                  <g>
                    <path d="M452,134.1c-16.1-26.4-46.9-39.3-92.4-38.5c-50.3,2.4-99.2,17.4-146.6,45c-5.5,3.6-5.7,4.6-0.6,2.9     c39.6-12.1,71.7-19.5,96.4-22.1c24.8-2.9,46.5-2.8,65.1,0.4c41.6,7.9,58.1,26,49.4,54.4c-11.1,32-42.6,63.8-94.4,95.4     c-71.2,39.7-129.9,61.3-176.2,64.7c-56.9,3.6-84.5-10.4-82.8-41.9C77,248.8,122,199.7,205.1,147c2.2-2.9-0.6-2.7-8.3,0.6     c-9.8,3.5-20.1,7.9-30.9,13.2c-47.7,24.1-83.5,52.9-107.1,86.3c-21.8,32.8-25.7,62-11.7,87.4c16.1,26.9,48.2,41.4,96.4,43.5     c49.7,1.1,102.9-10.4,159.6-34.8c57.8-30.3,101.5-65.6,131-106c27.6-39.5,33.6-73.8,18.2-102.9"></path>
                  </g>
                  <g>
                    <path d="M588,321.2c14.8-27.2,10.6-60.3-12.9-99.3c-27.3-42.4-64.7-77.2-112.3-104.4c-5.9-3-6.8-2.7-2.8,0.9     c30.3,28.2,52.7,52.4,67.4,72.4c14.9,20.1,25.7,38.9,32.2,56.6c14,40,6.5,63.3-22.4,69.9c-33.3,6.4-76.5-5-129.8-34     c-69.9-41.8-118-81.9-144.2-120.2c-31.5-47.5-33.2-78.4-5.1-92.7c42.9-16.8,107.9-2.3,195.1,43.4c3.6,0.4,2.1-1.9-4.7-6.9     c-7.9-6.8-16.9-13.5-26.9-20.2c-44.7-29.3-87.5-45.8-128.3-49.6c-39.3-2.5-66.5,8.7-81.6,33.6c-15.3,27.4-11.8,62.5,10.5,105.2     c23.9,43.6,60.5,83.9,109.9,120.8c55.1,34.9,107.6,55.1,157.3,60.4c48,4.1,80.8-7.8,98.2-35.7"></path>
                  </g>
                  <g>
                    <path d="M494,532.5c31-0.7,57.5-21,79.5-60.8c23.1-44.8,34.5-94.6,34.3-149.4c-0.4-6.6-1.1-7.2-2.2-1.9     c-9.3,40.3-19,71.8-29.1,94.6c-9.9,22.9-20.9,41.7-32.9,56.2c-27.6,32.1-51.5,37.3-71.8,15.6c-22.2-25.6-34-68.8-35.4-129.4     c1.2-81.5,11.9-143.1,32.1-185c25.3-51,51.3-68,77.7-50.8c36,28.7,56,92.3,60,190.6c1.4,3.4,2.7,0.9,3.7-7.5     c1.9-10.2,3.2-21.4,4-33.3c3-53.4-4.1-98.7-21.2-135.9c-17.5-35.3-40.8-53.2-69.9-53.8c-31.4,0.5-60,21-85.9,61.7     c-25.8,42.5-42.4,94.3-49.7,155.6c-2.7,65.2,6.1,120.7,26.3,166.5c20.4,43.6,47.1,66,80,67.2"></path>
                  </g>
                  <g>
                    <path d="M128,369.6c-14.8,27.2-10.6,60.3,12.9,99.3c27.3,42.4,64.7,77.2,112.3,104.4c5.9,3,6.8,2.7,2.8-0.9     c-30.3-28.2-52.7-52.4-67.4-72.4c-14.9-20.1-25.7-38.9-32.2-56.6c-14-40-6.5-63.3,22.4-69.9c33.3-6.4,76.5,5,129.8,34     c69.9,41.8,118,81.9,144.2,120.2c31.5,47.5,33.2,78.4,5.1,92.7c-42.9,16.8-107.9,2.3-195.1-43.4c-3.6-0.4-2.1,1.9,4.7,6.9     c7.9,6.8,16.9,13.5,26.9,20.2c44.7,29.3,87.5,45.8,128.3,49.6c39.3,2.5,66.5-8.7,81.6-33.6c15.3-27.4,11.8-62.5-10.5-105.2     c-23.9-43.6-60.5-83.9-109.9-120.8c-55.1-34.9-107.6-55.1-157.3-60.4c-48-4.1-80.8,7.8-98.2,35.7"></path>
                  </g>
                  <g>
                    <path d="M264,556.7c16.1,26.4,46.9,39.3,92.4,38.5c50.3-2.4,99.2-17.4,146.6-45c5.5-3.6,5.7-4.6,0.6-2.9     c-39.6,12.1-71.7,19.5-96.4,22.1c-24.8,2.9-46.5,2.8-65.1-0.4c-41.6-7.9-58.1-26-49.4-54.4c11.1-32,42.6-63.8,94.4-95.4     c71.2-39.7,129.9-61.3,176.2-64.7c56.9-3.6,84.5,10.4,82.8,41.9c-6.9,45.5-51.9,94.6-135.1,147.3c-2.2,2.9,0.6,2.7,8.3-0.6     c9.8-3.5,20.1-7.9,30.9-13.2c47.7-24.1,83.5-52.9,107.1-86.3c21.8-32.8,25.7-62,11.7-87.4c-16.1-26.9-48.2-41.4-96.3-43.5     c-49.7-1.1-102.9,10.4-159.6,34.8c-57.8,30.3-101.5,65.6-131,106c-27.6,39.5-33.6,73.8-18.2,102.9"></path>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="SvgjsG2438"
              featurekey="PXhRQw-0"
              transform="matrix(3.9345293045043945,0,0,3.9345293045043945,122.6392846272025,-8.639907802478653)"
              fill="#fff"
            >
              <path d="M0.6 5.5 l5.64 0 l0.5 2.7 l-3.16 0 l0 3.44 l2.4 0 l0 2.5 l-2.4 0 l0 5.86 l-2.98 0 l0 -14.5 z M10.78 8.04 c-0.17334 0 -0.26 0.09334 -0.26 0.28 l0 8.84 c0 0.10666 0.01666 0.18332 0.05 0.22998 s0.11 0.07 0.23 0.07 l1.1 0 c0.12 0 0.19666 -0.02334 0.23 -0.07 s0.05 -0.12332 0.05 -0.22998 l0 -8.84 c0 -0.18666 -0.08666 -0.28 -0.26 -0.28 l-1.14 0 z M15.12 17.94 c0 0.28 -0.03334 0.54334 -0.1 0.79 s-0.18 0.46332 -0.34 0.64998 s-0.37334 0.33666 -0.64 0.45 s-0.6 0.17 -1 0.17 l-3.36 0 c-0.4 0 -0.73334 -0.05666 -1 -0.17 s-0.48 -0.26334 -0.64 -0.45 s-0.27334 -0.40332 -0.34 -0.64998 s-0.1 -0.51 -0.1 -0.79 l0 -10.56 c0 -0.57334 0.15666 -1.03 0.47 -1.37 s0.81 -0.51 1.49 -0.51 l3.6 0 c0.68 0 1.1767 0.17 1.49 0.51 s0.47 0.79666 0.47 1.37 l0 10.56 z M19.5 8.04 c-0.17334 0 -0.26 0.09334 -0.26 0.28 l0 8.84 c0 0.10666 0.01666 0.18332 0.05 0.22998 s0.11 0.07 0.23 0.07 l1.1 0 c0.12 0 0.19666 -0.02334 0.23 -0.07 s0.05 -0.12332 0.05 -0.22998 l0 -8.84 c0 -0.18666 -0.08666 -0.28 -0.26 -0.28 l-1.14 0 z M23.84 17.94 c0 0.28 -0.03334 0.54334 -0.1 0.79 s-0.18 0.46332 -0.34 0.64998 s-0.37334 0.33666 -0.64 0.45 s-0.6 0.17 -1 0.17 l-3.36 0 c-0.4 0 -0.73334 -0.05666 -1 -0.17 s-0.48 -0.26334 -0.64 -0.45 s-0.27334 -0.40332 -0.34 -0.64998 s-0.1 -0.51 -0.1 -0.79 l0 -10.56 c0 -0.57334 0.15666 -1.03 0.47 -1.37 s0.81 -0.51 1.49 -0.51 l3.6 0 c0.68 0 1.1767 0.17 1.49 0.51 s0.47 0.79666 0.47 1.37 l0 10.56 z M30.76 5.5 l0.72 2.7 l-1.94 0 l0 11.8 l-2.96 0 l0 -11.8 l-1.94 0 l0.76 -2.7 l5.36 0 z M34.54 20 c-0.84 0 -1.4267 -0.17334 -1.76 -0.52 s-0.5 -0.92 -0.5 -1.72 l0 -12.26 l2.96 0 l0 11.64 c0 0.10666 0.01666 0.18666 0.05 0.24 s0.11 0.08 0.23 0.08 l1.02 0 c0.12 0 0.19666 -0.02666 0.23 -0.08 s0.05 -0.13334 0.05 -0.24 l0 -11.64 l2.96 0 l0 12.26 c0 0.8 -0.16666 1.3733 -0.5 1.72 s-0.92 0.52 -1.76 0.52 l-2.98 0 z M43.620000000000005 18.2 l-0.26 1.8 l-2.92 0 l2.62 -14.5 l3.1 0 l2.62 14.5 l-2.92 0 l-0.26 -1.8 l-1.98 0 z M43.940000000000005 15.9 l1.34 0 l-0.66 -5.14 z M49.580000000000005 5.5 l2.76 0 l1.48 5.82 l0 -5.82 l2.98 0 l0 14.5 l-2.98 0 l-1.56 -6.06 l0 6.06 l-2.68 0 l0 -14.5 z M58.00000000000001 5.5 l5.64 0 l0.5 2.7 l-3.16 0 l0 3.44 l2.4 0 l0 2.5 l-2.4 0 l0 3.16 l3.04 0 l-0.5 2.7 l-5.52 0 l0 -14.5 z"></path>
            </g>
            <g
              id="SvgjsG2439"
              featurekey="mlRtrp-0"
              transform="matrix(0.5926271677017212,0,0,0.5926271677017212,148.75589814853748,76.30180067603769)"
              fill="#fff"
            >
              <path d="M2.0996 20 l0 -13.418 l13.584 0 l0 2.8613 l-9.8633 0 l0 2.2168 l9.3555 0 l0 2.8613 l-9.3555 0 l0 2.6172 l10 0 l0 2.8613 l-13.721 0 z M43.238765625 20 l-4.2188 0 l-6.7871 -13.418 l4.043 0 l4.8828 10.098 l4.873 -10.098 l4.043 0 z M67.18944375 20 l0 -13.418 l13.584 0 l0 2.8613 l-9.8633 0 l0 2.2168 l9.3555 0 l0 2.8613 l-9.3555 0 l0 2.6172 l10 0 l0 2.8613 l-13.721 0 z M102.947309375 20 l-3.623 0 l0 -13.418 l9.082 0 c0.97656 0 1.805 0.10091 2.4854 0.30273 s1.2337 0.48828 1.6602 0.85938 s0.73568 0.81868 0.92774 1.3428 s0.28809 1.1084 0.28809 1.7529 c0 0.56641 -0.079756 1.0612 -0.23926 1.4844 s-0.37435 0.78613 -0.64453 1.0889 s-0.58432 0.55827 -0.94239 0.7666 s-0.73568 0.38086 -1.1328 0.51758 l4.3945 5.3027 l-4.2383 0 l-4.0625 -4.9414 l-3.9551 0 l0 4.9414 z M110.105609375 10.8203 c0 -0.26042 -0.03418 -0.48174 -0.10254 -0.66403 s-0.18718 -0.33041 -0.35645 -0.44435 s-0.39551 -0.19694 -0.67871 -0.24902 s-0.6364 -0.078125 -1.0596 -0.078125 l-4.9609 0 l0 2.8711 l4.9609 0 c0.42317 0 0.77637 -0.026045 1.0596 -0.078125 s0.50944 -0.13509 0.67871 -0.24902 s0.28809 -0.26205 0.35645 -0.44435 s0.10254 -0.40365 0.10254 -0.66407 z M140.355890625 14.5215 l0 5.4785 l-3.6133 0 l0 -5.4785 l-6.5039 -7.9395 l4.0625 0 l4.2578 5.4004 l4.2383 -5.4004 l4.0625 0 z M203.775234375 20 l0 -9.4238 l-4.9805 9.4238 l-3.4766 0 l-4.9805 -9.4238 l0 9.4238 l-3.623 0 l0 -13.418 l4.9219 0 l5.4199 10.156 l5.4199 -10.156 l4.9023 0 l0 13.418 l-3.6035 0 z M237.277484375 17.4609 l-7.4805 0 l-1.2598 2.5391 l-4.043 0 l7.0215 -13.418 l4.043 0 l7.0215 13.418 l-4.043 0 z M231.095684375 14.8437 l4.9023 0 l-2.4414 -4.9414 z M267.214803125 9.502 l0 10.498 l-3.623 0 l0 -10.498 l-5.6934 0 l0 -2.9199 l15.02 0 l0 2.9199 l-5.7031 0 z M304.81859375 19.08203 c-0.46875 0.19531 -0.94076 0.37102 -1.416 0.52727 s-0.9668 0.29134 -1.4746 0.40527 s-1.0433 0.2002 -1.6064 0.25879 s-1.167 0.087891 -1.8115 0.087891 c-1.3672 0 -2.6253 -0.14648 -3.7744 -0.43945 s-2.1387 -0.73405 -2.9688 -1.3232 s-1.4763 -1.3249 -1.9385 -2.207 s-0.69336 -1.9124 -0.69336 -3.0908 s0.23112 -2.2087 0.69336 -3.0908 s1.1084 -1.6179 1.9385 -2.207 s1.8196 -1.0303 2.9688 -1.3232 s2.4072 -0.43945 3.7744 -0.43945 c0.64453 0 1.2483 0.029297 1.8115 0.087891 s1.0986 0.14485 1.6064 0.25879 s0.99932 0.24902 1.4746 0.40527 s0.94727 0.33203 1.416 0.52734 l0 3.2617 c-0.37109 -0.20183 -0.76172 -0.40202 -1.1719 -0.60059 s-0.86263 -0.3776 -1.3574 -0.5371 s-1.0384 -0.28971 -1.6309 -0.39062 s-1.2598 -0.15137 -2.002 -0.15137 c-1.1394 0 -2.085 0.11719 -2.8369 0.35156 s-1.3525 0.54688 -1.8018 0.9375 s-0.76497 0.83821 -0.94727 1.3428 s-0.27344 1.0271 -0.27344 1.5674 c0 0.35808 0.039063 0.71127 0.11719 1.0596 s0.20833 0.67709 0.39063 0.98633 s0.41992 0.59408 0.71289 0.8545 s0.65755 0.48503 1.0938 0.67383 s0.94564 0.33691 1.5283 0.44434 s1.2549 0.16113 2.0166 0.16113 c0.74219 0 1.4095 -0.047197 2.002 -0.1416 s1.136 -0.21973 1.6309 -0.37598 s0.94727 -0.33366 1.3574 -0.53223 s0.80078 -0.40201 1.1719 -0.61034 l0 3.2617 l0 0 z M335.956625 20 l0 -5.5957 l-9.2188 0 l0 5.5957 l-3.623 0 l0 -13.418 l3.623 0 l0 4.8828 l9.2188 0 l0 -4.8828 l3.623 0 l0 13.418 l-3.623 0 z"></path>
            </g>
          </svg>
        </a>

        {/* open Drawer */}
        {props.width < 875 && (
          <button
            onClick={() => toggleDrawer(true)}
            className="text-white  transition-all"
          >
            <FontAwesomeIcon icon={faBars} className="text-white " size="2xl" />
          </button>
        )}

        {/* --------------------------- Drawer---------------------------- */}
        {window.innerWidth < 875 && (
          <DrawerComp
            isDrawerShowing={isDrawerShowing}
        localUrl={props.localUrl}

            toggleDrawer={toggleDrawer}
            allCompetition={props.allCompetition}
            setCurrentTab={props.setCurrentTab}
            callingCompetitionTable={props.callingCompetitionTable}
          ></DrawerComp>
        )}
        {/* --------------------------- Drawer End---------------------------- */}
      </div>
    </div>
  );
}