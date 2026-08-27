export default function SocialLinks() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <a
        href="https://www.instagram.com/shivgurukulpublicschool_"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2.5 text-sm font-black text-white transition hover:scale-105"
      >
        Instagram
      </a>

      <a
        href="https://youtube.com/@shivsagar119"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-black text-white transition hover:scale-105 hover:bg-red-700"
      >
        YouTube
      </a>
    </div>
  );
}
