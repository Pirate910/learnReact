import travelLogo from '../../assets/globe.png'

function Header(){
    return (
      <>
        <header className="header bg-[#f55a5a] text-white">
          <div className="container pt-[15.5px] pb-[15.5px] max-w-6xl mr-auto ml-auto">
            <a href="#" className="logo flex justify-center gap-[7px] items-center">
              <img className='w-[24px]' src={travelLogo} alt="globe icon" />
              <h1 className='text-[1rem] font-[Inter] font-[500]'>my travel journal</h1>
            </a>
          </div>
        </header>
      </>
    )
}

export default Header