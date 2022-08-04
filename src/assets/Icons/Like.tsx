export default function Like( props: React.SVGProps<SVGSVGElement> ) {
  return (
    <svg 
      aria-hidden="true" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20"
      { ...props }
    >
      <path 
        fillRule="nonzero" d="M6.15 5.464l.86-.334L9.576 0l1.017.509a3 3 0 0 1 1.473 3.719l-.286.777h2.8a2.4 2.4 0 0 1 2.243 3.256l-1.205 3.159a4.2 4.2 0 0 1-4.682 2.635l-3.546-.65H6.15v1.2H2v-10.2h4.15v1.06zm0 1.288v5.453h1.294l.108.01 3.6.66a3 3 0 0 0 3.343-1.883L15.7 7.833a1.2 1.2 0 0 0-1.12-1.628h-4.52l.88-2.392a1.8 1.8 0 0 0-.829-2.202l-2.234 4.47-1.728.67zM3.2 13.404h1.75v-7.8H3.2v7.8z">
      </path>
    </svg>
)}

