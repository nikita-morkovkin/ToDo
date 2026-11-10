import Icon from './Icon'

const Intro = () => (
  <section className="mb-[25px] text-center sm:mb-[31px]">
    <p className="mb-[15px] inline-flex items-center gap-[7px] text-[9px] font-bold tracking-[.15em] text-[#64795a] sm:mb-[18px] sm:text-[10px]">
      <span className="text-[#c2a56e]"><Icon name="sparkle" size={15} /></span>
      YOUR DAY, YOUR WAY
    </p>
    <h1 className="m-0 font-serif text-[clamp(39px,12vw,49px)] font-normal leading-[1.06] tracking-[-1.9px] sm:text-[clamp(40px,6vw,53px)]">
      Make room for<br /><span className="text-[#64795a] italic">what matters.</span>
    </h1>
    <p className="mt-[15px] text-xs leading-[1.8] text-[#86837b] sm:text-[13px]">
      A calm little corner to gather your thoughts<br className="hidden sm:block" /> and get things done, one at a time.
    </p>
  </section>
)

export default Intro