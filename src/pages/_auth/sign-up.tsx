import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}
