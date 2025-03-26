import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <i className="fas fa-flask text-white"></i>
              </div>
              <span className="text-xl font-bold">AI SaaS Labs</span>
            </div>
            <p className="text-slate-400 mb-4">
              Transforming underperforming SaaS businesses into profitable, growing companies through AI-powered optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/process">
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">Process</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">SaaS Valuation Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AI Transformation Playbook</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Podcast</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope text-slate-400 mt-1"></i>
                <span className="text-slate-400">contact@aisaaslabs.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone text-slate-400 mt-1"></i>
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-slate-400 mt-1"></i>
                <span className="text-slate-400">123 Tech Lane, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>© {new Date().getFullYear()} AI SaaS Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
