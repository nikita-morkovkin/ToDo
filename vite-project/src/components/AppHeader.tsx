import Icon from './Icon'

const AppHeader = () => (
  <header className="flex min-h-[62px] items-center justify-between border-b border-[#3d3b3012] px-[19px] sm:min-h-[74px] sm:px-[clamp(24px,6.25vw,92px)]">
    <a className="inline-flex items-center gap-[10px] text-lg font-bold tracking-[-0.7px] text-[#302f2b] no-underline" href="#home" aria-label="Little List home">
      <span className="grid h-[29px] w-[29px] rotate-[-5deg] place-items-center rounded-[10px] bg-[#879b78] text-white">
        <Icon name="check" size={18} />
      </span>
      <span>little<span className="font-normal text-[#64795a]">list</span></span>
    </a>

    <div className="hidden items-center gap-2 text-xs tracking-[.01em] text-[#88867d] sm:flex">
      <span className="text-[#c3a968]"><Icon name="sun" size={16} /></span>
      <span>A little space for your thoughts</span>
    </div>

    <span className="inline-flex items-center gap-[7px] text-[11px] text-[#77756e]">
      <span className="h-[7px] w-[7px] rounded-full bg-[#91a983] shadow-[0_0_0_3px_#91a98320]" />
      Saved on this device
    </span>
  </header>
)

export default AppHeader