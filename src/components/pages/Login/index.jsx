import React from "react";
import Button from "../../atoms/Button";

export default function Login() {
  const userLogin = () => {
    console.log("Login");
  };
  return (
    <React.Fragment>
      <section class="bg-white pt-10">
        <div class="lg:grid lg:grid-cols-12 ">
          <div class="hidden lg:block lg:col-span-5 items-center">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-3xl"
            />
          </div>
          <main class="flex  justify-center sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6 items-center">
            <div class="max-w-xl lg:max-w-3xl">
              <div className="my-2">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Spotify Music Player 🎶
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                  We love to see you here. Please login to continue.
                </p>
              </div>

              <Button
                text="Login with Spotify 💚"
                size="lg"
                link="/login"
                onClick={userLogin}
              />

              <div class="my-12">
                <p class="text-sm text-gray-500">
                  By creating an account, you agree to our{" "}
                  <a href="#" class="text-gray-700 underline">
                    terms and conditions{" "}
                  </a>
                  and{" "}
                  <a href="#" class="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </React.Fragment>
  );
}

