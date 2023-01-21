import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { setToken } from "../../../app/features/token/tokenSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUrl = process.env.REACT_APP_REDIRECT_URI;
  useEffect(() => {
    /* 
      This is a hacky way to get the access token from the URL hash. 
    */
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      dispatch(setToken({ access_token }));
      navigate("/dashboard");
    }
  }, [dispatch, navigate]);

  const userLogin = () => {
    console.log(clientId, redirectUrl + "hellp");

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
      <section className="pt-10 bg-white">
        <div className="lg:grid lg:grid-cols-12 ">
          <div className="items-center hidden lg:block lg:col-span-5">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="object-cover w-full h-full border border-gray-100 shadow-sm rounded-3xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 "
            />
          </div>
          <main className="flex items-center justify-center sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="my-2">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Spotify Music Player 🎶
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  We love to see you here. Please login to continue.
                </p>
              </div>

              <Button
                text="Login with Spotify 💚"
                size="lg"
                link="/login"
                onClick={userLogin}
              />

              <div className="my-12">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our{" "}
                  <span className="text-gray-700 underline">
                    terms and conditions{" "}
                  </span>
                  and{" "}
                  <span className="text-gray-700 underline">
                    privacy policy
                  </span>
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
