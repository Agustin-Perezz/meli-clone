export default function Dislike( props: React.SVGProps<SVGSVGElement> ) {
  return (
    <svg 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20"
      { ...props }
    >
      <path 
        fillRule="nonzero" d="M6.957 12.536l.861.334L10.383 18l1.017-.509a3 3 0 0 0 1.473-3.719l-.286-.777h2.8a2.4 2.4 0 0 0 2.242-3.256L16.425 6.58a4.2 4.2 0 0 0-4.682-2.635l-3.546.65h-1.24v-1.2h-4.15v10.2h4.15v-1.06zm0-1.288V5.795h1.294l.109-.01 3.6-.66a3 3 0 0 1 3.343 1.883l1.205 3.159a1.2 1.2 0 0 1-1.121 1.628h-4.52l.88 2.392a1.8 1.8 0 0 1-.828 2.202l-2.234-4.47-1.728-.67zm-2.95-6.652h1.75v7.8h-1.75v-7.8z">
      </path>
      </svg>
)}