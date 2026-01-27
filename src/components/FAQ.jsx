import { useState } from "react";

export default function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'faq ${open ? "open" : ""}'} >
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-a"><p>{a}</p></div>}
    </div>
  );
}