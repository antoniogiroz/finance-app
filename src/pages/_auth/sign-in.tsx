import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/sign-in')({
  component: SignInPage,
});

function SignInPage() {
  return (
    <>
      <div className="text-center space-y-4 pt-16">
        <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
        <p className="text-base text-[#7E8CA0] ">Log in or Create account to get back to your dashboard!</p>
      </div>
      <div className="mx-auto flex items-center justify-center mt-8 border shadow-md rounded-md p-4 h-[400px] w-[400px]">
        Sign In form
      </div>
    </>
  );
}
