// Create the PopularDish component
export default function PopularDish({ image, title, description }) {
  // JSX Output
  return (
    <li>
      <div className="max-w-48 mx-auto ">
        <img src={image} alt={title} className="rounded" />
      </div>
      <h3 className="text-center text-amber-50 font-medium pt-1">{title}</h3>
      <p className="text-wrap text-white text-sm text-justify max-w-64 pt-0.5">
        {description}
      </p>
    </li>
  );
}
