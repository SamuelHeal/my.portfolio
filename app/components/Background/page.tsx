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
          : Math.min(scrollProgress * 8, 1),
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

export const BackgroundTwo = () => {
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const animatedRef = useRef(false);

  useEffect(() => {
    const path = pathRef.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;

    if (!path || !path2 || !path3) return;

    const length = (path as SVGPathElement).getTotalLength();
    (path as SVGPathElement).style.strokeDasharray = length.toString();
    (path as SVGPathElement).style.strokeDashoffset = length.toString();

    const length2 = (path2 as SVGPathElement).getTotalLength();
    (path2 as SVGPathElement).style.strokeDasharray = length2.toString();
    (path2 as SVGPathElement).style.strokeDashoffset = length2.toString();

    const length3 = (path3 as SVGPathElement).getTotalLength();
    (path3 as SVGPathElement).style.strokeDasharray = length3.toString();
    (path3 as SVGPathElement).style.strokeDashoffset = length3.toString();

    const handleScroll = () => {
      if (animatedRef.current) return;

      const scrollPosition = scrollY.get();
      const windowHeight = window.innerHeight;
      if (window.innerWidth < 620) {
        if (scrollPosition < windowHeight * 1.4) return;
      } else {
        if (scrollPosition < windowHeight * 1.2) return;
      }

      const progress = Math.min(
        (window.innerWidth < 620
          ? scrollPosition - windowHeight * 1.4
          : scrollPosition - windowHeight * 1.2) / 200,
        1
      );
      const drawLength = length * progress;
      (path as SVGPathElement).style.strokeDashoffset = (
        length - drawLength
      ).toString();

      const drawLength2 = length2 * progress;
      (path2 as SVGPathElement).style.strokeDashoffset = (
        length2 - drawLength2
      ).toString();

      const drawLength3 = length3 * progress;
      (path3 as SVGPathElement).style.strokeDashoffset = (
        length3 - drawLength3
      ).toString();

      if (progress === 1) {
        animatedRef.current = true;
        [path, path2, path3].forEach((p) => {
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
    <div className="svg-background svg-background-two">
      <svg
        width="1054"
        height="300"
        viewBox="0 0 1054 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M760.18 210.999C758.726 217.392 747.359 217.134 746.839 211.997C745.078 196.187 728.762 176.239 707.589 166.119C707.484 166.067 707.399 166 707.34 165.923C707.281 165.845 707.251 165.759 707.251 165.673C707.251 165.586 707.281 165.5 707.34 165.423C707.399 165.345 707.484 165.278 707.589 165.227C707.92 165.042 708.308 164.906 708.724 164.829C709.141 164.752 709.577 164.736 710.004 164.781C723.252 166.199 747.786 176.748 748.587 185.041C737.487 70.7227 608.703 41.1087 458.573 43.8195C381.273 43.7393 304.867 56.1163 227.635 56.6959C151.856 56.1966 67.8455 42.4285 18.3225 1.50756C18.1799 1.39673 18.0803 1.26418 18.0324 1.12157C17.9844 0.978959 17.9897 0.830631 18.0477 0.689699C18.1057 0.548767 18.2146 0.419524 18.3649 0.313343C18.5152 0.207162 18.7022 0.127294 18.9095 0.0807803C19.2692 -0.0101968 19.6621 -0.0247486 20.0346 0.0390899C20.4071 0.102928 20.741 0.242067 20.9908 0.437489C71.3943 39.6374 152.976 51.7647 227.474 50.873C304.854 48.8845 380.206 34.8221 457.959 33.7342C616.227 26.8323 758.673 59.594 756.325 183.543C756.405 179.922 778.365 164.317 795.895 163.809C796.397 163.794 796.889 163.905 797.276 164.119C797.663 164.333 797.917 164.636 797.99 164.968V165.013C798.028 165.203 797.956 165.395 797.786 165.55C797.617 165.704 797.365 165.809 797.083 165.842C777.751 168.49 763.076 198.131 760.18 210.999Z"
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
          d="M431.463 61.101C494.514 59.4781 587.944 64.9176 642.617 84.9634C642.789 85.0039 642.978 85.0043 643.151 84.9643C643.324 84.9244 643.472 84.8465 643.571 84.7433C643.67 84.6401 643.714 84.5177 643.695 84.3958C643.677 84.2739 643.598 84.1597 643.47 84.0717C590.999 59.594 494.781 53.8425 431.343 60.0667C431.174 60.1047 431.029 60.1792 430.931 60.2786C430.833 60.3779 430.787 60.4964 430.801 60.6151C430.814 60.7339 430.887 60.8461 431.007 60.9342C431.127 61.0222 431.288 61.0809 431.463 61.101Z"
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
          d="M413.532 63.91C413.764 63.8175 413.949 63.6802 414.061 63.5162C414.174 63.3522 414.209 63.1693 414.163 62.9915C414.117 62.8137 413.991 62.6495 413.802 62.5206C413.613 62.3916 413.37 62.304 413.105 62.2693C412.332 62.2693 411.545 62.2693 410.771 62.3228C408.208 62.4303 405.656 62.6327 403.126 62.9291C400.595 63.2242 398.091 63.6173 395.628 64.1062C394.868 64.2578 394.121 64.4183 393.374 64.5877C393.137 64.6789 392.948 64.8165 392.832 64.9818C392.716 65.1471 392.679 65.3322 392.726 65.5121C392.772 65.692 392.9 65.8581 393.092 65.9878C393.285 66.1175 393.532 66.2046 393.801 66.2374C394.601 66.2374 395.388 66.2374 396.175 66.1749C401.307 65.9625 406.387 65.3643 411.318 64.3915C412.118 64.2488 412.852 64.0794 413.532 63.91Z"
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
      </svg>
    </div>
  );
};

export const BackgroundThree = () => {
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const { scrollY } = useScroll();
  const animatedRef = useRef(false);

  useEffect(() => {
    const path = pathRef.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;

    if (!path || !path2 || !path3) return;

    const length = (path as SVGPathElement).getTotalLength();
    (path as SVGPathElement).style.strokeDasharray = length.toString();
    (path as SVGPathElement).style.strokeDashoffset = length.toString();

    const length2 = (path2 as SVGPathElement).getTotalLength();
    (path2 as SVGPathElement).style.strokeDasharray = length2.toString();
    (path2 as SVGPathElement).style.strokeDashoffset = length2.toString();

    const length3 = (path3 as SVGPathElement).getTotalLength();
    (path3 as SVGPathElement).style.strokeDasharray = length3.toString();
    (path3 as SVGPathElement).style.strokeDashoffset = length3.toString();

    const handleScroll = () => {
      if (animatedRef.current) return;

      const scrollPosition = scrollY.get();
      const windowHeight = window.innerHeight;
      if (window.innerWidth < 620) {
        if (scrollPosition < windowHeight * 4.7) return;
      } else {
        if (scrollPosition < windowHeight * 4.7) return;
      }

      const progress = Math.min(
        (window.innerWidth < 620
          ? scrollPosition - windowHeight * 4.7
          : scrollPosition - windowHeight * 4.7) / 300,
        1
      );
      const drawLength = length * progress;
      (path as SVGPathElement).style.strokeDashoffset = (
        length - drawLength
      ).toString();

      const drawLength2 = length2 * progress;
      (path2 as SVGPathElement).style.strokeDashoffset = (
        length2 - drawLength2
      ).toString();

      const drawLength3 = length3 * progress;
      (path3 as SVGPathElement).style.strokeDashoffset = (
        length3 - drawLength3
      ).toString();

      if (progress === 1) {
        animatedRef.current = true;
        [path, path2, path3].forEach((p) => {
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
    <div className="svg-background svg-background-three">
      <svg
        width="1054"
        height="400"
        viewBox="0 0 1054 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M638.836 568.301C657.733 591.054 662.799 621.365 667.215 649.086C667.215 649.086 667.384 650.731 668.411 650.706C669.437 650.681 669.415 649.033 669.415 649.033C671.173 627.03 670.485 604.774 664.256 583.213C802.959 674.043 1020.77 605.372 1112.3 485.879C1112.3 485.879 1113.8 484.309 1112.49 483.335C1111.18 482.361 1109.23 484.074 1109.23 484.074C1054.71 539.805 958.014 584.147 896.302 593.792C807.928 607.581 751.358 597.845 676.959 576.046C700.866 583.064 731.95 569.136 745.275 548.352C745.275 548.352 746.038 547.262 745.568 546.812C745.099 546.362 743.735 546.856 743.735 546.856C724.604 553.702 704.176 554.726 683.944 555.531C668.122 556.92 652.187 556.755 636.422 555.039C635.561 554.954 634.689 555.102 633.919 555.465C633.148 555.827 632.515 556.387 632.098 557.073C631.682 557.759 631.502 558.54 631.581 559.316C631.66 560.092 631.995 560.829 632.542 561.431L638.836 568.301Z"
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
          d="M1027.17 591.714C1023.34 597.327 1017.3 601.442 1010.26 603.237C1009.94 603.312 1009.61 603.292 1009.3 603.179C1009 603.067 1008.74 602.869 1008.57 602.615C1008.41 602.36 1008.34 602.064 1008.37 601.769C1008.41 601.475 1008.55 601.198 1008.78 600.981C1013.57 596.585 1019.04 592.826 1025.01 589.821C1025.3 589.612 1025.67 589.505 1026.04 589.52C1026.41 589.536 1026.76 589.673 1027.03 589.906C1027.29 590.139 1027.45 590.451 1027.48 590.784C1027.51 591.117 1027.4 591.448 1027.17 591.714Z"
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
          d="M997.655 609.083C957.234 637.318 903.699 653.557 852.812 647.458C852.54 647.451 852.282 647.348 852.095 647.17C851.909 646.992 851.809 646.754 851.817 646.509C851.826 646.264 851.942 646.032 852.141 645.863C852.34 645.694 852.605 645.603 852.878 645.61C903.302 642.504 951.369 627.717 996.571 607.494C996.806 607.363 997.089 607.322 997.357 607.379C997.625 607.436 997.856 607.586 998 607.797C998.144 608.008 998.188 608.262 998.123 608.503C998.059 608.744 997.89 608.953 997.655 609.083Z"
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
      </svg>
    </div>
  );
};
