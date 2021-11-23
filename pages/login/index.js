import { useState, useRef, useEffect } from "react";
import { signIn, getSession } from "next-auth/client";
import { useRouter } from "next/router";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      // set some auth state
      router.replace("/dashboard");
    }
  };

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="justify-center items-center bg-gray-100">
      <form
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
        onSubmit={handleLogin}
      >
        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
        <input
          type="email"
          name="email"
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          ref={emailInputRef}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          ref={passwordInputRef}
          placeholder="Password"
          required
        />
        <button
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
          id="login"
          type="submit"
        >
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
