import React, { Fragment } from "react";

export default function EmailForm() {
  return (
    <Fragment>
      <div class="w-full">
        <div class="h-2 bg-indigo"></div>
        <div class="flex items-center justify-center h-screen">
          <div class="container mx-24 bg-white rounded shadow-lg">
            <div class="px-12 py-6">
              <div class="text-center">
                <h1 class="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">
                 Join the beta testing
                </h1>
                <div class="w-full text-center">
                  <form action="#">
                    <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                      <input
                        type="email"
                        placeholder="jenny.rosen@example.com"
                        class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                      />
                      <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
