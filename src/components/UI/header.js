import React from "react";

const Header = () => {
  return (
    <div style={{ background: "#FFF2E1" }} class="  mt-20">
      <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="my-4 text-5xl font-bold leading-tight text-darken"
          >
            <span class="text-yellow-500">Computer</span> Laptop & Online Shop
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="leading-normal text-2xl mb-8"
          >
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
          >
            <button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Join for free
            </button>
            <div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <button class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  class="w-10/12 mx-auto 2xl:-mb-20"
                  src="https://mhaecal.github.io/frontend/img/calendar.svg"
                />
              </button>
              <span class="cursor-pointer">Watch how it works</span>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            class="w-10/12 mx-auto 2xl:-mb-20"
            src="https://mhaecal.github.io/frontend/img/girl.png"
          />

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <svg
              width="300"
              height="100"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b)">
                <rect
                  width="300"
                  height="100"
                  rx="20"
                  fill="white"
                  fill-opacity="0.8"
                />
              </g>
              <path
                d="M123.128 41.504V44H111.752V41.72L117.512 35.528C118.184 34.792 118.672 34.12 118.976 33.512C119.296 32.888 119.456 32.272 119.456 31.664C119.456 30.896 119.232 30.32 118.784 29.936C118.352 29.536 117.712 29.336 116.864 29.336C115.344 29.336 113.816 29.92 112.28 31.088L111.248 28.832C111.92 28.24 112.776 27.768 113.816 27.416C114.872 27.048 115.928 26.864 116.984 26.864C118.68 26.864 120.024 27.28 121.016 28.112C122.008 28.944 122.504 30.064 122.504 31.472C122.504 32.448 122.296 33.368 121.88 34.232C121.464 35.08 120.76 36.032 119.768 37.088L115.616 41.504H123.128ZM133.006 33.176C134.062 33.176 134.99 33.408 135.79 33.872C136.606 34.32 137.23 34.952 137.662 35.768C138.11 36.584 138.334 37.52 138.334 38.576C138.334 39.696 138.078 40.68 137.566 41.528C137.054 42.376 136.326 43.032 135.382 43.496C134.454 43.96 133.358 44.192 132.094 44.192C131.038 44.192 129.99 44.016 128.95 43.664C127.926 43.296 127.078 42.816 126.406 42.224L127.438 39.968C128.974 41.136 130.542 41.72 132.142 41.72C133.198 41.72 134.006 41.456 134.566 40.928C135.126 40.4 135.406 39.648 135.406 38.672C135.406 37.728 135.118 36.984 134.542 36.44C133.982 35.88 133.214 35.6 132.238 35.6C131.582 35.6 130.958 35.728 130.366 35.984C129.79 36.224 129.27 36.576 128.806 37.04H126.958V27.08H137.566V29.48H129.982V34.04C130.798 33.464 131.806 33.176 133.006 33.176ZM146.965 44.216C144.965 44.216 143.437 43.48 142.381 42.008C141.325 40.52 140.797 38.36 140.797 35.528C140.797 32.728 141.325 30.592 142.381 29.12C143.437 27.648 144.965 26.912 146.965 26.912C148.965 26.912 150.493 27.648 151.549 29.12C152.605 30.592 153.133 32.728 153.133 35.528C153.133 38.344 152.605 40.496 151.549 41.984C150.493 43.472 148.965 44.216 146.965 44.216ZM146.965 41.792C148.053 41.792 148.845 41.296 149.341 40.304C149.837 39.296 150.085 37.704 150.085 35.528C150.085 33.368 149.837 31.8 149.341 30.824C148.845 29.832 148.053 29.336 146.965 29.336C145.877 29.336 145.085 29.832 144.589 30.824C144.093 31.8 143.845 33.368 143.845 35.528C143.845 37.704 144.093 39.296 144.589 40.304C145.085 41.296 145.877 41.792 146.965 41.792ZM167.955 44H164.235L159.195 38.648V44H156.195V27.08H159.195V37.4L163.923 32.288H167.571L162.291 37.904L167.955 44Z"
                fill="#595959"
              />
              <path
                d="M110.22 74L116.5 59.9H118.22L124.52 74H122.4L120.92 70.56H113.78L112.32 74H110.22ZM117.34 62.2L114.52 68.88H120.22L117.38 62.2H117.34ZM129.83 74.18C129.03 74.18 128.283 74.08 127.59 73.88C126.897 73.6667 126.317 73.3733 125.85 73L126.43 71.64C126.923 71.9867 127.463 72.2533 128.05 72.44C128.65 72.6267 129.25 72.72 129.85 72.72C130.557 72.72 131.09 72.5933 131.45 72.34C131.81 72.0867 131.99 71.7467 131.99 71.32C131.99 70.9733 131.87 70.7067 131.63 70.52C131.39 70.32 131.03 70.1667 130.55 70.06L128.65 69.68C126.97 69.3333 126.13 68.4667 126.13 67.08C126.13 66.16 126.497 65.4267 127.23 64.88C127.963 64.3333 128.923 64.06 130.11 64.06C130.79 64.06 131.437 64.16 132.05 64.36C132.677 64.56 133.197 64.86 133.61 65.26L133.03 66.62C132.63 66.2733 132.17 66.0067 131.65 65.82C131.13 65.6333 130.617 65.54 130.11 65.54C129.417 65.54 128.89 65.6733 128.53 65.94C128.17 66.1933 127.99 66.54 127.99 66.98C127.99 67.6467 128.43 68.0733 129.31 68.26L131.21 68.64C132.077 68.8133 132.73 69.1067 133.17 69.52C133.623 69.9333 133.85 70.4933 133.85 71.2C133.85 72.1333 133.483 72.8667 132.75 73.4C132.017 73.92 131.043 74.18 129.83 74.18ZM139.917 74.18C139.117 74.18 138.371 74.08 137.677 73.88C136.984 73.6667 136.404 73.3733 135.937 73L136.517 71.64C137.011 71.9867 137.551 72.2533 138.137 72.44C138.737 72.6267 139.337 72.72 139.937 72.72C140.644 72.72 141.177 72.5933 141.537 72.34C141.897 72.0867 142.077 71.7467 142.077 71.32C142.077 70.9733 141.957 70.7067 141.717 70.52C141.477 70.32 141.117 70.1667 140.637 70.06L138.737 69.68C137.057 69.3333 136.217 68.4667 136.217 67.08C136.217 66.16 136.584 65.4267 137.317 64.88C138.051 64.3333 139.011 64.06 140.197 64.06C140.877 64.06 141.524 64.16 142.137 64.36C142.764 64.56 143.284 64.86 143.697 65.26L143.117 66.62C142.717 66.2733 142.257 66.0067 141.737 65.82C141.217 65.6333 140.704 65.54 140.197 65.54C139.504 65.54 138.977 65.6733 138.617 65.94C138.257 66.1933 138.077 66.54 138.077 66.98C138.077 67.6467 138.517 68.0733 139.397 68.26L141.297 68.64C142.164 68.8133 142.817 69.1067 143.257 69.52C143.711 69.9333 143.937 70.4933 143.937 71.2C143.937 72.1333 143.571 72.8667 142.837 73.4C142.104 73.92 141.131 74.18 139.917 74.18ZM146.405 61.98V59.88H148.765V61.98H146.405ZM146.585 74V64.24H148.605V74H146.585ZM155.268 74.18C154.468 74.18 153.721 74.08 153.028 73.88C152.335 73.6667 151.755 73.3733 151.288 73L151.868 71.64C152.361 71.9867 152.901 72.2533 153.488 72.44C154.088 72.6267 154.688 72.72 155.288 72.72C155.995 72.72 156.528 72.5933 156.888 72.34C157.248 72.0867 157.428 71.7467 157.428 71.32C157.428 70.9733 157.308 70.7067 157.068 70.52C156.828 70.32 156.468 70.1667 155.988 70.06L154.088 69.68C152.408 69.3333 151.568 68.4667 151.568 67.08C151.568 66.16 151.935 65.4267 152.668 64.88C153.401 64.3333 154.361 64.06 155.548 64.06C156.228 64.06 156.875 64.16 157.488 64.36C158.115 64.56 158.635 64.86 159.048 65.26L158.468 66.62C158.068 66.2733 157.608 66.0067 157.088 65.82C156.568 65.6333 156.055 65.54 155.548 65.54C154.855 65.54 154.328 65.6733 153.968 65.94C153.608 66.1933 153.428 66.54 153.428 66.98C153.428 67.6467 153.868 68.0733 154.748 68.26L156.648 68.64C157.515 68.8133 158.168 69.1067 158.608 69.52C159.061 69.9333 159.288 70.4933 159.288 71.2C159.288 72.1333 158.921 72.8667 158.188 73.4C157.455 73.92 156.481 74.18 155.268 74.18ZM165.998 74.18C164.771 74.18 163.858 73.8667 163.258 73.24C162.658 72.6133 162.358 71.7067 162.358 70.52V65.8H160.458V64.24H162.358V61.3H164.378V64.24H167.398V65.8H164.378V70.36C164.378 71.0667 164.525 71.6 164.818 71.96C165.125 72.32 165.618 72.5 166.298 72.5C166.511 72.5 166.718 72.48 166.918 72.44C167.118 72.3867 167.318 72.3267 167.518 72.26L167.838 73.78C167.638 73.9 167.358 73.9933 166.998 74.06C166.651 74.14 166.318 74.18 165.998 74.18ZM174.025 74.18C172.425 74.18 171.165 73.7333 170.245 72.84C169.325 71.9333 168.865 70.7 168.865 69.14C168.865 68.14 169.065 67.26 169.465 66.5C169.878 65.7267 170.445 65.1267 171.165 64.7C171.885 64.2733 172.712 64.06 173.645 64.06C174.992 64.06 176.052 64.4933 176.825 65.36C177.598 66.2133 177.985 67.3933 177.985 68.9V69.58H170.825C170.972 71.6067 172.045 72.62 174.045 72.62C174.605 72.62 175.152 72.5333 175.685 72.36C176.232 72.1867 176.745 71.9 177.225 71.5L177.825 72.9C177.385 73.3 176.818 73.6133 176.125 73.84C175.432 74.0667 174.732 74.18 174.025 74.18ZM173.725 65.48C172.885 65.48 172.218 65.74 171.725 66.26C171.232 66.78 170.932 67.4733 170.825 68.34H176.285C176.245 67.4333 176.005 66.7333 175.565 66.24C175.125 65.7333 174.512 65.48 173.725 65.48ZM184.307 74.18C183.454 74.18 182.701 73.98 182.047 73.58C181.407 73.1667 180.907 72.58 180.547 71.82C180.187 71.06 180.007 70.16 180.007 69.12C180.007 68.08 180.187 67.1867 180.547 66.44C180.907 65.68 181.407 65.0933 182.047 64.68C182.687 64.2667 183.441 64.06 184.307 64.06C185.041 64.06 185.694 64.22 186.267 64.54C186.841 64.86 187.267 65.2933 187.547 65.84V59.9H189.567V74H187.587V72.3C187.307 72.8867 186.874 73.3467 186.287 73.68C185.714 74.0133 185.054 74.18 184.307 74.18ZM184.827 72.62C185.654 72.62 186.321 72.32 186.827 71.72C187.334 71.12 187.587 70.2533 187.587 69.12C187.587 67.9867 187.334 67.1267 186.827 66.54C186.321 65.94 185.654 65.64 184.827 65.64C183.987 65.64 183.314 65.94 182.807 66.54C182.301 67.1267 182.047 67.9867 182.047 69.12C182.047 70.2533 182.301 71.12 182.807 71.72C183.314 72.32 183.987 72.62 184.827 72.62ZM203.377 74.18C202.271 74.18 201.257 74.04 200.337 73.76C199.417 73.4667 198.637 73.06 197.997 72.54L198.657 70.9C199.324 71.4067 200.037 71.7867 200.797 72.04C201.557 72.2933 202.417 72.42 203.377 72.42C204.511 72.42 205.344 72.22 205.877 71.82C206.424 71.4067 206.697 70.8733 206.697 70.22C206.697 69.6867 206.504 69.2667 206.117 68.96C205.731 68.64 205.084 68.3867 204.177 68.2L202.037 67.76C200.771 67.4933 199.824 67.0533 199.197 66.44C198.584 65.8267 198.277 65 198.277 63.96C198.277 63.12 198.497 62.38 198.937 61.74C199.391 61.1 200.017 60.6067 200.817 60.26C201.617 59.9 202.537 59.72 203.577 59.72C204.537 59.72 205.424 59.8667 206.237 60.16C207.064 60.44 207.764 60.8533 208.337 61.4L207.657 62.98C206.524 61.98 205.157 61.48 203.557 61.48C202.571 61.48 201.784 61.7 201.197 62.14C200.624 62.58 200.337 63.1667 200.337 63.9C200.337 64.46 200.517 64.9067 200.877 65.24C201.237 65.5733 201.837 65.8267 202.677 66L204.797 66.44C206.131 66.72 207.124 67.1533 207.777 67.74C208.431 68.3133 208.757 69.0933 208.757 70.08C208.757 70.9067 208.537 71.6267 208.097 72.24C207.657 72.8533 207.037 73.3333 206.237 73.68C205.437 74.0133 204.484 74.18 203.377 74.18ZM215.4 74.18C214.174 74.18 213.26 73.8667 212.66 73.24C212.06 72.6133 211.76 71.7067 211.76 70.52V65.8H209.86V64.24H211.76V61.3H213.78V64.24H216.8V65.8H213.78V70.36C213.78 71.0667 213.927 71.6 214.22 71.96C214.527 72.32 215.02 72.5 215.7 72.5C215.914 72.5 216.12 72.48 216.32 72.44C216.52 72.3867 216.72 72.3267 216.92 72.26L217.24 73.78C217.04 73.9 216.76 73.9933 216.4 74.06C216.054 74.14 215.72 74.18 215.4 74.18ZM222.425 74.18C220.065 74.18 218.885 72.8667 218.885 70.24V64.24H220.905V70.26C220.905 71.0467 221.065 71.6267 221.385 72C221.705 72.3733 222.212 72.56 222.905 72.56C223.665 72.56 224.278 72.3067 224.745 71.8C225.225 71.2933 225.465 70.6133 225.465 69.76V64.24H227.485V74H225.525V72.44C225.205 73.0133 224.778 73.4467 224.245 73.74C223.712 74.0333 223.105 74.18 222.425 74.18ZM234.452 74.18C233.598 74.18 232.845 73.98 232.192 73.58C231.552 73.1667 231.052 72.58 230.692 71.82C230.332 71.06 230.152 70.16 230.152 69.12C230.152 68.08 230.332 67.1867 230.692 66.44C231.052 65.68 231.552 65.0933 232.192 64.68C232.832 64.2667 233.585 64.06 234.452 64.06C235.185 64.06 235.838 64.22 236.412 64.54C236.985 64.86 237.412 65.2933 237.692 65.84V59.9H239.712V74H237.732V72.3C237.452 72.8867 237.018 73.3467 236.432 73.68C235.858 74.0133 235.198 74.18 234.452 74.18ZM234.972 72.62C235.798 72.62 236.465 72.32 236.972 71.72C237.478 71.12 237.732 70.2533 237.732 69.12C237.732 67.9867 237.478 67.1267 236.972 66.54C236.465 65.94 235.798 65.64 234.972 65.64C234.132 65.64 233.458 65.94 232.952 66.54C232.445 67.1267 232.192 67.9867 232.192 69.12C232.192 70.2533 232.445 71.12 232.952 71.72C233.458 72.32 234.132 72.62 234.972 72.62ZM247.528 74.18C245.928 74.18 244.668 73.7333 243.748 72.84C242.828 71.9333 242.368 70.7 242.368 69.14C242.368 68.14 242.568 67.26 242.968 66.5C243.381 65.7267 243.948 65.1267 244.668 64.7C245.388 64.2733 246.215 64.06 247.148 64.06C248.495 64.06 249.555 64.4933 250.328 65.36C251.101 66.2133 251.488 67.3933 251.488 68.9V69.58H244.328C244.475 71.6067 245.548 72.62 247.548 72.62C248.108 72.62 248.655 72.5333 249.188 72.36C249.735 72.1867 250.248 71.9 250.728 71.5L251.328 72.9C250.888 73.3 250.321 73.6133 249.628 73.84C248.935 74.0667 248.235 74.18 247.528 74.18ZM247.228 65.48C246.388 65.48 245.721 65.74 245.228 66.26C244.735 66.78 244.435 67.4733 244.328 68.34H249.788C249.748 67.4333 249.508 66.7333 249.068 66.24C248.628 65.7333 248.015 65.48 247.228 65.48ZM254.09 74V64.24H256.05V65.86C256.384 65.2733 256.837 64.8267 257.41 64.52C257.997 64.2133 258.65 64.06 259.37 64.06C261.677 64.06 262.83 65.3667 262.83 67.98V74H260.81V68.1C260.81 67.26 260.644 66.6467 260.31 66.26C259.99 65.8733 259.484 65.68 258.79 65.68C257.977 65.68 257.324 65.94 256.83 66.46C256.35 66.9667 256.11 67.64 256.11 68.48V74H254.09ZM270.174 74.18C268.947 74.18 268.034 73.8667 267.434 73.24C266.834 72.6133 266.534 71.7067 266.534 70.52V65.8H264.634V64.24H266.534V61.3H268.554V64.24H271.574V65.8H268.554V70.36C268.554 71.0667 268.7 71.6 268.994 71.96C269.3 72.32 269.794 72.5 270.474 72.5C270.687 72.5 270.894 72.48 271.094 72.44C271.294 72.3867 271.494 72.3267 271.694 72.26L272.014 73.78C271.814 73.9 271.534 73.9933 271.174 74.06C270.827 74.14 270.494 74.18 270.174 74.18Z"
                fill="#545567"
              />
              <rect
                x="28"
                y="25"
                width="50"
                height="50"
                rx="8"
                fill="#23BDEE"
              />
              <g clip-path="url(#clip0)">
                <path
                  d="M46.125 36.25C45.5826 36.25 45.1429 36.6897 45.1429 37.2322V39.1964H47.1071V37.2322C47.1071 36.6897 46.6674 36.25 46.125 36.25Z"
                  fill="white"
                />
                <path
                  d="M59.875 36.25C59.3325 36.25 58.8928 36.6897 58.8928 37.2322V39.1964H60.8571V37.2322C60.8571 36.6897 60.4174 36.25 59.875 36.25Z"
                  fill="white"
                />
                <path
                  d="M63.8036 39.1964H60.8571V43.125C60.8571 43.6675 60.4174 44.1072 59.875 44.1072C59.3325 44.1072 58.8928 43.6675 58.8928 43.125V39.1964H47.1071V43.125C47.1071 43.6675 46.6674 44.1072 46.125 44.1072C45.5825 44.1072 45.1428 43.6675 45.1428 43.125V39.1964H42.1964C40.5692 39.1964 39.25 40.5156 39.25 42.1429V60.8036C39.25 62.4309 40.5692 63.75 42.1964 63.75H63.8036C65.4308 63.75 66.75 62.4309 66.75 60.8036V42.1429C66.75 40.5156 65.4308 39.1964 63.8036 39.1964ZM64.7857 60.8036C64.7857 61.346 64.346 61.7857 63.8035 61.7857H42.1964C41.654 61.7857 41.2143 61.346 41.2143 60.8036V48.0357H64.7857V60.8036Z"
                  fill="white"
                />
                <path
                  d="M47.1071 50H45.1428C44.6004 50 44.1607 50.4397 44.1607 50.9822C44.1607 51.5246 44.6004 51.9643 45.1428 51.9643H47.1071C47.6495 51.9643 48.0893 51.5246 48.0893 50.9822C48.0893 50.4397 47.6495 50 47.1071 50Z"
                  fill="white"
                />
                <path
                  d="M53.9821 50H52.0179C51.4754 50 51.0357 50.4397 51.0357 50.9822C51.0357 51.5246 51.4754 51.9643 52.0179 51.9643H53.9821C54.5246 51.9643 54.9643 51.5246 54.9643 50.9822C54.9643 50.4397 54.5246 50 53.9821 50Z"
                  fill="white"
                />
                <path
                  d="M60.8572 50H58.8929C58.3505 50 57.9107 50.4397 57.9107 50.9822C57.9107 51.5246 58.3505 51.9643 58.8929 51.9643H60.8572C61.3996 51.9643 61.8393 51.5246 61.8393 50.9822C61.8393 50.4397 61.3995 50 60.8572 50Z"
                  fill="white"
                />
                <path
                  d="M47.1071 53.9286H45.1428C44.6004 53.9286 44.1607 54.3683 44.1607 54.9107C44.1607 55.4532 44.6004 55.8929 45.1428 55.8929H47.1071C47.6495 55.8929 48.0893 55.4532 48.0893 54.9107C48.0893 54.3683 47.6495 53.9286 47.1071 53.9286Z"
                  fill="white"
                />
                <path
                  d="M53.9821 53.9286H52.0179C51.4754 53.9286 51.0357 54.3683 51.0357 54.9107C51.0357 55.4532 51.4754 55.8929 52.0179 55.8929H53.9821C54.5246 55.8929 54.9643 55.4532 54.9643 54.9107C54.9643 54.3683 54.5246 53.9286 53.9821 53.9286Z"
                  fill="white"
                />
                <path
                  d="M60.8572 53.9286H58.8929C58.3505 53.9286 57.9107 54.3683 57.9107 54.9107C57.9107 55.4532 58.3505 55.8929 58.8929 55.8929H60.8572C61.3996 55.8929 61.8393 55.4532 61.8393 54.9107C61.8393 54.3683 61.3995 53.9286 60.8572 53.9286Z"
                  fill="white"
                />
                <path
                  d="M47.1071 57.8571H45.1428C44.6004 57.8571 44.1607 58.2968 44.1607 58.8393C44.1607 59.3817 44.6004 59.8214 45.1428 59.8214H47.1071C47.6495 59.8214 48.0893 59.3817 48.0893 58.8392C48.0893 58.2968 47.6495 57.8571 47.1071 57.8571Z"
                  fill="white"
                />
                <path
                  d="M53.9821 57.8571H52.0179C51.4754 57.8571 51.0357 58.2968 51.0357 58.8393C51.0357 59.3817 51.4754 59.8214 52.0179 59.8214H53.9821C54.5246 59.8214 54.9643 59.3817 54.9643 58.8393C54.9643 58.2968 54.5246 57.8571 53.9821 57.8571Z"
                  fill="white"
                />
                <path
                  d="M60.8572 57.8571H58.8929C58.3505 57.8571 57.9107 58.2968 57.9107 58.8393C57.9107 59.3817 58.3505 59.8214 58.8929 59.8214H60.8572C61.3996 59.8214 61.8393 59.3817 61.8393 58.8393C61.8393 58.2968 61.3995 57.8571 60.8572 57.8571Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b"
                  x="-20"
                  y="-20"
                  width="340"
                  height="140"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0">
                  <rect
                    width="27.5"
                    height="27.5"
                    fill="white"
                    transform="translate(39.25 36.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
          >
            <svg
              class="h-16 sm:h-24"
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="40"
                  y="32"
                  width="69"
                  height="69"
                  rx="14"
                  fill="#F3627C"
                />
              </g>
              <rect
                x="51.35"
                y="44.075"
                width="47.3"
                height="44.85"
                rx="8"
                fill="white"
              />
              <path
                d="M74.5 54.425V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M65.875 58.7375L65.875 78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M83.125 63.9125V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="149"
                  height="149"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="20" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              class="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
              src="https://mhaecal.github.io/frontend/img/ux-class.svg "
              alt=""
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <img
              class="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
              src="https://mhaecal.github.io/frontend/img/congrat.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          class="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div class="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
};

export default Header;
