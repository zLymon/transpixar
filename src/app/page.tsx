// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            TransPixar AI Video Transparency Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Create transparent background videos effortlessly with TransPixar&apos;s advanced AI technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="https://huggingface.co/spaces/wileewang/TransPixar"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Try TransPixar Free
            </Link>
            <a
              href="https://github.com/wileewang/TransPixar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium"
            >
              View Source
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">AI-Powered TransPixar Technology</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced AI models for accurate video background removal
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Fast Processing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized TransPixar algorithms ensure quick transparent video generation
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">High-Quality Output</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate professional-grade transparent background videos
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">TransPixar Showcase</h2>
          <video
            src="/videos/fire.mp4"
            controls
            className="w-full rounded-lg"
            loop
            muted
            playsInline
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            Powered by TransPixar AI Technology © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
