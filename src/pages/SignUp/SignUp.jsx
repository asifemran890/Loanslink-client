import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { saveOrUpdateUser } from "../../utils";

const SignUp = () => {
  const {
    createUser,
    signInWithGithub,
    updateUserProfile,
    signInWithGoogle,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // PASSWORD VALIDATION

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      // 1. Create user
      const result = await createUser(email, password);

      // 2. Update name + photoURL
      await updateUserProfile(displayName, photoURL);
      await saveOrUpdateUser({ displayName, photoURL, email });
      console.log(result);

      toast.success("Signup Successful!");

      // redirect
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // Handle github Signin
  const handleGithubSignIn = async () => {
    try {
      const { user } = await signInWithGithub();
      await saveOrUpdateUser({
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });
      navigate(from, { replace: true });
      toast.success("GitHub Login Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md lg:w-5xl p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold"> Register</h1>
          <p className="text-sm text-gray-400">Welcome to Loanlink</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="displayName"
                placeholder="Enter Your Name Here"
                required
                className="w-full px-3 py-2 border rounded-md bg-gray-200 border-gray-300"
              />
            </div>

            {/* photoURL */}
            <div>
              <label className="block mb-2 text-sm">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your image URL"
                required
                className="w-full px-3 py-2 border rounded-md bg-gray-200 border-gray-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md bg-gray-200 border-gray-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md bg-gray-200 border-gray-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary  btn-outline w-full rounded-md py-3 "
          >
            Continue
          </button>
        </form>

        {/* Google sign in */}
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-400">or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <div
          onClick={handleGithubSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FaGithub size={32} />
          <p>Continue with GitHub</p>
        </div>
        {/* Link to login */}
        <p className="px-6 text-sm text-center ">
          Already have an account?{" "}
          <Link to="/login" className="underline  text-amber-700">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
