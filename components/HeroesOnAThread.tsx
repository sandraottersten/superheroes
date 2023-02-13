import Image from 'next/image'

const HeroesOnAThread = () => {
  const shadowStyle = 'absolute top-0 left-0 rounded-full border border-dark'

  return (
    <div className="absolute w-[320px] top-0 left-0 h-full flex gap-6 flex-col justify-end items-center pb-8">
      <div className="absolute w-[160px] left-0 h-full border-r border-dark translate-y-8" />
      <div className="relative">
        <Image
          src="/hairdude.jpg"
          alt="Hero 1"
          width="80"
          height="80"
          style={{
            zIndex: '50',
            position: 'relative',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <div
          className={`w-20 h-20 translate-x-2 -translate-y-2 bg-light ${shadowStyle}`}
        />
      </div>

      <div className="relative">
        <Image
          src="/turtle.jpg"
          alt="Hero 2"
          width="112"
          height="112"
          style={{
            zIndex: '50',
            position: 'relative',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <div
          className={`w-28 h-28 -translate-x-2 translate-y-2 bg-light ${shadowStyle}`}
        />
      </div>
      <div className="relative">
        <Image
          src="/weirdo.jpg"
          alt="Hero 2"
          width="160"
          height="160"
          style={{
            zIndex: '50',
            position: 'relative',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <div
          className={`w-40 h-40 translate-x-2 -translate-y-2 bg-yellow ${shadowStyle} border-none`}
        />
      </div>
      <div className="relative">
        <Image
          src="/rhino.jpg"
          alt="Hero 2"
          width="80"
          height="80"
          style={{
            zIndex: '50',
            position: 'relative',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <div
          className={`w-20 h-20 -translate-x-2 translate-y-2 bg-light ${shadowStyle}`}
        />
      </div>
      <div className="relative">
        <Image
          src="/wonder.jpg"
          alt="Hero 2"
          width="80"
          height="80"
          style={{
            zIndex: '50',
            position: 'relative',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <div
          className={`w-20 h-20 translate-x-2 translate-y-2 bg-light ${shadowStyle}`}
        />
      </div>
    </div>
  )
}

export default HeroesOnAThread
