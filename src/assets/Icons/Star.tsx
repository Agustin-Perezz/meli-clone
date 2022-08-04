export default function Star( props: React.SVGProps<SVGSVGElement> ) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height="16"
      width="16.8"
      viewBox="0 0 10 10"
      { ...props }
    >
      <path 
        fillRule="evenodd" 
        d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z">
      </path>
    </svg>
)}
