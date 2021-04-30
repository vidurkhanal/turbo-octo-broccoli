import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/react";
interface WaveProps {}

const Wave: React.FC<WaveProps> = ({}) => {
  return (
    <Box position="fixed" bottom="0" width="100vw" zIndex="-1">
      <chakra.svg
        height="100%"
        width="100%"
        id="svg"
        flexShrink={1}
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#9900ef88"></stop>
            <stop offset="95%" stop-color="#ff690088"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 162.40000000000003,139.73333333333335 324.80000000000007,113.46666666666667 502,111 C 679.1999999999999,108.53333333333333 871.2,129.86666666666667 1030,143 C 1188.8,156.13333333333333 1314.4,161.06666666666666 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          className="transition-all duration-300 ease-in-out delay-150"
        ></path>
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#9900efff"></stop>
            <stop offset="95%" stop-color="#ff6900ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 111.33333333333331,364.6 222.66666666666663,396.2 392,386 C 561.3333333333334,375.8 788.6666666666667,323.8 973,308 C 1157.3333333333333,292.2 1298.6666666666665,312.6 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          className="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </chakra.svg>
    </Box>
  );
};

export default Wave;
