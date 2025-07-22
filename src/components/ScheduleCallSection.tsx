import Image from "next/image";

export default function ScheduleCallSection() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-[80vh] bg-cover bg-center px-4 md:px-16 lg:px-24 py-24 overflow-hidden"
      aria-label="Schedule a Call Section"
    >
      <Image
        src="/crafting-spaces- that-inspire-transform.webp"
        alt="Landscaping background"
        fill
        priority
        className="object-cover z-[-2]"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-[-1]" />

      <div className="absolute inset-0 opacity-20 bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_1px,black_2px)] bg-grid-white/10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        <div className="max-w-3xl space-y-8 group">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Crafting Spaces That
            </span>
            <br />
            <span className="text-white/90 font-light ">
              Inspire & Transform
            </span>
          </h1>

          <div className="pl-2 border-l-4 border-white/30">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed bg-black/40 backdrop-blur-3xl p-4 rounded-lg shadow-lg">
              MBH Studio is an architecture and interior design company based in
              Faisalabad. Our services include Architecture, Engineering,
              Construction, Landscape, Urban Planning, Town Planning, 3D
              Modeling, Exterior Design, Animation, and Graphics Design.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center overflow-hidden rounded-xl border border-white/20 bg-white/5 px-8 py-5 text-white backdrop-blur-lg transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-2xl"
            aria-label="Schedule a Call"
          >
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-8 bg-[conic-gradient(from_var(--shimmer-angle),transparent_0%,#fff_10%,transparent_20%)] animate-shimmer" />
              <div className="absolute inset-[1px] rounded-xl bg-black/80" />
            </div>

            <span className="text-lg md:text-xl font-medium tracking-wide transition-all duration-300 group-hover:translate-x-2">
              Schedule a Call
            </span>

            <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
              <PiGreaterThanThin className="h-5 w-5 transition-transform duration-300" />
            </div>
          </Link>

          <div className="flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-sm rounded-full border border-white/10 bg-[conic-gradient(from_var(--shimmer-angle),transparent_0%,#fff_10%,transparent_20%)] animate-shimmer">
            <div className="h-3 w-3 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm md:text-base text-white/80">
              Available Mon–Fri: 9AM – 6PM PST
            </span>
          </div>
        </div> */}

        <div className="absolute right-0 top-1/3 -translate-y-1/2 w-48 h-48 bg-white/5 backdrop-blur-sm rounded-full mix-blend-screen opacity-30 animate-float" />
        <div className="absolute left-20 bottom-1/4 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-sm rounded-lg rotate-45 opacity-20" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
        <div className="h-12 w-8 animate-bounce rounded-full border-2 border-white/30" />
      </div>
    </section>
  );
}
