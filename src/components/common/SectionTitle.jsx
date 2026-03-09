import lotus from "../../../public/assets/lotus.png";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10 md:mb-12 flex flex-col items-center px-4">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-primary mb-4 leading-snug">
        {title}
      </h2>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 w-full max-w-md">
        
        <div className="flex-1 h-[1px] bg-[#5BA69A]" />

        <img
          src={lotus}
          alt="Yoga Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
        />

        <div className="flex-1 h-[1px] bg-[#5BA69A]" />

      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}