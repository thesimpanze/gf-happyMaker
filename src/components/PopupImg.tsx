const PopupImg = ({ isVisible }) => {
  return (
    <div
      className="fixed h-screen w-screen justify-center items-center top-0 left-0 flex z-50 "
      onClick={() => isVisible(false)}
    >
      <div className=" bg-white w-1/3 h-fit rounded-lg p-3 pt-4 flex flex-col gap-2">
      <span className="text-lg">Kata Pengantar</span>
      <span>

        Hi love. selamat ulang tahun yang ke 21, udah nggak kerasa aku nemenin
        kamu dari tahun 2023. langsung sajaa im not a good at writing but aku
        doain kamu yang terbaik yaa semoga apa yang kamu inginkan di tahun ini
        di kabulin semua, kamu selalu sehat selalu dan bahagia terus yaa. selalu inget juga sama orang-orang baik yang ada di sekitarmu, dan jangan lupa berbagi sedikit rezeki buat orang yang membutuhkan sayangg, enjoyy the show bb.
      </span>
        <span className="text-right">- Rasyid, ur husby</span>
      </div>

    </div>
  );
};

export default PopupImg;
