import * as React from "react";

function SvgComponent(props: any) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
    </svg>
  );
}

export default SvgComponent;

//material-ui subject icon https://material.io/resources/icons/?icon=subject&style=baseline
//component generated by svgr https://github.com/gregberge/svgr
