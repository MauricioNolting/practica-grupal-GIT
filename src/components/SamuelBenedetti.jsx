const SamuelBenedetti = () => {
  return (
    <article
      className=" ml-3 max-w-[250px] rounded-2xl overflow-hidden  flex flex-col  bg-[#14253D] text-center
    "
    >
      <header className="p-5">
        <img
          className="rounded-2xl overflow-hidden"
          src="/img-sb.jpeg"
          alt=""
        />
      </header>

      <h3 className="text-[1.4rem] px-5 font-semibold pb-3 hover:text-[#00FFF7] transition-colors">
        Samuel Benedetti
      </h3>
      <ul className="grid grid-cols-2 px-5 gap-2 pb-4">
        <li className="text-md">Edad:</li>
        <li className="text-sm text-slate-300">21 años</li>
        <li className="text-md">País:</li>
        <li className="text-sm text-slate-300">Venezuela </li>
        <li className="text-md">Hobbies:</li>
        <li className="text-sm text-slate-300">Jugar béisbol Tocar batería</li>
      </ul>
    </article>
  );
};
export default SamuelBenedetti;
