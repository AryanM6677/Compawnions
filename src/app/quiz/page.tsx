import { Quiz } from '@/components/Quiz';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Let's find your <span className="text-terracotta">match.</span>
          </h1>
          <p className="text-lg text-white/70">
            Be brutally honest. We're matching for life.
          </p>
        </div>
        <Quiz />
      </div>
    </main>
  );
}
