interface Props {
  top: string;
  left: string;
}

const Marker = (props: Props) => {
  const { top, left } = props;
  return (
    <div
      className={`markerContainer bg-white rounded-full h-6 w-6 lg:h-12 lg:w-12 absolute`}
      style={{ top, left }}
    />
  );
};

export default Marker;
