import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">
          Next.js + Tailwind + Shadcn
        </h1>
        <Button className="mt-4 w-full">Start Coding</Button>
      </div>
    </div>
  );
}
