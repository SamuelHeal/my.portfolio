import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import "./background.scss";

export const BackgroundOne = () => {
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const pathRef4 = useRef(null);
  const pathRef5 = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const animatedRef = useRef(false);

  useEffect(() => {
    const path = pathRef.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;
    const path4 = pathRef4.current;
    const path5 = pathRef5.current;

    if (!path || !path2 || !path3 || !path4 || !path5) return;

    const length = (path as SVGPathElement).getTotalLength();
    (path as SVGPathElement).style.strokeDasharray = length.toString();
    (path as SVGPathElement).style.strokeDashoffset = length.toString();

    const length2 = (path2 as SVGPathElement).getTotalLength();
    (path2 as SVGPathElement).style.strokeDasharray = length2.toString();
    (path2 as SVGPathElement).style.strokeDashoffset = length2.toString();

    const length3 = (path3 as SVGPathElement).getTotalLength();
    (path3 as SVGPathElement).style.strokeDasharray = length3.toString();
    (path3 as SVGPathElement).style.strokeDashoffset = length3.toString();

    const length4 = (path4 as SVGPathElement).getTotalLength();
    (path4 as SVGPathElement).style.strokeDasharray = length4.toString();
    (path4 as SVGPathElement).style.strokeDashoffset = length4.toString();

    const length5 = (path5 as SVGPathElement).getTotalLength();
    (path5 as SVGPathElement).style.strokeDasharray = length5.toString();
    (path5 as SVGPathElement).style.strokeDashoffset = length5.toString();

    const handleScroll = () => {
      if (animatedRef.current) return;

      const scrollPosition = scrollY.get();
      const scrollProgress = scrollYProgress.get();
      const windowHeight = window.innerHeight;
      if (window.innerWidth < 620) {
        if (scrollPosition < windowHeight * 0.1) return;
      }

      const progress = Math.min(
        window.innerWidth < 620
          ? scrollPosition - windowHeight * 0.1
          : Math.min(scrollProgress * 2, 1),
        1
      );

      [
        { path: path, length: length },
        { path: path2, length: length2 },
        { path: path3, length: length3 },
        { path: path4, length: length4 },
        { path: path5, length: length5 },
      ].forEach(({ path, length }) => {
        const drawLength = length * progress;
        (path as SVGPathElement).style.strokeDashoffset = (
          length - drawLength
        ).toString();
      });

      if (progress === 1) {
        animatedRef.current = true;
        [path, path2, path3, path4, path5].forEach((p) => {
          (p as SVGPathElement).style.transition = "fill-opacity 0.5s ease";
          (p as SVGPathElement).style.fillOpacity = "1";
        });
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <div className="svg-background svg-background-four h-[100%]">
      <svg
        width="1054"
        height="500"
        viewBox="0 0 1054 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M499.954 1890.07C501.011 1879.85 502.486 1858.55 519.636 1838.76C519.765 1838.62 519.84 1838.43 519.845 1838.24C519.851 1838.06 519.787 1837.88 519.665 1837.76C519.203 1837.27 518.546 1837.01 517.838 1837.03C517.13 1837.05 516.429 1837.35 515.888 1837.86C506.644 1846.61 500.42 1858.11 496.389 1869.83C502.206 1816.6 505.439 1762.12 510.566 1708.87C525.814 1730.89 536.592 1756.29 554.026 1776.75C554.026 1776.75 554.077 1776.81 554.099 1776.83C555.025 1777.79 556.222 1778.47 557.563 1778.78C558.905 1779.09 560.345 1779.02 561.733 1778.59C563.12 1778.15 564.407 1777.37 565.459 1776.31C566.511 1775.25 567.29 1773.96 567.717 1772.57C569.71 1766.2 569.154 1759.06 570.066 1752.92C573.429 1688.61 573.232 1622.3 572.609 1558.27C572.609 1558.12 572.573 1557.98 572.504 1557.85C572.436 1557.73 572.336 1557.62 572.214 1557.55C572.092 1557.47 571.951 1557.43 571.802 1557.43C571.653 1557.42 571.501 1557.45 571.358 1557.51C571.068 1557.64 570.813 1557.84 570.628 1558.11C570.443 1558.37 570.336 1558.67 570.322 1558.97C567.211 1628.02 566.714 1697.01 559.023 1766.09C544.124 1744.88 532.009 1716.13 517.551 1694.42C515.71 1691.89 513.463 1687.41 509.78 1687.61C494.224 1688.52 495.737 1721.87 493.702 1731.56C490.129 1777.71 489.759 1823.87 491.01 1869.57C484.851 1860.58 471.795 1848.79 464.809 1850.48C462.67 1850.99 463.051 1852.51 463.585 1853.02C482.222 1871.35 482.08 1877.45 489.353 1891.56C492.617 1897.89 499.199 1897.16 499.954 1890.07Z"
          fill="#FFCA75"
          stroke="#FFCA75"
          strokeWidth="2"
          fillRule="evenodd"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          ref={pathRef}
          style={{ fillOpacity: 0, transition: "stroke-dashoffset 0.1s ease" }}
          data-hoverable="true"
        />
        <path
          d="M594.904 1601.82C597.984 1627.92 597.187 1654.73 592.539 1681.42C592.512 1681.54 592.443 1681.65 592.346 1681.73C592.249 1681.82 592.13 1681.87 592.009 1681.87C591.889 1681.88 591.775 1681.84 591.687 1681.77C591.599 1681.69 591.544 1681.59 591.53 1681.47C590.458 1655.13 591.247 1628.56 593.892 1601.93C593.912 1601.81 593.973 1601.7 594.066 1601.61C594.158 1601.52 594.276 1601.47 594.397 1601.45C594.519 1601.44 594.637 1601.47 594.73 1601.54C594.822 1601.61 594.884 1601.71 594.904 1601.82Z"
          fill="#FFCA75"
          stroke="#FFCA75"
          strokeWidth="2"
          fillRule="evenodd"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          ref={pathRef2}
          style={{ fillOpacity: 0, transition: "stroke-dashoffset 0.1s ease" }}
          data-hoverable="true"
        />
        <path
          d="M591.822 1687.79C592.533 1689.3 592.889 1690.98 592.865 1692.72C592.84 1694.45 592.436 1696.2 591.68 1697.85C591.623 1697.97 591.53 1698.08 591.414 1698.15C591.298 1698.23 591.165 1698.27 591.035 1698.26C590.904 1698.26 590.783 1698.21 590.688 1698.13C590.593 1698.05 590.53 1697.94 590.507 1697.81C590.107 1694.64 590.156 1691.38 590.653 1688.12C590.671 1687.98 590.73 1687.86 590.821 1687.75C590.913 1687.65 591.033 1687.57 591.164 1687.54C591.294 1687.5 591.428 1687.5 591.547 1687.55C591.665 1687.6 591.762 1687.68 591.822 1687.79Z"
          fill="#FFCA75"
          stroke="#FFCA75"
          strokeWidth="2"
          fillRule="evenodd"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          ref={pathRef3}
          style={{ fillOpacity: 0, transition: "stroke-dashoffset 0.1s ease" }}
          data-hoverable="true"
        />
        <path
          d="M474.354 1835.11C470.6 1809.18 470.712 1782.43 474.689 1755.7C474.699 1755.57 474.758 1755.44 474.855 1755.34C474.952 1755.25 475.078 1755.19 475.208 1755.18C475.338 1755.17 475.46 1755.21 475.55 1755.3C475.641 1755.38 475.691 1755.5 475.691 1755.63C477.444 1781.85 477.336 1808.36 475.367 1834.97C475.353 1835.1 475.295 1835.21 475.205 1835.31C475.114 1835.4 474.997 1835.46 474.874 1835.48C474.752 1835.49 474.632 1835.46 474.536 1835.4C474.441 1835.33 474.376 1835.23 474.354 1835.11Z"
          fill="#FFCA75"
          stroke="#FFCA75"
          strokeWidth="2"
          fillRule="evenodd"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          ref={pathRef4}
          style={{ fillOpacity: 0, transition: "stroke-dashoffset 0.1s ease" }}
          data-hoverable="true"
        />
        <path
          d="M475.245 1749.33C474.495 1747.84 474.097 1746.18 474.079 1744.45C474.061 1742.71 474.422 1740.96 475.139 1739.3C475.193 1739.18 475.284 1739.07 475.398 1738.99C475.512 1738.91 475.644 1738.87 475.774 1738.87C475.904 1738.87 476.027 1738.92 476.124 1738.99C476.221 1739.07 476.287 1739.18 476.314 1739.31C476.796 1742.46 476.825 1745.71 476.4 1748.97C476.391 1749.11 476.338 1749.24 476.25 1749.35C476.162 1749.46 476.043 1749.54 475.911 1749.58C475.78 1749.62 475.643 1749.62 475.523 1749.57C475.403 1749.53 475.305 1749.44 475.245 1749.33Z"
          fill="#FFCA75"
          stroke="#FFCA75"
          strokeWidth="2"
          fillRule="evenodd"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          ref={pathRef5}
          style={{ fillOpacity: 0, transition: "stroke-dashoffset 0.1s ease" }}
          data-hoverable="true"
        />
      </svg>
    </div>
  );
};