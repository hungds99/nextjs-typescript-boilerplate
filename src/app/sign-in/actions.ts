'use server';

import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signIn = async (formData: FormData) => {
  const validatedFields = signInSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validatedFields.success) {
    throw new Error('Invalid fields');
  }

  // Call your API here
  const response = await fetch('/api/sign-in', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to sign in');
  }

  return response.json();
};
