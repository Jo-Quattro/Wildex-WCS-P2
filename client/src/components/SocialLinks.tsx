import githubIcon from "../assets/images/socialNetworkLogos/githubIcon.svg";
import instagramIcon from "../assets/images/socialNetworkLogos/instagramIcon.svg";
import linkedinIcon from "../assets/images/socialNetworkLogos/linkedinIcon.svg";

function SocialLinks() {
  return (
    <section className="text-center p-5 group w-fit transition duration-500 hover:duration-200">
      <div className="flex justify-center isolate">
        <div className="size-12 bg-white grid place-items-center ring-1 ring-black/[0.08] rounded-xl relative left-2.5 top-1.5 -rotate-6 shadow-lg group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
          <a href="https://github.com/jo-quattro" target="blank">
            <img src={githubIcon} alt="icon github" className="h-10" />
          </a>
        </div>
        <div className="size-12 bg-white grid place-items-center ring-1 ring-black/[0.08] rounded-xl z-10 shadow-lg group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
          <a
            href="https://www.linkedin.com/in/jordan-aulagnier-54621a247/"
            target="blank"
          >
            <img src={linkedinIcon} alt="icon linkedin" className="h-10" />
          </a>
        </div>
        <div className="size-12 bg-white grid place-items-center ring-1 ring-black/[0.08] rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
          <a href="http://instagram.com/jordan__stagram" target="blank">
            <img src={instagramIcon} alt="instagram icon" className="h-9" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default SocialLinks;
