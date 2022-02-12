import React from "react";

export default function TrendsLeftMediaComponent({section,index}) {
  return (
    <section key={index}>
      <span className="text-xs italic font-black">Section - {index}</span>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:px-0 px-5">
        <div className={`${section?.leftBackground ? "bg-red-50" : ""} p-5`}>
          <h3 className="font-black text-md">{section.heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: section.Media }}></div>
      </div>
    </section>
  );
}
