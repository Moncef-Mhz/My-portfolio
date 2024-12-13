"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "../ui/Head";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReactNode } from "react";
import { socialLinks } from "@/constant";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name Required" }).max(50),
  lastName: z.string().min(2, { message: "Last Name Required" }).max(50),
  email: z.string().email({ message: "Email Required" }),
  message: z.string().min(10, { message: "Message Required" }).max(500),
});

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="max-w-7xl relative mx-auto py-40 h-full px-4 xl:px-0 w-full  space-y-6"
      id="contact"
    >
      <Head>Contact </Head>
      <div
        className={cn(
          "w-full h-full gap-4 flex flex-col lg:flex-row items-center justify-center",
          inter.className
        )}
      >
        {/* Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <div className="flex items-center w-full gap-4 justify-between">
            <div className="space-y-2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                {...form.register("firstName")}
                type="text"
                placeholder="ex: Sweet"
                className="w-full px-4 py-2 border-1 text-foreground bg-zinc-800 border-gray-300 rounded-md focus:outline-none "
              />
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...form.register("lastName")}
                type="text"
                placeholder="ex: Heart"
                className="w-full px-4 py-2 border-1 text-foreground bg-zinc-800 border-gray-300 rounded-md focus:outline-none "
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              {...form.register("email")}
              type="text"
              placeholder="ex: SweetHeart@mail.com"
              className="w-full px-4 py-2 border-1 text-foreground bg-zinc-800 border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              {...form.register("message")}
              placeholder="ex: Hello Moncef! i went to discuss about a project in mind..."
              className="w-full px-4 py-2 border-1 text-foreground bg-zinc-800 min-h-[150px] border-gray-300 rounded-md focus:outline-none "
            />
          </div>
        </form>

        {/* Separator */}
        <div
          className={cn(
            "relative hidden lg:flex flex-col items-center ",
            inter.className
          )}
        >
          <div className="h-40 w-[1px] bg-gradient-to-b from-white to-background" />

          <h1 className="rotate-90 origin-center text-white text-center my-4">
            OR
          </h1>

          <div className="h-40 w-[1px] bg-gradient-to-t from-white to-background" />
        </div>

        <div
          className={cn(
            "relative lg:hidden flex items-center gap-4 justify-center w-full ",
            inter.className
          )}
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-white to-background" />

          <h1 className=" text-white ">OR</h1>

          <div className="w-full h-[1px] bg-gradient-to-l from-white to-background" />
        </div>

        {/* Social Media */}
        <div className="w-full  flex flex-col gap-4 h-full">
          {socialLinks.map((item) => (
            <Socialcomp key={item.name}>{item.icon}</Socialcomp>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Contact;

const Socialcomp = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-hidden rounded-sm cursor-pointer group h-full relative border items-center py-6 justify-center group-hover:text-foreground flex">
      <div className="group-hover:text-background z-[1] duration-150 delay-200">
        {children}
      </div>
      <span className="-translate-x-full group-hover:translate-x-0 rotate-45  bg-gradient-to-t from-white/90  via-foreground to-white/90  inset-0 w-full h-full absolute duration-500" />
    </div>
  );
};
