const KwaiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
    {/* Sol estilizado do Kwai */}
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
    {/* Raios externos */}
    <path d="M12 2L12 6M12 18L12 22M22 12L18 12M6 12L2 12M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"/>
    {/* K estilizado no centro */}
    <path d="M10 9L10 15M10 12L14 9M10 12L14 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"/>
  </svg>
);
export default KwaiIcon;