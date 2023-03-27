import { useEffect, useState } from "react";

export default function ImgProvider(props) {
  const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     setLoading(true);
  //   }, [props]);
  return (
    <div className={` relative w-full min-h-[350px] rounded-[5px]   `}>
      {loading ? (
        <div
          className={` animate-pulse w-full min-h-[350px] rounded-[5px] bg-slate-200 `}
        />
      ) : null}

      <img
        src={props?.srcs}
        onLoad={() => {
          setLoading(false);
        }}
        alt={props?.alts}
        className={` ${
          loading ? "hidden" : "block"
        }" w-full h-full rounded-[5px] object-cover absolute  "`}
      />
    </div>
  );
}
