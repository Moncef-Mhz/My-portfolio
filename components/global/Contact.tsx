"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "../ui/Head";
import { cn } from "@/lib/utils";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Contact = () => {
  return (
    <div
      className="max-w-7xl relative mx-auto py-40 h-full px-4 xl:px-0 w-full  space-y-6"
      id="contact"
    >
      <Head>Contact </Head>
      <div
        className={cn(
          "w-full h-full flex items-start justify-center",
          inter.className
        )}
      >
        <form></form>
      </div>
    </div>
  );
};
export default Contact;

{
  /* <div className={cn("relative flex flex-col  ", inter.className)}>
  <div className="h-40 w-[1px] bg-gradient-to-b from-white to-background" />

  <h1 className="rotate-90 origin-left text-white mb-6">OR</h1>

  <div className="h-40 w-[1px] bg-gradient-to-t from-white to-background" />
</div>; */
}
