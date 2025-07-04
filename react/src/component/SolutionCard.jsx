function SolutionCard({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`relative max-w-xs overflow-hidden rounded-2xl shadow-lg group ${className}`}
    >
      <img
        src={imgSrc}
        alt=""
        className="transition-transform group-hover:scale-110 duration-200"
      />
      <div className="absolute inset-0 flex items-end bg-gray-700">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  )
}
export default SolutionCard;
