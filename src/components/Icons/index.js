const prefix = "img";

const files = {
  byId: {
    watch: {
      width: 32,
      height: 32,
      viewBox: [0, 0, 32, 32],
      data: '<path xmlns="http://www.w3.org/2000/svg" d="M22.43,22a0.5,0.5,0,0,0-.5.5v4.2H5.15V4.2a1.7,1.7,0,0,1,1.7-1.7H20.23a1.7,1.7,0,0,1,1.7,1.7v5a0.5,0.5,0,0,0,1,0v-5a2.7,2.7,0,0,0-2.7-2.7H6.85a2.7,2.7,0,0,0-2.7,2.7V27.8a2.7,2.7,0,0,0,2.7,2.7H20.23a2.7,2.7,0,0,0,2.7-2.7V22.5A0.5,0.5,0,0,0,22.43,22Zm-2.2,7.5H6.85a1.7,1.7,0,0,1-1.7-1.7V27.7H21.93v0.1A1.7,1.7,0,0,1,20.23,29.5Z"/><path xmlns="http://www.w3.org/2000/svg" d="M22.43,10.58A5.42,5.42,0,1,0,27.85,16,5.42,5.42,0,0,0,22.43,10.58Zm0,9.83A4.42,4.42,0,1,1,26.85,16,4.42,4.42,0,0,1,22.43,20.42Z"/><path xmlns="http://www.w3.org/2000/svg" d="M22.93,15.76V12.82a0.5,0.5,0,1,0-1,0V16a0.5,0.5,0,0,0,.19.39l2.22,1.73a0.5,0.5,0,0,0,.31.11A0.5,0.5,0,0,0,25,17.33Z"/><path xmlns="http://www.w3.org/2000/svg" d="M10.36,3.48a0.5,0.5,0,0,0,0,1h6.36a0.5,0.5,0,0,0,0-1H10.36Z"/>',
    },
  },
  allIds: ["watch"],
};

const SvgIcon = (props) => {
  const { isHidden, children, id, width, height, className, style } = props;
  if (isHidden) {
    return <svg display="none">{children}</svg>;
  }

  const file = files.byId[id];

  if (!file) return null;

  const baseWidth = width || file.width || null;
  const baseHeight = height || file.height || null;
  const viewBox = file.viewBox ? file.viewBox.join(" ") : `0 0 ${width} ${height}`;

  return isHidden ? (
    <svg display="none">{children}</svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio="xMinYMin"
      width={baseWidth}
      height={baseHeight}
      viewBox={viewBox}
      className={`svg ${className}`}
      style={style}
    >
      <use xlinkHref={`#${prefix}-${id}`} />
    </svg>
  );
};

const SVGSource = () => (
  <SvgIcon isHidden>
    <defs>
      {files.allIds.reduce((defs, fileId) => {
        const file = files.byId[fileId];
        return defs.concat(
          <g
            key={fileId}
            id={`${prefix}-${fileId}`}
            dangerouslySetInnerHTML={{ __html: file.data }}
          />
        );
      }, [])}
    </defs>
  </SvgIcon>
);

export { SvgIcon, SVGSource };
