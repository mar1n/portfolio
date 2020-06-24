import React from "react";
import "./Animation.css";

function Animation() {
  return (
    <div className="animation">
      <div className="projectSvg">
        <div className="gradient">
          <svg
            width="300px"
            height="356px"
            version="1.1"
            viewBox="0 0 105.83 105.83"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0 -191.17)">
              <g fill="none" stroke="#000">
                <path
                  className="lineOne"
                  d="m6.5886 205.21h51.05s7.7417 9.0111 11.612 13.517h16.213"
                />
                <path
                  className="lineTwo"
                  d="m10.139 207.74h43.76"
                />
                <path className="lineThird" d="m36.664 279.62h65.404" />
                <path
                  className="lineFourth"
                  d="m28.383 282.17h69.654"
                />
              </g>
              <ellipse
                className="circle"
                cx="84.644"
                cy="218.73"
                rx="3.026"
                ry="3.004"
                fill="#1a1a1a"
                fill-rule="evenodd"
                stroke-opacity="0"
              />
              <g
                transform="matrix(1.1417 0 0 1.376 -13.267 -84.505)"
                font-family="sans-serif"
                font-weight="bold"
                letter-spacing="0px"
                stroke-width=".48607"
                word-spacing="0px"
              >
                <text
                  transform="scale(.77447 1.2912)"
                  x="30.436357"
                  y="191.81894"
                  fill="#000000"
                  font-size="19.443px"
                >
                  <tspan
                    x="30.436357"
                    y="191.81894"
                    fill="#000000"
                    font-family="sans-serif"
                    font-weight="bold"
                    stroke-width=".48607"
                  >
                    Weather
                  </tspan>
                </text>
                <text
                  transform="scale(.77447 1.2912)"
                  x="29.283516"
                  y="191.64465"
                  fill="#ffffff"
                  fill-opacity=".94118"
                  font-size="19.443px"
                >
                  <tspan
                    x="29.283516"
                    y="191.64465"
                    fill="#ffffff"
                    fill-opacity=".94118"
                    font-family="sans-serif"
                    font-weight="bold"
                    stroke-width=".48607"
                  >
                    Weather
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Animation;
