import React from "react";

function FeatureBox(props) {
  return (
    <div className="bg-[#101a23] border border-slate-700 rounded-lg p-6 w-full sm:w-[260px] text-slate-300">
      <div className="text-2xl mb-2">{props.icon}</div>
      <h3 className="font-semibold text-white mb-1">{props.title}</h3>
      <p className="text-sm">{props.para}</p>
    </div>
  );
}

export default FeatureBox;
