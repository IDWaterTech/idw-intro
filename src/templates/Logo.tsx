type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '60' : '44';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/ID-WATER-LOGO.png"
        width={size}
        height={size}
        alt=""
      ></img>
    </span>
  );
};

export { Logo };
