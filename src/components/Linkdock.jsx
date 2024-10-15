import React from "react";

import { social } from "../data";

import { Dock, DockIcon } from "./ui/dock";

export default function Linkdock() {
  return (
    <div className="relative">
      <Dock direction="middle">
        {social.map((item) => (
          <DockIcon key={item.id} onClick={() => window.open(item.link, "_blank")}>
            <item.img className="size-6 text-white" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
