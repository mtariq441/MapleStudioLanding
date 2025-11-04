import { SiFacebook, SiInstagram, SiPinterest } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-3xl mb-4">Maple Sugar Studio</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating handmade art that brings the beauty of nature into your home.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover-elevate inline-block" data-testid="link-shop">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block" data-testid="link-about">
                  About the Artist
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block" data-testid="link-commissions">
                  Commission Work
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block" data-testid="link-gallery">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-pinterest"
              >
                <SiPinterest className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Follow along for new work, studio updates, and behind-the-scenes glimpses.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Maple Sugar Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
