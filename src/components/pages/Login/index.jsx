import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { setToken } from "../../../app/features/token/tokenSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const expires_in = params.get("expires_in");
    if (access_token) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_in", expires_in);
      dispatch(setToken({ access_token, expires_in }));
      navigate("/dashboard");
    }
  }, []);

  const userLogin = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_REDIRECT_URI;
    console.log(clientId);
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-top-read",
      "user-read-recently-played",
      "user-read-playback-position",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
      " "
    )}&response_type=token&show_dialog=true`;
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
