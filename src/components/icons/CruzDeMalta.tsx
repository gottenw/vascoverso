const CruzDeMalta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" {...props}>
    {/* Cruz de Malta do Vasco da Gama */}
    <g transform="translate(50, 50)">
      {/* Braço superior */}
      <path d="M-8 -20 L-8 -45 L-4 -50 L0 -45 L4 -50 L8 -45 L8 -20 Z"
            fill="currentColor"/>
      {/* Braço direito */}
      <path d="M20 -8 L45 -8 L50 -4 L45 0 L50 4 L45 8 L20 8 Z"
            fill="currentColor"/>
      {/* Braço inferior */}
      <path d="M8 20 L8 45 L4 50 L0 45 L-4 50 L-8 45 L-8 20 Z"
            fill="currentColor"/>
      {/* Braço esquerdo */}
      <path d="M-20 8 L-45 8 L-50 4 L-45 0 L-50 -4 L-45 -8 L-20 -8 Z"
            fill="currentColor"/>
      {/* Centro */}
      <rect x="-8" y="-8" width="16" height="16" fill="currentColor"/>
    </g>
  </svg>
);

export default CruzDeMalta;
