export default function Video({ path }: {path: string}) {
    return (
      <video width="320" height="240" muted preload="none" autoPlay>
        <source src={path} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }