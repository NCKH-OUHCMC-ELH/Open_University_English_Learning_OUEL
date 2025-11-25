import DateTimer from "./components/DateTimer.jsx";

function App() {
  return (
    <>
      <div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#1e90ff] to-[#8a2be2] bg-fixed bg-no-repeat font-geist">
        <DateTimer />
        <main class="flex w-full max-w-[95%] flex-col items-center justify-center rounded-2xl border-4 border-brand bg-white px-[30px] py-[60px] max-md:px-6 max-md:py-12">
          <div class="flex w-full flex-row items-center justify-center gap-10 max-md:flex-col">
            <div class="flex w-[60%] flex-col max-md:w-full">
              <div class="flex flex-col items-start gap-6 text-left max-md:gap-4">
                <h1 class="max-w-full text-balance text-[40px] font-semibold leading-[48px] tracking-[-2.4px] text-text-primary max-md:text-[32px] max-md:leading-10 max-md:tracking-tight">
                  OUEL - Open University Engish Learning
                </h1>
                <p class="text-justify text-balance text-lg leading-8 text-text-secondary">
                  Cung cấp nền tảng học tiếng Anh trực tuyến với đa dang hình
                  thức ôn tập. Đồng thời, OUEL còn hỗ trợ rèn luyện bốn kỹ năng
                  nghe, nói, đọc, viết. Còn chừng chờ gì nữa, hãy cùng bắt đầu
                  hành trình chinh phục tiếng Anh ngay hôm nay!
                </p>
              </div>
              <div class="mt-5 flex w-full max-w-[660px] flex-row gap-4 text-sm">
                <a
                  class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-sky-600 hover:bg-sky-600 px-4 font-bold text-sky-950 text-bold hover:text-white transition-all duration-200"
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiz App
                </a>
                <a
                  class="flex h-10 w-full cursor-pointer items-center justify-center rounded-full border border-brand text-brand px-4 font-bold transition-all duration-200 hover:text-white hover:bg-sky-900"
                  href="https://enhance-writing-skill.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing App
                </a>
                <a
                  class="flex w-full items-center justify-center max-md:w-full border border-orange-500 hover:bg-orange-700 text-orange-700 hover:text-white font-bold py-2 px-4 rounded-full transition-all duration-200"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listening App
                </a>
                 <a
                  class="flex h-10 w-full cursor-pointer items-center justify-center rounded-full border border-black text-emerald-900 px-4 font-bold transition-all duration-200 hover:text-white hover:bg-green-900"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Speaking App
                </a>
              </div>
            </div>
            <div class="w-[30%] flex max-md:w-full items-center justify-center">
              <img
                src="/logo.png"
                alt="OUEL Logo"
                class="w-[300px] max-md:w-full"
              />
            </div>
          </div>
          <div>
            <p class="mt-[30px] w-full text-center text-lg font-bold text-brand">
              © 2025 OU - Ho Chi Minh Open University. All rights reserved.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
