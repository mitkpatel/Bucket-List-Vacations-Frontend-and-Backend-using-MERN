import React from "react";

export default function Blog() {
  return (
    <div class="w-full py-36">
      <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div class="bg-white w-full shadow rounded p-8">
          <h1 class="md:text-3xl text-2xl font-bold text-gray-800">
            BucketLists Blog
          </h1>
          <div class="grid grid-cols-1 gap-8 mt-6">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-6/12 rounded overflow-hidden">
                <img src="https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
              </div>
              <div class="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                <h2 class="text-lg font-semibold leading-tight text-gray-800">
                  Leh Ladakh
                </h2>
                <p class="leading-normal pt-2">
                  A road trip to Ladakh is no small feat- it is well and truly
                  the stuff of dreams. Ladakh’s soundlessness, its cobalt blue
                  skies, bright rainbows, and glistening lakes are pure magic.
                  This road trip boasts of iconic landmarks such as the highest
                  motorable road in the world (Khardung La); some of the highest
                  mountain passes in the world such as Zoji La and Tanglang La;
                  splendid scenic drives in remote regions, and some little
                  known gems such as the kaleidoscopic More Plains, Lamayuru,
                  and the hypnotic Gata Loops. It is truly a road trip like no
                  other!!
                </p>
                <a
                  class="leading-normal pt-2 hover:underline text-blue-600"
                  href=""
                >
                  Read more...
                </a>
              </div>
            </div>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-6/12 rounded overflow-hidden">
                <img src="https://images.unsplash.com/photo-1640035209336-df638dd26c4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
               
              </div>
              <div class="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                <h2 class="text-lg font-semibold leading-tight text-gray-800">
                  Kalpa to Kaza
                </h2>
                <p class="leading-normal pt-2">
                  On this day, you will drive to Kaza. Make sure you leave at
                  the crack of dawn as this drive is not long but it is peppered
                  with lots of sightseeing. A few places which you must explore
                  on the way to Kaza include Nako Lake Tabo Monastery and Tabo
                  Caves Dhankar Monastery (must do) If you have a couple of
                  extra days, you could also stay in this area and hike to the
                  gorgeous Dhankar Lake or visit Mudh and Pin Valley National
                  Park
                </p>
                <a
                  class="leading-normal pt-2 hover:underline text-blue-600"
                  href=""
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
