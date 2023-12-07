import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleGitHubSignIn = async () => {
    try {
      await signIn("github", {
        callbackUrl: "https://pc-builder-frontend-shahin093.vercel.app/",
      });
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "https://pc-builder-frontend-shahin093.vercel.app/",
      });
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  return (
    <div className="">
      <section class=" flex flex-row lg:h-screen lg:items-center ">
        <div class="w-full bg-gray-200 px-4 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-8">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p class="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
            {/* <div>
              <label for="email" class="sr-only">
                Email
              </label>

              <div class="">
                <input
                  type="email"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label for="password" class="sr-only">
                Password
              </label>

              <div class="">
                <input
                  type="password"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div> */}

            {/* <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                No account?
                <a class="underline" href="">
                  Sign up
                </a>
              </p>

              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div> */}
          </form>
          <div class="mt-16 grid space-y-4">
            <button
              class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              onClick={handleGoogleSignIn}
            >
              <div class="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  class="absolute left-0 w-5"
                  alt="google logo"
                />
                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
            <button
              class="group h-12 px-6 border-2 border-gray-300 rounded-full transition  
 hover:border-blue-400 focus:bg-blue-50 "
              onClick={handleGitHubSignIn}
            >
              <div class="relative flex items-center space-x-4 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="absolute left-0 w-5 text-gray-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Github
                </span>
              </div>
            </button>

            <button
              class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div class="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                  class="absolute left-0 w-5"
                  alt="Facebook logo"
                />
                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Facebook
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
