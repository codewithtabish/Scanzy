import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function HeroVideo() {
  return (
    <div
      className="relative w-full max-w-4xl px-4 mx-auto md:px-0 "
      id="hero-section"
    >
      {/* Light mode thumbnail */}
      <HeroVideoDialog
        className="block dark:hidden w-full aspect-video rounded-xl shadow-md overflow-hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCLul3SmruNlGpzw2r6myM3n5VeY14sgFH8chR"
        // videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpCgFmmwV1kwb2pQ51rzEMsL8PjH9XNi6ngqKoa"
        // thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />

      {/* Dark mode thumbnail */}
      <HeroVideoDialog
        className="hidden dark:block w-full aspect-video rounded-xl shadow-md overflow-hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpC8GrE76vdiUqeJDvMn8S0PaLEHulzAxIco9rs"
        // videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://5bl4nawh55.ufs.sh/f/aETJ5rHKEzpClnj0TmW3iFw05BH9N7M4rdogzV2CGZce1ERx"
        // thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
