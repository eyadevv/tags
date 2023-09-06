import Tag from "@/src/components/Tag/Tag";
import { ReactNode } from "react";

const Preview = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Tag />
      {children}
    </section>
  );
};
export default Preview;
