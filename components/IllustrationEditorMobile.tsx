export default function IllustrationEditorMobile() {
  return (
    <svg
      width='406'
      height='331'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <linearGradient x1='0%' y1='27.846%' x2='100%' y2='72.154%' id='c'>
          <stop stop-color='#FF8F71' offset='0%' />
          <stop stop-color='#FF3E55' offset='100%' />
        </linearGradient>
        <linearGradient x1='0%' y1='41.623%' x2='100%' y2='58.377%' id='e'>
          <stop stop-color='#FF8F71' offset='0%' />
          <stop stop-color='#FF3E55' offset='100%' />
        </linearGradient>
        <filter
          x='-21.5%'
          y='-23%'
          width='142.9%'
          height='164.5%'
          filterUnits='objectBoundingBox'
          id='b'
        >
          <feOffset dy='20' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur
            stdDeviation='20'
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
            in='shadowBlurOuter1'
          />
        </filter>
        <rect id='a' x='0' y='0' width='326' height='217' rx='5' />
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <g transform='translate(40)'>
          <rect
            fill='#2D2E40'
            opacity='.08'
            transform='matrix(1 0 0 -1 0 329)'
            x='52'
            y='53'
            width='223'
            height='223'
            rx='111.5'
          />
          <rect
            stroke='#2D2E40'
            opacity='.5'
            transform='matrix(1 0 0 -1 0 326)'
            x='37.5'
            y='37.5'
            width='251'
            height='251'
            rx='125.5'
          />
          <rect
            stroke='#2D2E40'
            opacity='.25'
            transform='matrix(1 0 0 -1 0 326)'
            x='.5'
            y='.5'
            width='325'
            height='325'
            rx='162.5'
          />
        </g>
        <g transform='translate(40 54)'>
          <mask id='d' fill='#fff'>
            <use xlinkHref='#a' />
          </mask>
          <g fill-rule='nonzero'>
            <use fill='#000' filter='url(#b)' xlinkHref='#a' />
            <use fill='url(#c)' xlinkHref='#a' />
          </g>
          <path
            d='M3 63.525h320a3 3 0 013 3V214a3 3 0 01-3 3H3a3 3 0 01-3-3V66.525a3 3 0 013-3z'
            fill='#2D2E40'
            fill-rule='nonzero'
            mask='url(#d)'
          />
          <rect
            fill='#FFF'
            fill-rule='nonzero'
            mask='url(#d)'
            x='45.967'
            y='24.246'
            width='68.95'
            height='69.707'
            rx='3'
          />
          <ellipse
            fill='#2D2E40'
            mask='url(#d)'
            cx='80.442'
            cy='59.402'
            rx='19.959'
            ry='20.003'
          />
          <rect
            fill='#FFF'
            fill-rule='nonzero'
            mask='url(#d)'
            x='126.408'
            y='24.246'
            width='153.625'
            height='165.478'
            rx='3'
          />
        </g>
        <path
          d='M106 144c23.871-37.394 41.526-57.6 52.964-60.62 17.158-4.53 12.04 42.374 36.744 36.938 24.705-5.436 27.717-52.994 46.403-55.234 18.685-2.241 28.57 41.257 36.733 45.264 5.441 2.672 12.16-3.105 20.156-17.332'
          stroke='url(#e)'
          stroke-width='8'
          stroke-linecap='round'
          transform='translate(40 54)'
        />
      </g>
    </svg>
  );
}
