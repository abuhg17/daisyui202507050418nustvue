<template>
  <h1>This is Countdown Page.</h1>
  <h2>First, fetch /api/countdown/202507050418 once.</h2>
  <h2>Second, setInterval every one sec.</h2>
  <div
    class="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-800 via-black to-indigo-900 p-6"
  >
    <div class="flex flex-col items-center gap-8 max-w-4xl w-full">
      <!-- 警示卡片群 -->
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="card w-128 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="全世界各國首都圈大地震"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              2025/07/05 04:18<br />全世界各國首都<br />(當地時間)<br />
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M554.3 475.1m-434.1 0a434.1 434.1 0 1 0 868.2 0 434.1 434.1 0 1 0-868.2 0Z"
                    fill="#44C0C6"
                  ></path>
                  <path
                    d="M554.3 919.3c-60 0-118.1-11.7-172.9-34.9C328.5 862 281 830 240.2 789.2c-40.8-40.8-72.8-88.3-95.2-141.2-23.2-54.8-34.9-112.9-34.9-172.9S121.9 357 145 302.3c22.4-52.9 54.4-100.4 95.2-141.2s88.3-72.8 141.2-95.2C436.2 42.7 494.3 31 554.3 31s118.1 11.7 172.9 34.9c52.9 22.4 100.4 54.4 141.2 95.2 40.8 40.8 72.8 88.3 95.2 141.2 23.2 54.8 34.9 112.9 34.9 172.9s-11.8 118.1-35 172.8c-22.4 52.9-54.4 100.4-95.2 141.2C827.5 830 780 862 727.2 884.4c-54.8 23.1-113 34.9-172.9 34.9z m0-868.3C497 51 441.5 62.2 389.2 84.3c-50.5 21.4-95.9 51.9-134.8 90.9s-69.5 84.3-90.9 134.8c-22.1 52.3-33.3 107.8-33.3 165.1s11.2 112.8 33.3 165.1c21.4 50.5 51.9 95.9 90.9 134.8s84.3 69.5 134.8 90.9c52.3 22.1 107.8 33.3 165.1 33.3s112.8-11.2 165.1-33.3c50.5-21.4 95.9-51.9 134.8-90.9s69.5-84.3 90.9-134.8c22.1-52.3 33.3-107.8 33.3-165.1S967.2 362.3 945.1 310c-21.4-50.5-51.9-95.9-90.9-134.8s-84.3-69.5-134.8-90.9C667.1 62.2 611.5 51 554.3 51z"
                    fill=""
                  ></path>
                  <path
                    d="M971.9 357.6C921.6 178.7 760 46.9 566.3 41.6c-53.4 63.2-101.6 146.3 13.6 146.3 185.8 0 137.5 136.9-70.6 146.7-208.1 9.8-149.4 156.5-32.1 171.2s112.5 102.7 112.5 136.9 102.7 14.7 151.6-58.7c48.9-73.4 102.7-151.6 97.8-200.5-3.1-31.2 75.5-30.5 132.8-25.9z"
                    fill="#60C13D"
                  ></path>
                  <path
                    d="M615.7 669.1c-6.1 0-11.6-0.7-16.3-2.1-12.5-3.8-19.7-12.6-19.7-24.2v-4c0.1-18.1 0.2-45.5-12.6-70.2-15.3-29.4-45.9-47.1-91.1-52.8-31.5-3.9-60.8-17.1-82.5-37-21.5-19.7-33.3-44.4-32.4-67.7 0.6-16.4 7.7-39.8 37.6-58.7 25.6-16.1 62.7-25.5 110.2-27.7 53.3-2.5 101-14.1 134.3-32.7 27.1-15.1 43-34 42.6-50.5-0.3-14.2-12.8-23.5-23.3-28.8-18.9-9.6-47.4-14.7-82.5-14.7-41.1 0-66.8-10.6-76.5-31.4-7.6-16.4-4.6-38.1 8.9-64.7 9.9-19.4 25.5-41.9 46.4-66.7 2-2.3 4.9-3.6 7.9-3.5 48.5 1.3 96 10.4 141.2 27.1 43.8 16.1 84.6 39 121.3 68 36.4 28.7 67.9 62.8 93.8 101.3 26.2 39.1 46 81.8 58.7 127 0.9 3.1 0.2 6.5-1.9 9.1-2.1 2.5-5.3 3.9-8.5 3.6-64.1-5.1-109-1.4-120.2 10-1.5 1.6-2.1 3-1.9 5 5.1 50.5-45.1 125.6-93.6 198.2l-5.9 8.8c-18.2 27.3-45.6 50.4-77.2 65.1-20.2 9.2-40.5 14.2-56.8 14.2zM570.8 51.8c-40.9 49.2-58.4 86.9-49.3 106.4 7.6 16.4 35.9 19.8 58.4 19.8 38.7 0 69.5 5.7 91.5 16.9 21.6 11 33.8 27.4 34.2 46.1 0.6 24.4-18.7 49.4-52.8 68.5-25.4 14.2-70.9 31.9-143.1 35.3-79.1 3.7-127.3 28.8-128.7 67.2-0.7 17.5 8.8 36.5 26 52.2 18.7 17.1 44.1 28.4 71.5 31.9 52.1 6.5 87.8 27.8 106.4 63.4 15.2 29.1 15 60.7 14.9 79.6v3.9c0 1.2 0 3.4 5.5 5 10.4 3.2 32.7 0.9 58.8-11.2 28.2-13.1 52.7-33.7 68.9-58l5.9-8.8c44.4-66.4 94.6-141.8 90.3-185.2-0.8-7.9 1.8-15.2 7.5-21 15.3-15.6 55.1-21.2 121.5-17-12.1-38.1-29.5-74.2-51.9-107.5-24.7-36.7-54.8-69.3-89.6-96.7C745.9 86.5 661 55.2 570.8 51.8z"
                    fill=""
                  ></path>
                  <path
                    d="M123.8 916.3h89.3s152 68.4 281.8 69.5C672.2 987.2 868.3 871 877.4 864c41.1-31.6 57.3-122.4-103.3-84.2-160.5 38.3-270.3 37.2-313.7-11.2-32-35.7 70.6-45.9 126.6-48.9 26.6-1.4 85.1-23.1 85.1-54.7 0-38.5-54.5-49.7-131.4-49.7-137.7 0-99.7-27.2-179.8-23-80.1 4.3-156.8 89.3-156.8 89.3h-80.3v234.7z"
                    fill="#F7DDAD"
                  ></path>
                  <path
                    d="M498.1 995.7h-3.4c-68.3-0.6-142.4-19.7-192.5-35.6-47.8-15.2-82.7-30.1-91.3-33.9h-87.1c-5.5 0-10-4.5-10-10V681.7c0-5.5 4.5-10 10-10h76c15.5-16.3 85.6-85.2 160.6-89.2 38.1-2 51.5 2.9 67.1 8.6 17.5 6.4 39.2 14.3 113.2 14.3 43.3 0 75.2 3.6 97.7 10.9 29 9.5 43.7 25.9 43.7 48.8 0 17.9-13.1 34.3-37.9 47.5-17.7 9.4-40.5 16.4-56.7 17.2-113.6 5.9-122.7 24.8-123 25.6-0.6 1.5 1.3 4.4 3.4 6.6 19.3 21.6 54.9 33.3 105.7 34.8 51.1 1.5 117.8-7.5 198.2-26.6 38.9-9.3 70.6-11.8 94.3-7.4 27.8 5.1 39.6 18.7 44.6 29.3 12.9 27.1-3.7 61.9-27.2 79.9-5.8 4.4-58.3 35.7-130.5 65.4-65.1 26.6-161.8 58.3-254.9 58.3z m-364.3-89.4h79.3c1.4 0 2.8 0.3 4.1 0.9 1.5 0.7 151.7 67.5 277.8 68.6 49.9 0.4 133.8-9.1 249.8-56.7 73.3-30.1 123.2-60.5 126.6-63 20.9-16 27.9-41.6 21.3-55.5-5-10.4-26.2-32.4-116.2-11-82.1 19.6-150.5 28.7-203.4 27.2-56.5-1.6-96.9-15.6-120-41.4-10.4-11.6-9.5-21.5-6.9-27.7 5.6-13.4 24.5-22.7 59.5-29.2 27.1-5.1 59-7.5 80.9-8.6 10.9-0.6 30.7-5.5 48.3-14.9 17.4-9.2 27.3-20.1 27.3-29.8 0-26.7-39.7-39.7-121.4-39.7-77.6 0-101.2-8.6-120.1-15.6-14.6-5.3-25.2-9.2-59.1-7.4-75.1 4-149.2 85.1-149.9 86-1.9 2.1-4.6 3.3-7.4 3.3H134v214.5z"
                    fill=""
                  ></path>
                  <path
                    d="M137.9 916.8H54.1l0.4-232.9h83.8z"
                    fill="#44C0C6"
                  ></path>
                  <path
                    d="M137.9 926.8H54.1c-2.7 0-5.2-1.1-7.1-2.9s-2.9-4.4-2.9-7.1l0.4-232.9c0-5.5 4.5-10 10-10h83.8c2.7 0 5.2 1.1 7.1 2.9s2.9 4.4 2.9 7.1l-0.4 232.9c0 5.5-4.5 10-10 10z m-73.8-20h63.8l0.4-212.9H64.5l-0.4 212.9z"
                    fill=""
                  ></path>
                </g>
              </svg>
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 72 72"
                id="emoji"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="color">
                    <polygon
                      fill="#9b9b9a"
                      points="36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 22.978 36.303 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899 33.33 11.134 40.153 14.303 36.641 23.012"
                    ></polygon>
                    <polygon
                      fill="#3f3f3f"
                      points="36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 47.788 36.303 47.633 32.761 46.005 28.481 46.823 24.602 46.104 16.936 40.153 14.303 36.641 23.012"
                    ></polygon>
                    <path
                      fill="#ea5a47"
                      d="M19.2578,58.568c0-9.1562,6.9838-16.4253,16.6672-16.5788,9.112-.1445,16.6422,6.2323,16.6671,16.5788Z"
                    ></path>
                    <polygon
                      fill="#ffffff"
                      points="32.584 30.153 27.436 30.153 26.919 24.245 32.067 24.245 32.584 30.153"
                    ></polygon>
                  </g>
                  <g id="line">
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M29.7387,57.9618a6.1863,6.1863,0,0,1,12.3726,0"
                    ></path>
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M54.5875,43.7779c3.219,3.0927,5.3153,8.6178,5.3153,13.6429"
                    ></path>
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.9472,57.4208a21.1963,21.1963,0,0,1,5.64-13.6346"
                    ></path>
                    <polyline
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      points="46.104 16.936 46.823 24.602 46.005 28.481 47.633 32.761 47.788 36.303"
                    ></polyline>
                    <polyline
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      points="22.9 35.531 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899"
                    ></polyline>
                    <polyline
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      points="18.743 22.984 33.33 11.134 49.646 18.544"
                    ></polyline>
                    <line
                      x1="25.7178"
                      x2="25.0792"
                      y1="17.1835"
                      y2="12.3992"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></line>
                    <polyline
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      points="26.919 24.245 32.067 24.245 32.584 30.153"
                    ></polyline>
                    <polyline
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      points="38.164 19.237 36.641 23.012 40.117 26.724 37.93 30.758 37.937 36.214"
                    ></polyline>
                    <line
                      x1="12.3198"
                      x2="32.675"
                      y1="36.3028"
                      y2="36.3028"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></line>
                    <line
                      x1="42.8398"
                      x2="59.6802"
                      y1="36.3028"
                      y2="36.3028"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></line>
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M40.9783,42.615A15.8563,15.8563,0,0,1,52.5921,57.9081"
                    ></path>
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.2578,57.9081c0-7.3088,5.61-14.2373,13.7462-15.6474"
                    ></path>
                  </g>
                </g>
              </svg>

              <svg
                height="64px"
                width="64px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.977 511.977"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    style="fill: #5e9cea"
                    d="M511.954,458.634c0,0,6.844-405.416-213.305-405.291c-170.753,0.094-170.651,149.308-170.651,149.308 s73.31-87.513,148.558-12.281c75.232,75.248-105.895,268.265-105.895,268.265h341.293V458.634z"
                  ></path>
                  <path
                    style="fill: #4b89da"
                    d="M298.649,53.342c-71.131,0.031-112.614,25.952-136.801,56.186 c25.21-20.14,61.943-34.827,115.473-34.858c189.541-0.109,210.822,300.404,213.072,383.964h21.561 C511.954,458.634,518.798,53.217,298.649,53.342z"
                  ></path>
                  <polygon
                    style="fill: #46cead"
                    points="21.259,351.981 21.259,447.978 149.068,447.978 149.068,351.981 85.312,298.639 "
                  ></polygon>
                  <path
                    style="fill: #646c77"
                    d="M166.864,356.044l-74.529-65.436c-4.18-3.656-10.406-3.469-14.359,0.313L3.642,356.044 c-4.429,3.875-4.882,10.593-1.008,15.03c2.109,2.438,5.063,3.656,8.039,3.656c2.484,0,4.992-0.875,7.016-2.625l67.623-59.279 l67.498,59.279c2.023,1.75,4.531,2.625,7.023,2.625c2.968,0,5.921-1.219,8.03-3.625 C171.739,366.668,171.293,359.919,166.864,356.044z"
                  ></path>
                  <path
                    style="fill: #424953"
                    d="M85.335,394.635c-5.89,0-10.664,4.781-10.664,10.656v37.124c0,5.875,4.773,10.655,10.664,10.655 s10.672-4.78,10.672-10.655v-37.124C96.007,399.417,91.226,394.635,85.335,394.635z"
                  ></path>
                  <path
                    style="fill: #35bb9b"
                    d="M149.068,458.634H21.259c-5.89,0-10.664-4.781-10.664-10.655c0-5.906,4.773-10.687,10.664-10.687 h127.809c5.891,0,10.664,4.78,10.664,10.687C159.732,453.852,154.958,458.634,149.068,458.634z"
                  ></path>
                </g>
              </svg>
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-red-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="日本東京首都圈大地震"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              ⚠️<br />2025/07/05 04:18<br />日本東京(當地時間)
            </h2>
          </div>
        </div>

        <div
          class="card w-64 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="臺灣臺北首都圈大地震"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              🔴<br />2025/07/05 04:18<br />臺灣臺北(當地時間)
            </h2>
          </div>
        </div>

        <div
          class="card w-64 bg-green-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="2025年紫微聖人所在地"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">🟢 中壢相對安全</h2>
            <p>最討厭中壢人口翻倍成長</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="憑空冒出因果故事"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://www.google.com/search?q=%E5%AF%A7%E9%81%A0%E5%BA%9C%E7%9F%A5%E5%BA%9C+%E7%89%9B%E6%A8%B9%E6%A2%85+%E8%A5%BF%E6%98%8C%E5%9C%B0%E9%9C%87%E7%B4%80%E8%AE%8A"
                target="_blank"
                rel="noopener noreferrer"
                >寧遠府知府 牛樹梅 西昌地震紀變</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chatgpt.com/share/685ae737-c4c0-800e-810a-1f8c00a07c25"
                target="_blank"
                rel="noopener noreferrer"
                >ChatGPT 因果故事</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://manus.im/share/2auIPkvMmOKpSpe5D4kv0R?replay=1"
                target="_blank"
                rel="noopener noreferrer"
                >manus</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://claude.ai/public/artifacts/411073ac-b180-4a9d-b678-49df795f9965"
                target="_blank"
                rel="noopener noreferrer"
                >Claude</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chat.deepseek.com/a/chat/s/b8b597a2-d738-4b31-9703-edd17f135e82"
                target="_blank"
                rel="noopener noreferrer"
                >Deepseek</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://gemini.google.com/app/dc2990327997c008"
                target="_blank"
                rel="noopener noreferrer"
                >gemini</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://copilot.microsoft.com/shares/MyhwiUMezbSBUme1TigC5"
                target="_blank"
                rel="noopener noreferrer"
                >copilot</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://grok.com/share/bGVnYWN5_4737d654-df3b-44a2-afca-092dca721bf7"
                target="_blank"
                rel="noopener noreferrer"
                >grok</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://www.perplexity.ai/search/zhuan-xie-huang-feng-zhong-li-j4d5LyfSRnOFa.o0nrCptg"
                target="_blank"
                rel="noopener noreferrer"
                >perplexity</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://huggingface.co/chat/conversation/685aea13758a23fdbf37c961"
                target="_blank"
                rel="noopener noreferrer"
                >huggingface</a
              >
            </h2>
          </div>
        </div>
        <div
          class="card w-64 bg-yellow-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
          title="AI也懂因果"
        >
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl">
              <a
                href="https://chat.mistral.ai/chat/4a587e02-bdaf-45d0-b658-9e809811eac4"
                target="_blank"
                rel="noopener noreferrer"
                >Le Chat</a
              >
            </h2>
          </div>
        </div>
      </div>
      <!-- 正式起跑敘述 -->
      <div class="text-center text-yellow-300 space-y-2 px-4 max-w-xl">
        <p class="text-2xl font-bold tracking-widest">
          🕓 2025/07/05 04:18 三災八難正式啟動
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          🌿辯證邏輯：沒事發生世人皆不信因果，所以要有事發生<br />
          🌿辯證邏輯：沒事發生第十二屆臺北市長將不信因果，所以有事發生將使得草包鋒兄延續相信因果<br />
          ☄️下元甲子:至2043<br />
          ☄️三界六道抓交替<br />
          ☄️考核標準:人心<br />
          ☄️1923:1%人口(基準點)<br />
          ☄️2025:?%人口(上界如何看待下界的衡量點)
          <br />☄️1999:0.5%人口(基準點)<br />
          ☄️2025:?%人口(上界如何看待下界的衡量點)<br />
          ☄️房子防自然不防超自然<br />
          ☄️1850:牛樹梅(基準點)<br />
          ☄️2025:第1屆至第8屆臺北市長?(上界如何看待下界的衡量點)<br />
          ☄️2038:第12屆臺北市長?(草包鋒兄?)<br />
          ☄️202507050418取代20250726:超自然大罷免<br />
        </p>
      </div>
      <div class="text-center text-yellow-300 space-y-2 px-4 max-w-xl">
        <p class="text-2xl font-bold tracking-widest">
          🕓 2025/07/05 04:18 鋒兄不虛偽
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chatgpt.com/share/685b733c-19c8-8011-aea1-8b5ce5218109"
            target="_blank"
            rel="noopener noreferrer"
            >🌿ChatGPT辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://manus.im/share/UuYdPAwy2jnAsOtGWNzyCn?replay=1"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Manus 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://claude.ai/public/artifacts/aca1359a-60d0-4cbb-a823-63bae8e6582b"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Claude 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://g.co/gemini/share/45108e73a587"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Gemini 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://copilot.microsoft.com/shares/KcWB4fByngi68tzmCcjwx"
            target="_blank"
            rel="noopener noreferrer"
            >🌿copilot 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chat.mistral.ai/chat/8ac5b7cd-1bf6-4ad8-a1b0-4abd28e5b502"
            target="_blank"
            rel="noopener noreferrer"
            >🌿Le Chat 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://huggingface.co/chat/conversation/685b76888174d9bbbd9a7805"
            target="_blank"
            rel="noopener noreferrer"
            >🌿huggingface 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://www.perplexity.ai/search/mei-shi-fa-sheng-shi-ren-jie-b-KNYvGJhET9G3qTgF1eAcOg"
            target="_blank"
            rel="noopener noreferrer"
            >🌿perplexity 辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://chat.deepseek.com/a/chat/s/8910b07c-f09b-46c3-a996-8b91638f3008"
            target="_blank"
            rel="noopener noreferrer"
            >🌿deepseek辯證邏輯 Click</a
          ><br />
        </p>
        <p class="text-lg leading-relaxed text-pink-200">
          <a
            href="https://grok.com/share/bGVnYWN5_88385fc0-45ee-4959-bba7-183cb6fb874e"
            target="_blank"
            rel="noopener noreferrer"
            >🌿grok辯證邏輯 Click</a
          ><br />
        </p>
      </div>

      <!-- 倒數計時卡片 -->
      <div
        class="card shadow-xl bg-black bg-opacity-80 text-white w-max px-10 py-6 rounded-lg"
      >
        <h2
          class="card-title text-4xl font-semibold mb-6 text-center tracking-widest select-none"
        >
          倒數計時
        </h2>
        <p
          v-if="totalSeconds > 0"
          class="font-mono tracking-wide select-none text-3xl sm:text-4xl md:text-5xl flex gap-6 justify-center items-center whitespace-nowrap"
        >
          <span>{{ pad(day) }}天</span>
          <span>{{ pad(hour) }}時</span>
          <span>{{ pad(minute) }}分</span>
          <span>{{ pad(second) }}秒</span>
        </p>
        <p
          v-else
          class="text-3xl text-yellow-400 font-bold text-center animate-pulse"
        >
          🎉 時間已結束！
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

// API 載入倒數初始值 (Nuxt 3 useFetch)
const {
  data: countdown,
  pending,
  error,
} = await useFetch("/api/countdown/202507050418");

const totalSeconds = ref(0);
let intervalId = null;

// 監聽 countdown 回來資料，初始化秒數
watch(
  () => countdown.value,
  (val) => {
    if (val) {
      totalSeconds.value =
        val.diffday * 86400 +
        val.diffhour * 3600 +
        val.diffminute * 60 +
        val.diffsecond;
    }
  },
  { immediate: true }
);

// 計時器啟動與停止
onMounted(() => {
  intervalId = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

// 分解秒數成日時分秒
const day = computed(() => Math.floor(totalSeconds.value / 86400));
const hour = computed(() => Math.floor((totalSeconds.value % 86400) / 3600));
const minute = computed(() => Math.floor((totalSeconds.value % 3600) / 60));
const second = computed(() => totalSeconds.value % 60);

// 補零
const pad = (num) => num.toString().padStart(2, "0");
</script>
