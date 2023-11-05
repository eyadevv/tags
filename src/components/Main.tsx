"use client";
import { useInView, animated } from "@react-spring/web";
import Preview from "./Tag/Preview";
import Load from "@/src/app/actions/Load";
import { useEffect, useState, useTransition } from "react";
const Main = ({ tags }: { tags: any }) => {
  const [ref, inview] = useInView();
  const [ispending, startTransition] = useTransition();
  const [cursor, setcursor] = useState(30);
  const [data, setdata] = useState([...tags]);
  const [done, setdone] = useState(false);

  useEffect(() => {
    if (inview) {
      startTransition(async (): Promise<any> => {
        try {
          const res: {}[] = await Load(cursor);
          if (res?.length !== 0) {
            setcursor((value) => value + 30);
            setdata((prevData: any[]) => [...prevData, ...res]);
          } else setdone(true);
        } catch (error) {
          return null;
        }
        return;
      });
    }
  }, [inview]);

  return (
    <main className="w-full relative h-max flex flex-col justify-start items-center">
      <section className="w-11/12 h-max flex flex-row flex-wrap  justify-center items-center gap-3 ">
        {data?.map((tag: any, id: any) => (
          <Preview data={tag} key={id} />
        ))}
      </section>
      <animated.div
        ref={ref}
        className=" w-full sm:h-[60vh] -z-10 h-[30vh] absolute bottom-0"
      ></animated.div>
      <animated.p>
        {done && !ispending ? "That's All " : ispending ? "Loading" : null}
      </animated.p>
    </main>
  );
};
export default Main;
