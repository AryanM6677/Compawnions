import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-700 mt-auto">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="bg-terracotta text-white p-2 rounded-lg font-bold text-lg">🐾</div>
              <span className="text-2xl font-extrabold tracking-tight">ComPAWnions</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              The world's most advanced empathetic matching engine for finding your perfect biological companion.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/quiz" className="text-white/60 hover:text-terracotta transition-colors text-sm">The Matchmaker</Link></li>
              <li><Link href="/wiki" className="text-white/60 hover:text-terracotta transition-colors text-sm">Breed Encyclopedia</Link></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Adoption Resources</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Financial Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Partner Shelters</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-terracotta transition-colors text-sm">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ComPAWnions Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-terracotta hover:text-white cursor-pointer transition-colors">𝕏</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-terracotta hover:text-white cursor-pointer transition-colors">in</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-terracotta hover:text-white cursor-pointer transition-colors">ig</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
