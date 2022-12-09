/* eslint-disable-next-line */
export interface LogoProps {
  width?: string;
  height?: string;
  type?: 'full' | 'logo';
}

export function Logo(props: LogoProps) {
  const { width, height, type } = props;
  return (
    <div className="flex select-none justify-center items-center">
      <svg
        width="30"
        height="30"
        viewBox="0 0 107 107"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-600"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.1968 94.5721C76.0478 94.5721 94.5721 76.0478 94.5721 53.1968C94.5721 30.3459 76.0478 11.8215 53.1968 11.8215C30.3459 11.8215 11.8215 30.3459 11.8215 53.1968C11.8215 76.0478 30.3459 94.5721 53.1968 94.5721ZM53.1968 106.394C82.5766 106.394 106.394 82.5766 106.394 53.1968C106.394 23.817 82.5766 0 53.1968 0C23.817 0 0 23.817 0 53.1968C0 82.5766 23.817 106.394 53.1968 106.394Z"
        />
        <path d="M77.1351 53.1969C77.1351 66.4178 66.4174 77.1355 53.1965 77.1355C39.9756 77.1355 29.2579 66.4178 29.2579 53.1969C29.2579 39.976 39.9756 29.2583 53.1965 29.2583C66.4174 29.2583 77.1351 39.976 77.1351 53.1969Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.1965 65.3139C59.8886 65.3139 65.3136 59.8889 65.3136 53.1969C65.3136 46.5048 59.8886 41.0798 53.1965 41.0798C46.5044 41.0798 41.0795 46.5048 41.0795 53.1969C41.0795 59.8889 46.5044 65.3139 53.1965 65.3139ZM53.1965 77.1355C66.4174 77.1355 77.1351 66.4178 77.1351 53.1969C77.1351 39.976 66.4174 29.2583 53.1965 29.2583C39.9756 29.2583 29.2579 39.976 29.2579 53.1969C29.2579 66.4178 39.9756 77.1355 53.1965 77.1355Z"
        />
      </svg>

      {type === 'full' && (
        <p className="ml-1.5 -mt-0.5 text-2xl font-bold text-gray-700">
          eziSnap
        </p>
      )}
    </div>
  );
}

const defaultLogoProps = {
  width: '135.94',
  height: '31.9',
};

Logo.defaultProps = defaultLogoProps;

export default Logo;
