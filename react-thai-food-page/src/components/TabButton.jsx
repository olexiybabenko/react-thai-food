// TabButton component
export default function TabButton({ text, isSelected, onClick }) {
  // JSX Output
  return (
    <button
      onClick={onClick}
      className={
        isSelected
          ? "bg-lime-400 py-1 px-2 text-sm md:text-base text-black  rounded border border-lime-950"
          : " bg-lime-100 hover:bg-lime-200 py-1 px-2 text-sm md:text-base text-lime-950  rounded border border-lime-950 "
      }
    >
      {text}
    </button>
  );
}
