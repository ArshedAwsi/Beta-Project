const Footer = () => {
  return (
    <section>
      <div className="bg- max-w-md mx-auto md:max-w-4xl w-full max-xl:padding-x">
        <div className="bg-subscribe h-[320px] rounded-lg ">
          <div className="flex h-[220px] justify-center items-center ">
            <div className="text-center w-full max-xl:padding-x pt-24">
            <span className=" font-rubik font-bold text-white  sm:text-3xl ">Subscribe to my blog.</span>
            <br/>
            <span className="text-white font-rubik font-thin ">I post fresh content every week.</span>
            <div className="mb-6"></div>
              <div className="text-center">
                  <form className="form-inline ">
                    <input className="form-control p-2 py-2 border-black pl-5 border-r-2 rounded-md 
                    focus:outline-none placeholder:text-black " type="search"placeholder="Email address" required/>
                    <button className="border-[#8CEEAD] bg-[#8CEEAD] border-r-8 border-l-8 rounded-md py-[7px] px-4 ">Subscribe</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow border-t sm:mx-60 border-[EBF2FE] mt-[40px] mx-6 pt-[40px]"></div>
      

<footer class="bg-white">
    <div class="w-full max-w-screen-xl mx-auto ">
        <div class="sm:flex sm:items-center sm:justify-between">
        </div>
        <span class="block font-rubik font-thin text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Arshed M.Ridha™ All Rights Reserved.</span>
    </div>
</footer>


    </section>
  )
}

export default Footer