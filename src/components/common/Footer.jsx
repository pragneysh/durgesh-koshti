import logo from "../../../public/assets/logo.png";

export default function Footer() {
  const portfolio = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
    "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7",
  ];

  return (
    <footer className="bg-accent">
      {/* top border */}
      <div className="h-2 bg-primary"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Omni Yoga" className="h-50 object-contain" />
        </div>

        <div className="border-t border-primary/30 mb-10"></div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 pb-10">
          {/* Story */}
          <div>
            <h3 className="font-semibold text-dark mb-4 tracking-wider">
              STORY
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              eros et nibh consequat laoreet.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 text-gray-400">
              <div className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-primary hover:text-white transition">
                f
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-primary hover:text-white transition">
                t
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-primary hover:text-white transition">
                in
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-primary hover:text-white transition">
                ig
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-dark mb-4 tracking-wider">
              MENU
            </h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-primary cursor-pointer">About us</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Classes</li>
              <li className="hover:text-primary cursor-pointer">Trainers</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-dark mb-4 tracking-wider">
              INFORMATION
            </h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-primary cursor-pointer">Time</li>
              <li className="hover:text-primary cursor-pointer">Class</li>
              <li className="hover:text-primary cursor-pointer">Rules</li>
              <li className="hover:text-primary cursor-pointer">Feedback</li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-semibold text-dark mb-4 tracking-wider">
              PORTFOLIO
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {portfolio.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="yoga"
                  className="w-full h-16 object-cover rounded hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
