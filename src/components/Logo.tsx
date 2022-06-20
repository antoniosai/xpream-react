import XpreamLogo from '@assets/images/xpream_logo.png';

interface ImageProps {
  height?: string;
  width?: string;
}

export default function Logo(props: ImageProps) {
  return (
    <img
      src={XpreamLogo}
      height={props.height}
      width={props.width}
      alt="Logo XPREAM"
    />
  );
}
