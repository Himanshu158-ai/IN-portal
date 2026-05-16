function NoticeBanner() {
  return (
    <div className="bg-blue-900 text-yellow-300 text-2xl font-bold p-2">

      <marquee scrollamount="15">
        ⚠ SERVER MAY STOP WORKING DURING LUNCH BREAK ⚠ KEEP REFRESHING EVERY 3 SECONDS ⚠ YOUR SESSION MAY OR MAY NOT EXPIRE ⚠
      </marquee>

    </div>
  );
}

export default NoticeBanner;