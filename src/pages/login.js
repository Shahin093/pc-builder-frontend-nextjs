import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="mt-52">
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/",
          })
        }
      >
        Github Login{" "}
      </button>
    </div>
  );
};

export default LoginPage;
